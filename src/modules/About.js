import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Linking,
    StatusBar,
    TouchableOpacity
} from "react-native";
import {
    Thumbnail,
    Icon,
    Button, Card,
} from "native-base";
// import Constants from 'expo-constants';
import data from '../data/about';
import HTML from "react-native-render-html/src/HTML";
import {Accordion, Panel} from '@tickid/react-native-accordion';

export default class About extends Component {
    state = {about: [], isLoaded: false, scrollY: new Animated.Value(0)};

    componentDidMount() {
        this.state.isLoaded = true;
    }

    // _sendWhatApp = () => {
    //     // Linking.openURL('whatsapp://send?text=hello&phone=+256777606962')
    //     console.log('Whatsapping .......')
    // };

    openLink = (url) => {
        // Linking.openURL(url)
        alert('Linking .......')
    };


    render() {
        const coverMov = this.state.scrollY.interpolate({
            inputRange: [0, 94, 95],
            outputRange: [0, -94, -94]
        });
        const avatarMov = this.state.scrollY.interpolate({
            inputRange: [0, 150, 151],
            outputRange: [0, -150, -150]
        });
        const avatarOp = this.state.scrollY.interpolate({
            inputRange: [0, 94, 95],
            outputRange: [1, 0, 0]
        });
        const headerOp = this.state.scrollY.interpolate({
            inputRange: [95, 180, 181],
            outputRange: [0, 0.75, 0.75]
        });
        const headerContentOp = this.state.scrollY.interpolate({
            inputRange: [0, 180, 210],
            outputRange: [0, 0, 1]
        });

        return (
            <View style={{flex: 1}}>
                <Animated.Image
                    source={require('../../assets/yec-radio-about.jpg')}
                    style={{
                        width: "100%",
                        height: 170,
                        zIndex: 2,
                        position: "absolute",
                        transform: [{translateY: coverMov}]
                    }}
                />
                <Animated.View
                    style={{
                        width: "100%",
                        position: "absolute",
                        backgroundColor: "#121212",
                        height: 56 + StatusBar.currentHeight,
                        zIndex: 13,
                        opacity: headerOp,
                        paddingTop: StatusBar.currentHeight,
                        alignItems: "center"
                    }}
                >
                    <Animated.View
                        style={{
                            opacity: headerContentOp,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }}
                    >

                        <Text style={{fontSize: 24, color: "white", flex: 1, paddingLeft: 20}}>
                            ABOUT US
                        </Text>
                    </Animated.View>
                </Animated.View>
                <Animated.View
                    style={{
                        zIndex: 4,
                        position: "absolute",
                        top: 135,
                        opacity: avatarOp,
                        transform: [{translateY: avatarMov}]
                    }}
                >
                    <Thumbnail
                        large
                        source={require('../../assets/iconround.png')}
                        style={styles.avatarbg}
                    />
                </Animated.View>
                <Animated.ScrollView

                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {contentOffset: {y: this.state.scrollY}}
                            }
                        ],
                        {
                            useNativeDriver: true
                        }
                    )}
                >
                    <View
                        style={StyleSheet.flatten([
                            styles.header,
                            {marginTop: 150 + StatusBar.currentHeight}
                        ])}
                    >
                        <Text style={styles.nameText}>ABOUT US</Text>
                    </View>

                    <View style={styles.header}>

                        <View>
                            <HTML style={styles.genre} html={data.content}/>
                        </View>

                        <View>
                            <Accordion
                                containerStyle={styles.acordion}
                                iconColor="#663399"
                            >
                                <Panel
                                    title="Our Mission"
                                    containerStyle={styles.accordionPannel}
                                >
                                    <Text>To amplify Young women and men Voices for Gender Equality and social justice
                                        through research, capacity building Advocacy, and community mobilization and
                                        empowerment.</Text>
                                </Panel>

                                <Panel
                                    title="Our Vision"
                                    containerStyle={styles.accordionPannel}
                                >
                                    <Text>A transformed society where young women and men fully enjoy their human
                                        rights</Text>
                                </Panel>

                                <Panel
                                    title="Radio Approaches"
                                    containerStyle={styles.accordionPannel}
                                >
                                    <Text>
                                        Led by Youth for the Youth, the YEC Radio programs provide personalized
                                        interaction with a peer outreach Digital champions (Online Presenters) trained
                                        in online behavior change communication through social media, who not only
                                        provides accurate information about Youth priority issues including Health,
                                        Education, Available Job opportunities among others but also referrals to
                                        youth-friendly services. Using unique identifier codes for each user, the
                                        program tracks cyber-education sessions, referrals, and effective referrals,
                                        remaining engaged with youth and responding to questions throughout the
                                        process.
                                    </Text>
                                </Panel>

                                <Panel
                                    title="Why you should work with us"
                                    containerStyle={styles.accordionPannel}
                                >
                                    <Text>YEC Radio Online programs co-designed with youth which leverage comprehensive
                                        digital marketing and communication strategies can increase access to
                                        youth-friendly information and services in addition to increasing Youth
                                        interaction online.</Text>
                                </Panel>

                            </Accordion>
                        </View>


                        <Card containerStyle={{flex: 1, margin: 0,}}>
                            <View style={{padding: 20}}>

                                <TouchableOpacity>
                                    <View style={[mailStyles.container]}>
                                        <View style={mailStyles.iconRow}>
                                            <Icon
                                                ios="logo-facebook"
                                                android="logo-facebook"
                                                style={{color: "#0054a6"}}
                                            />
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                Linking.openURL('fb://facewebmodal/f?href=https://facebook.com/YouthEqualityCenterUganda/');
                                            }}
                                            style={mailStyles.emailRow}>
                                            <View style={mailStyles.emailColumn}>
                                                <Text style={mailStyles.emailText}>Facebook</Text>
                                            </View>
                                            <View style={mailStyles.emailNameColumn}>
                                                <Text style={mailStyles.emailNameText}>Youth Equality Center - YEC</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                                {/*Seperator line*/}
                                <View style={sepStyles.container}>
                                    <View style={sepStyles.separatorOffset}/>
                                    <View style={sepStyles.separator}/>
                                </View>

                                <TouchableOpacity>
                                    <View style={[mailStyles.container]}>
                                        <View style={mailStyles.iconRow}>
                                            <Icon
                                                ios="logo-instagram"
                                                android="logo-instagram"
                                                style={{color: "#663399"}}
                                            />
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                Linking.openURL('https://www.instagram.com/youthequality.center/');
                                            }}
                                            style={mailStyles.emailRow}>
                                            <View style={mailStyles.emailColumn}>
                                                <Text style={mailStyles.emailText}>Instagram</Text>
                                            </View>
                                            <View style={mailStyles.emailNameColumn}>
                                                <Text style={mailStyles.emailNameText}>youthequality.center</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                                {/*Seperator line*/}
                                <View style={sepStyles.container}>
                                    <View style={sepStyles.separatorOffset}/>
                                    <View style={sepStyles.separator}/>
                                </View>


                                <TouchableOpacity>
                                    <View style={[mailStyles.container]}>
                                        <View style={mailStyles.iconRow}>
                                            <Icon
                                                ios="logo-youtube"
                                                android="logo-youtube"
                                                style={{color: "#ff0000",}}/>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                Linking.openURL('https://www.youtube.com/channel/UCmF6poejsAf-CyR-yPxjLUA');
                                            }}
                                            style={mailStyles.emailRow}>
                                            <View style={mailStyles.emailColumn}>
                                                <Text style={mailStyles.emailText}>You Tube</Text>
                                            </View>
                                            <View style={mailStyles.emailNameColumn}>
                                                <Text style={mailStyles.emailNameText}>Youth Equality Centre YEC</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                                {/*Seperator line*/}
                                <View style={sepStyles.container}>
                                    <View style={sepStyles.separatorOffset}/>
                                    <View style={sepStyles.separator}/>
                                </View>

                                {/*Location view*/}
                                <TouchableOpacity
                                    onPress={() => Linking.openURL('https://twitter.com/youthEcenter')}
                                >
                                    <View style={[mailStyles.container]}>
                                        <View style={mailStyles.iconRow}>
                                            <Icon
                                                ios="logo-twitter"
                                                android="logo-twitter"
                                                style={{color: "#00aeef",}}/>
                                        </View>
                                        <View style={mailStyles.emailRow}>
                                            <View style={mailStyles.emailColumn}>
                                                <Text style={mailStyles.emailText}>Twitter</Text>
                                            </View>
                                            <View style={mailStyles.emailNameColumn}>
                                                <Text style={mailStyles.emailNameText}>@youthEcenter</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                {/*Seperator line*/}
                                <View style={sepStyles.container}>
                                    <View style={sepStyles.separatorOffset}/>
                                    <View style={sepStyles.separator}/>
                                </View>

                                {/*SoundCloud view*/}
                                <TouchableOpacity
                                    onPress={() => Linking.openURL('https://soundcloud.com/kaviri-ali-harrison')}
                                >
                                    <View style={[mailStyles.container]}>
                                        <View style={mailStyles.iconRow}>
                                            <Icon
                                                ios="ios-cloud"
                                                android="ios-cloud"
                                                style={{color: "#f26522",}}
                                            />
                                        </View>
                                        <View style={mailStyles.emailRow}>
                                            <View style={mailStyles.emailColumn}>
                                                <Text style={mailStyles.emailText}>Sound Cloud</Text>
                                            </View>
                                            <View style={mailStyles.emailNameColumn}>
                                                <Text style={mailStyles.emailNameText}>Youth Equality Centre - YEC Radio</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                {/*Seperator line*/}
                                <View style={sepStyles.container}>
                                    <View style={sepStyles.separatorOffset}/>
                                    <View style={sepStyles.separator}/>
                                </View>


                                <TouchableOpacity>
                                    <View style={[mailStyles.container]}>
                                        <View style={mailStyles.iconRow}>
                                            <Icon
                                                ios="ios-globe"
                                                android="md-globe"
                                                style={{color: "#663399",}}/>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                Linking.openURL('https://www.esrhr.org/');
                                            }}
                                            style={mailStyles.emailRow}>
                                            <View style={mailStyles.emailColumn}>
                                                <Text style={mailStyles.emailText}>Website</Text>
                                            </View>
                                            <View style={mailStyles.emailNameColumn}>
                                                <Text style={mailStyles.emailNameText}>www.esrhr.org</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </View>

                </Animated.ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "column",
        backgroundColor: "white"
    },
    avatarbg: {
        //marginTop: -95,
        marginLeft: 20,
        padding: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        zIndex: 12
        // borderRadius: 180
    },
    avatar: {
        marginLeft: 26,
        marginTop: -95,
        width: 89,
        height: 89,
        borderRadius: 44,
        zIndex: 12
    },
    headerButton: {
        // alignSelf: "flex-start",
        // paddingLeft: 7,
        // paddingRight: 10,
        paddingBottom: 3,
        paddingTop: 3,
        // marginRight: 8,
        textAlign: 'center',
    },
    nameText: {
        fontSize: 26,
        fontWeight: "500",
        marginLeft: 14,
        textAlign: 'center'
    },
    usernameText: {
        color: "#777",
        fontSize: 16,
        marginLeft: 14
    },
    bioText: {
        fontSize: 16,
        marginLeft: 14,
        marginTop: 10,
        maxHeight: 41
    },
    acordion: {
        padding: 10,
        textAlign: 'justify',
        backgroundColor: '#c2c2c2',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    accordionPannel: {
        textAlign: 'justify',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        padding: 10,
        marginLeft: -10,
        marginRight: -10,
    },
    locationText: {
        fontSize: 16,
        marginLeft: 14,
        marginTop: 10,
        color: "#555"
    },
    topMargin: {
        // marginTop: 25
    },
    content: {
        padding: 10,
        backgroundColor: "white"
    },
    heading: {
        fontSize: 32,
        fontWeight: "400",
        marginBottom: 30
    },
    tweet: {
        paddingTop: 20,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "column"
    },
    tweetText: {
        marginTop: 10,
        fontSize: 18,
        color: "#555"
    },
    tweetFooter: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    badgeCount: {
        fontSize: 12,
        paddingLeft: 5
    },
    footerIcons: {
        flexDirection: "row",
        alignItems: "center"
    },
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

});

const mailStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 25,
    },
    emailColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    emailIcon: {
        color: '#663399',
        fontSize: 30,
    },
    emailNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    emailNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    },
    emailRow: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    emailText: {
        fontSize: 16,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
});

const sepStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    separatorOffset: {
        flex: 2,
        flexDirection: 'row',
    },
    separator: {
        flex: 8,
        flexDirection: 'row',
        borderColor: '#EDEDED',
        borderWidth: 0.8,
    },
});

const telStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 25,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
    smsIcon: {
        color: 'gray',
        fontSize: 30,
    },
    smsRow: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    telIcon: {
        color: '#663399',
        fontSize: 30,
    },
    telNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    telNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    },
    telNumberColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    telNumberText: {
        fontSize: 16,
    },
    telRow: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
