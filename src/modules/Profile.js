import React, {Component} from 'react'
import {
    StyleSheet, Text, View,
} from 'react-native'
import WebView from "react-native-webview/index";

export default class Profile extends Component {

    state = {isConnected: false}

    componentDidMount() {
        // NetInfo.isConnected.fetch().then(isConnected => {
        //     if (isConnected) {
        //         Alert.alert("You are online!");
        //         this.state.isConnected = true;
        //     } else {
        //         this.state.isConnected = false;
        //     }
        // });
    }

    render() {
        // NetInfo.fetch().then(state => {
        //     if (state.isConnected) {
                return (
                    <Text>
                        Profile
                    </Text>
                )
        //     } else {
        //         return(
        //             <View style={styles.activityIndicatorContainer}>
        //                 <ActivityIndicator animating={true}/>
        //             </View>
        //         );
        //     }
        // });
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})
