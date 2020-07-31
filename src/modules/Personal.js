import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert,
    ScrollView
} from 'react-native';

export default class Personal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userSelected: [],
            data: [
                {
                    id: 1,
                    name: "Profile",
                    image: require('../../assets/menu/icons8-circled-user.png'),
                    count: 124.711,
                    screenUri: 'Profile',
                    screenTitle: 'Profile',
                },
                {
                    id: 2,
                    name: "Doctors",
                    image: require('../../assets/menu/icons8-doctor-male-100.png'),
                    count: 234.722,
                    screenUri: 'Doctors',
                    screenTitle: 'Doctors',
                },
                {
                    id: 3,
                    name: "Drugs",
                    image: require('../../assets/menu/icons8-pills-100.png'),
                    count: 324.723,
                    screenUri: 'Drugs',
                    screenTitle: 'Drugs',
                },
                {
                    id: 4,
                    name: "Reminders",
                    image: require('../../assets/menu/icons8-schedule.png'),
                    count: 154.573,
                    screenUri: 'Reminders',
                    screenTitle: 'Reminders',
                },
                {
                    id: 5,
                    name: "Appointments",
                    image: require('../../assets/menu/icons8-timesheet-100.png'),
                    count: 124.678,
                    screenUri: 'Profile',
                    screenTitle: 'Profile',
                },
            ]
        };
    }

    clickEventListener = (item) => {
        this.props.navigation.navigate('Articles', {url: item.screenUri, name: item.screenTitle});
        // Alert.alert('Message', 'Item clicked. '+item.name);
    }

    clickEventListener(article, name) {
        this.props.navigation.navigate('Articles', {url: article, name: name});
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.contentList}
                    columnWrapperStyle={styles.listContainer}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity style={styles.card} onPress={() => {
                                this.clickEventListener(item)
                            }}>
                                <Image style={styles.image} source={item.image}/>
                                <View style={styles.cardContent}>
                                    <View><Text style={styles.name}>{item.name}</Text>
                                        {/*<Text style={styles.count}>{item.count}</Text>*/}
                                    </View>
                                    <TouchableOpacity style={styles.followButton}
                                                      onPress={() => this.clickEventListener(item)}>
                                        <Text style={styles.followButtonText}>View</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop:20,
        backgroundColor: "#ebf0f7"
    },
    contentList: {
        flex: 1,
    },
    cardContent: {
        marginLeft: 30,
        // marginTop:10,
        // flexDirection: 'row',
    },
    image: {
        width: 80,
        height: 80,
        // borderRadius:45,
        // borderWidth:2,
        // borderColor:"#ebf0f7"
    },

    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        // shadowRadius: 7.49,
        // elevation: 1,
        // marginLeft: 20,
        paddingLeft: 20,
        // marginRight: 20,
        // marginRight: 20,
        marginTop: 2,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        // borderRadius:30,
    },

    name: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        // color:"#3399ff",
        fontWeight: 'bold'
    },
    count: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: "#d42329"
    },
    followButton: {
        marginTop: 10,
        height: 35,
        width: 100,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#dcdcdc",
    },
    followButtonText: {
        color: "#808080",
        fontSize: 12,
    },
});