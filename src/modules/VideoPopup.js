import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Animated,
    Dimensions,
    LayoutAnimation,
    PanResponder,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View,
    } from 'react-native';
import YoutubePlayer from 'youtubeplayer-react-native';

// Get screen dimensions
const {width, height} = Dimensions.get('window');
// Set default popup height to 67% of screen height
const defaultHeight = height * 0.67;

export default class VideoPopup extends Component {

    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        // Movie object that has title, genre, poster, days and times
        video: PropTypes.object,
        // Gets called when popup closed
        onClose: PropTypes.func,
    }

    state = {
        // Animates slide ups and downs when popup open or closed
        position: new Animated.Value(this.props.isOpen ? 0 : height),
        // Backdrop opacity
        opacity: new Animated.Value(0),
        // Popup height that can be changed by pulling it up or down
        height: defaultHeight,
        // Expanded mode with bigger poster flag
        expanded: false,
        // Visibility flag
        visible: this.props.isOpen,
    };

    // When user starts pulling popup previous height gets stored here
    // to help us calculate new height value during and after pulling
    _previousHeight = 0

    componentWillMount() {
        // Initialize PanResponder to handle move gestures
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                const {dx, dy} = gestureState;
                // Ignore taps
                if (dx !== 0 && dy === 0) {
                    return true;
                }
                return false;
            },
            onPanResponderGrant: (evt, gestureState) => {
                // Store previous height before user changed it
                this._previousHeight = this.state.height;
            },
            onPanResponderMove: (evt, gestureState) => {
                // Pull delta and velocity values for y axis from gestureState
                const {dy, vy} = gestureState;
                // Subtract delta y from previous height to get new height
                let newHeight = this._previousHeight - dy;

                // Animate heigh change so it looks smooth
                LayoutAnimation.easeInEaseOut();

                // Switch to expanded mode if popup pulled up above 80% mark
                if (newHeight > height - height / 5) {
                    this.setState({expanded: true});
                } else {
                    this.setState({expanded: false});
                }

                // Expand to full height if pulled up rapidly
                if (vy < -0.75) {
                    this.setState({
                        expanded: true,
                        height: height
                    });
                }

                // Close if pulled down rapidly
                else if (vy > 0.75) {
                    this.props.onClose();
                }
                // Close if pulled below 75% mark of default height
                else if (newHeight < defaultHeight * 0.75) {
                    this.props.onClose();
                }
                // Limit max height to screen height
                else if (newHeight > height) {
                    this.setState({height: height});
                }
                else {
                    this.setState({height: newHeight});
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                const {dy} = gestureState;
                const newHeight = this._previousHeight - dy;

                // Close if pulled below default height
                if (newHeight < defaultHeight) {
                    this.props.onClose();
                }

                // Update previous height
                this._previousHeight = this.state.height;
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
    }

    // Handle isOpen changes to either open or close popup
    componentWillReceiveProps(nextProps) {
        // isOpen prop changed to true from false
        if (!this.props.isOpen && nextProps.isOpen) {
            this.animateOpen();
        }
        // isOpen prop changed to false from true
        else if (this.props.isOpen && !nextProps.isOpen) {
            this.animateClose();
        }
    }

    // Open popup
    animateOpen() {
        // Update state first
        this.setState({visible: true}, () => {
            Animated.parallel([
                // Animate opacity
                Animated.timing(
                    this.state.opacity, {toValue: 0.5} // semi-transparent
                ),
                // And slide up
                Animated.timing(
                    this.state.position, {toValue: 0} // top of the screen
                ),
            ]).start();
        });
    }

    // Close popup
    animateClose() {
        Animated.parallel([
            // Animate opacity
            Animated.timing(
                this.state.opacity, {toValue: 0} // transparent
            ),
            // Slide down
            Animated.timing(
                this.state.position, {toValue: height} // bottom of the screen
            ),
        ]).start(() => this.setState({
            // Reset to default values
            height: defaultHeight,
            expanded: false,
            visible: false,
        }));
    }

    // Dynamic styles that depend on state
    getStyles = () => {
        return {
            imageContainer: this.state.expanded ? {
                width: width / 2,         // half of screen widtj
            } : {
                maxWidth: 110,            // limit width
                marginRight: 10,
            },
            movieContainer: this.state.expanded ? {
                flexDirection: 'column',  // arrange image and movie info in a column
                alignItems: 'center',     // and center them
            } : {
                flexDirection: 'row',     // arrange image and movie info in a row
            },
            movieInfo: this.state.expanded ? {
                flex: 0,
                alignItems: 'center',     // center horizontally
                paddingTop: 20,
            } : {
                flex: 1,
                justifyContent: 'center', // center vertically
            },
            title: this.state.expanded ? {
                textAlign: 'center',
            } : {},
        };
    }

    render() {
        const {
            video,
        } = this.props;
        // Pull out movie data
        // const { title, genre, poster, days, times } = video || {};
        // Render nothing if not visible
        if (!this.state.visible) {
            return null;
        }
        return (
            <View style={styles.container}>
                {/* Closes popup if user taps on semi-transparent backdrop */}
                <TouchableWithoutFeedback onPress={this.props.onClose}>
                    <Animated.View style={[styles.backdrop, {opacity: this.state.opacity}]}/>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={[styles.modal, {
                        // Animates height
                        height: this.state.height,
                        // Animates position on the screen
                        transform: [{translateY: this.state.position}, {translateX: 0}]
                    }]}
                >

                    {/* Content */}
                    <View style={styles.content}>
                        {/* Movie poster, title and genre */}
                        <YoutubePlayer
                            videoId={video.id.videoId}
                            width={Dimensions.get('window').width}
                            height={210}
                            showControls={true}
                            autoplay={true}
                        />
                        <Text style={styles.title}>
                            {video.snippet.title}
                        </Text>

                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <TouchableHighlight
                            underlayColor="#9575CD"
                            style={styles.buttonContainer}
                            onPress={this.props.onClose}
                        >
                            <Text style={styles.button}>Close</Text>
                        </TouchableHighlight>
                    </View>
                </Animated.View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    // Main container
    container: {
        ...StyleSheet.absoluteFillObject,   // fill up all screen
        justifyContent: 'flex-end',         // align popup at the bottom
        backgroundColor: 'transparent',     // transparent background
    },
    // Semi-transparent background below popup
    backdrop: {
        ...StyleSheet.absoluteFillObject,   // fill up all screen
        backgroundColor: 'black',
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
    },
    // Popup
    modal: {
        backgroundColor: '#E0E0E0',
    },
    content: {
        flex: 1,
        marginBottom: 0,
    },
    // Movie container
    movieContainer: {
        flex: 1,                            // take up all available space
        marginBottom: 20,
    },
    imageContainer: {
        flex: 1,                            // take up all available space
        backgroundColor: '#FDD7E4',
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    image: {
        borderRadius: 10,                   // rounded corners
        ...StyleSheet.absoluteFillObject,   // fill up all space in a container
    },
    movieInfo: {
        backgroundColor: 'transparent',     // looks nicier when switching to/from expanded mode
    },
    title: {
        fontSize: 20,
        color: '#3c3c3c',
        padding: 10,
    },
    genre: {
        color: '#BBBBBB',
        fontSize: 14,
    },
    sectionHeader: {
        color: '#AAAAAA',
    },
    // Footer
    footer: {
        padding: 10,
    },
    buttonContainer: {
        backgroundColor: '#663399',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    button: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});