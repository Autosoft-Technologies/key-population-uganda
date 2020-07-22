import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator,
    Text,
    Image,
    Dimensions,
} from "react-native";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import BlogComponent from "../components/BlogComponent";

export default class News extends React.Component {

    // state = this.props.route;
    state = {blogs: [], isLoaded: false};
    // state = {blogs: [], isLoaded: false, url: this.props.route.params.url};

    // fetchData = async () => {
    //     const response = await fetch(this.state.url);
    //     //posts
    //     const posts = await response.json();
    //     this.setState({blogs: posts});
    // }

    componentDidMount() {
        // this.fetchData();
        // this.state.isLoaded = true;
        this.setState({isLoaded: true});
    }

    openBlog = (blog) => {
        this.props.navigation.navigate('Details', blog);
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{padding: 20}}>
                            <Text>
                                News
                            </Text>
                            {/*{this.state.blogs.map((blog, index) => <BlogComponent*/}
                            {/*    blog={blog}*/}
                            {/*    key={index}*/}
                            {/*    onOpen={() => this.openBlog(blog)}/>)}*/}
                        </View>

                    </ScrollView>
                </View>
            )
        }

    }
}

const
    styles = StyleSheet.create({
        container: {
            // padding: 20,         // start below status bar
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
        /******** card **************/
        card: {
            marginHorizontal: 2,
            marginVertical: 2,
            flexBasis: '48%',
        },
        cardContent: {
            paddingVertical: 12.5,
            paddingHorizontal: 16,
        },
        cardImage: {
            // height: 100,
            // width: 100,
            alignSelf: 'center',
            marginVertical: 20,
        },
        subTitle: {
            fontSize: 12,
            flex: 1,
            color: "#252525",
            textAlign: 'center'
        }
    });
