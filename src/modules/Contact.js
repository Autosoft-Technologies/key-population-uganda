import React, {Component} from 'react'
import {Card, Icon} from 'native-base'
import {
    ImageBackground,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import MapView from 'react-native-maps';

class Contact extends Component {


    onPressPlace = () => {
        console.log('place')
    };

    onPressTel = number => {
        Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err))
    };

    onPressSms = () => {
        console.log('sms')
    };

    onPressEmail = email => {
        Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
            console.log('Error:', err)
        )
    };
    getInitialState() {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    renderHeader = () => {

        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    // blurRadius={10}
                    source={{uri: 'https://www.ngxuganda.com/KPU/wp-content/uploads/2020/07/peers-train-1.jpg'}}
                >
                    <View style={styles.headerColumn}>

                        <Text style={styles.userNameText}>CONTACT US</Text>

                    </View>
                </ImageBackground>

                {/*<MapView*/}
                {/*    initialRegion={{*/}
                {/*        latitude: 37.78825,*/}
                {/*        longitude: -122.4324,*/}
                {/*        latitudeDelta: 0.0922,*/}
                {/*        longitudeDelta: 0.0421,*/}
                {/*    }}*/}
                {/*/>*/}
            </View>
        )
    };

    _pressCall = () => {
        const url = 'tel:+256794545069'
        Linking.openURL(url)
    }

    _sendWhatApp = () => {
        Linking.openURL('whatsapp://send?text=hello&phone=+256794545069')
    };

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    {this.renderHeader()}
                    <Card containerStyle={styles.cardContainer}>
                        <View style={{padding: 10}}>
                            {/*contact us*/}
                            <TouchableOpacity>
                                <View style={[telStyles.container]}>
                                    <View style={telStyles.iconRow}>
                                        <Icon
                                            ios="ios-mail-outline"
                                            android="ios-call"
                                            style={{color: "#d42329",}}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        onPress={this._pressCall}
                                        style={telStyles.telRow}>
                                        <View style={telStyles.telNumberColumn}>
                                            <Text style={telStyles.telNumberText}>Call Us</Text>
                                        </View>
                                        <View style={telStyles.telNameColumn}>
                                            <Text style={telStyles.telNameText}>256 794 545 069</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={telStyles.smsRow}>
                                        <Icon
                                            ios="ios-chatbubbles-outline"
                                            android="ios-chatbubbles"
                                            style={{color: "#d42329",}}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/*contact us*/}
                            <TouchableOpacity>
                                <View style={[telStyles.container]}>
                                    <View style={telStyles.iconRow}>
                                        <Icon
                                            ios="ios-mail-outline"
                                            android="ios-call"
                                            style={{color: "#d42329",}}
                                        />

                                    </View>
                                    <TouchableOpacity
                                        onPress={this._sendWhatApp}
                                        style={telStyles.telRow}>
                                        <View style={telStyles.telNumberColumn}>
                                            <Text style={telStyles.telNumberText}>WhatsApp Us</Text>
                                        </View>
                                        <View style={telStyles.telNameColumn}>
                                            <Text style={telStyles.telNameText}>256 794 545 069</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={telStyles.smsRow}>
                                        <Icon
                                            ios="logo-whatsapp"
                                            android="logo-whatsapp"
                                            style={{color: "#d42329",}}/>
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
                                            ios="ios-mail-outline"
                                            android="ios-mail"
                                            style={{color: "#d42329",}}/>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            Linking.openURL('mailto:keypopulationug@gmail.com?subject=KPU%20APP%20CONTACT');
                                        }}
                                        style={mailStyles.emailRow}>
                                        <View style={mailStyles.emailColumn}>
                                            <Text style={mailStyles.emailText}>Email</Text>
                                        </View>
                                        <View style={mailStyles.emailNameColumn}>
                                            <Text style={mailStyles.emailNameText}>keypopulationug@gmail.com</Text>
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
                                            ios="ios-globe"
                                            android="md-globe"
                                            style={{color: "#d42329",}}/>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            Linking.openURL('https://www.ngxuganda.com/KPU/');
                                        }}
                                        style={mailStyles.emailRow}>
                                        <View style={mailStyles.emailColumn}>
                                            <Text style={mailStyles.emailText}>Website</Text>
                                        </View>
                                        <View style={mailStyles.emailNameColumn}>
                                            <Text style={mailStyles.emailNameText}>www.ngxuganda.com/KPU/</Text>
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
                            <TouchableOpacity>
                                <View style={[mailStyles.container]}>
                                    <View style={mailStyles.iconRow}>
                                        <Icon
                                            ios="ios-mail-outline"
                                            android="ios-pin"
                                            style={{color: "#d42329",}}/>
                                    </View>
                                    <View style={mailStyles.emailRow}>
                                        <View style={mailStyles.emailColumn}>
                                            <Text style={mailStyles.emailText}>Location</Text>
                                        </View>
                                        <View style={mailStyles.emailNameColumn}>
                                            <Text style={mailStyles.emailNameText}>
                                                P.O Box 25603, Kampala – Uganda,
                                                Bweyogerere – Jokas Road,
                                                Bweyogerere Industrial Area
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        // backgroundColor: '#FFF',
        // borderWidth: 0,
        flex: 1,
        margin: 0,
        // padding: 0,
    },
    container: {
        flex: 1,
    },
    emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 35,
    },
    headerColumn: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        height: 170,
    },
    placeIcon: {
        color: 'white',
        fontSize: 26,
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
    },
    userImage: {
        borderColor: '#d42329',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 90,
        textAlign: 'center',
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
        color: '#d42329',
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
        color: '#d42329',
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

export default Contact
