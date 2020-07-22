import React, {Component} from 'react';
import PropTypes from "prop-types"
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {defaultStyles} from '../styles/styles';
import moment from "moment";
import HTML from "react-native-render-html/src/HTML";


// Get screen dimensions
const {width, height} = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 1, rows = 2;

export default class BlogComponent extends Component {
    // Component prop types
    static propTypes = {
        // Movie object with title, genre, and poster
        blog: PropTypes.object.isRequired,
        // Called when user taps on a poster
        onOpen: PropTypes.func.isRequired,
    }

    render() {
        const {blog, blog: {title, excerpt, better_featured_image, date}, onOpen} = this.props;
        const someText = excerpt.rendered.replace(/(\r\n|\n|\r)/gm, "");
        const titleHtml = "<div style='color:#663399; font-size:18px; font-weight: bold; padding-top: 10px'>" + title.rendered + "</div>";
        return (
            <View>
                {/*<View style={styles.imageContainer}>*/}
                    {/*<Image source={require('../../assets/pepfar-yec.jpg')} style={styles.image}/>*/}
                {/*</View>*/}
                <TouchableOpacity style={styles.container} onPress={() => onOpen(blog)}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: better_featured_image.source_url}} style={styles.image}/>
                    </View>
                    {/*<Text style={styles.title} numberOfLines={1}>{title.rendered}</Text>*/}
                    <HTML style={styles.title} html={titleHtml} imagesMaxWidth={Dimensions.get('window').width}/>
                    <HTML style={styles.genre} html={someText}/>
                    <Text style={styles.entrance} numberOfLines={1}>{moment(date).format("MMM Do YYYY")}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        height: 350,
        alignSelf: 'stretch',
        paddingBottom: 20,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
    },
    imageContainer: {
        flex: 1,                          // take up all available space
    },
    image: {
        borderRadius: 10,                 // rounded corners
        ...StyleSheet.absoluteFillObject, // fill up all space in a container
    },
    title: {
        ...defaultStyles.text,
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#663399',
    },
    genre: {
        ...defaultStyles.text,
        color: '#888c8c',
        fontSize: 14,
        lineHeight: 14,
        justifyContent: "space-evenly"
    },
    entrance: {
        ...defaultStyles.text,
        color: '#484848',
        fontSize: 12,
        // lineHeight: 14,
    },
});