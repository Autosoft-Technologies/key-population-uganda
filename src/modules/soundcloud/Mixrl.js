import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    ActivityIndicator,
} from 'react-native'

import WebView from "react-native-webview";

export default class Mixrl extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 200 }}>
                <WebView
                    source={{uri: 'https://mixlr.com/users/5692409/embed?autoplay=true'}}
                    style={{width: Dimensions.get('window').width}}
                    automaticallyAdjustContentInsets={false}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    onError={() => <ActivityIndicator size={'small'} />}
                />
                </View>
                <View style={styles.containerFluid}>
                    <Text style={styles.genre}>
                        This app is a product of Youth Equality Centre - YEC with kind support from the US president's Emergency plan for AIDS Relief (PEPPER)
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/pepfar-yec.jpg')} style={styles.image}/>
                </View>

            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
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
    image: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    containerFluid: {
        padding: 20,
    },
    genre: {
        color: '#353839',
        fontSize: 14,
    },
})