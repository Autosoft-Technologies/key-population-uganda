import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";
import BlogComponent from "../components/BlogComponent";

export default class Home extends React.Component {
    state = {blogs: [], isLoaded: false};
    fetchData = async () => {
        const response = await fetch("http://esrhr.org/wp-json/wp/v2/posts?per_page=100");
        //posts
        const posts = await response.json();
        this.setState({blogs: posts});
    }

    componentDidMount() {
        this.fetchData();
        this.state.isLoaded = true;
    }

    openBlog = (blog) => {
        // alert('Post details under devt');
        this.props.navigation.navigate('Details', blog);
    }

    render() {
        if(!this.state.isLoaded){
            return(
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        }else{
            return (
                <View style={styles.container}>
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        {this.state.blogs.map((blog, index) => <BlogComponent
                            blog={blog}
                            key={index}
                            onOpen={() => this.openBlog(blog)}/>)}
                    </ScrollView>
                </View>
            )
        }

    }
}

const
    styles = StyleSheet.create({
        container: {
            padding: 20,         // start below status bar
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
        activityIndicatorContainer:{
            backgroundColor: "#fff",
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
    });
