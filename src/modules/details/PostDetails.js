import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ScrollView, Image, } from "react-native";
import HTML from "react-native-render-html/src/HTML";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

export default class PostDetails extends Component {
    state = this.props.route;

    render() {
        // console.log(this.state.params.content);
        const blog = this.state.params;
        return (
            <ScrollView style={styles.container} onPress={() => onOpen(blog)}>

                <View style={styles.imageContainer}>
                    <Image source={{uri: blog.better_featured_image.source_url}} style={styles.image}/>
                </View>
                <View style={styles.containerFluid}>
                    <HTML style={styles.genre} html={blog.content.rendered}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 0,         // start below status bar
    },
    containerFluid: {
        padding: 20,
    },
    scrollContent: {
        flexDirection: 'row',   // arrange posters in rows
        flexWrap: 'wrap',       // allow multiple rows
    },
    title: {
        fontSize: 18,
        color: '#444f6c',
        margin: 8,
        fontWeight: 'bold'
    },
    description: {
        flex: 1,
        paddingVertical: 16,
        fontWeight: '400',
        fontSize: 18,
        color: Colors.dark,
    },
    lottie: {
        width: 100,
        height: 100
    },
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: 200,
    }
});
