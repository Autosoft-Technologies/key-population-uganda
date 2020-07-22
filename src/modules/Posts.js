import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

const baseLink = "https://www.esrhr.org/wp-json/wp/v2/posts?per_page=100&categories=";
// const baseLink = "https://ngxuganda.com/Ye…aids-resources/stickers/"

export default class Posts extends Component {

    constructor(props) {
        super(props);
    }

    viewArticles(article, name) {
        // return undefined;
        // alert(article);
        // navigator.navigate()
        this.props.navigation.navigate('Articles', {url: article, name: name});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{flex: 1, backgroundColor: '#fff'}}
                        onPress={() => this.viewArticles(baseLink + 8, 'Latest News')} // Action
                    >
                        <View style={styles.cardHeader}>
                            <Text style={styles.title}>Latest News</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../../assets/icons8-news-512.png')}/>
                        <View style={styles.cardFooter}>
                            <Text style={styles.subTitle}>Top Headlines</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{flex: 1, backgroundColor: '#e1e1e1'}}
                        onPress={() => this.viewArticles(baseLink + 9, 'Blogs')} // Action
                    >
                        <View style={styles.cardHeader}>
                            <Text style={styles.title}>Blogs</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../../assets/icons8-blogger-512.png')}/>
                        <View style={styles.cardFooter}>
                            <Text style={styles.subTitle}>Recent blogs</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{flex: 1, backgroundColor: '#e1e1e1'}}
                        onPress={() => this.viewArticles(baseLink + 14, 'NGO News')} // Action
                    >
                        <View style={styles.cardHeader}>
                            <Text style={styles.title}>NGO News</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../../assets/icons8-handshake-heart-512.png')}/>
                        <View style={styles.cardFooter}>
                            <Text style={styles.subTitle}>NGO happenings</Text>
                        </View>


                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{flex: 1, backgroundColor: '#fff'}}
                        onPress={() => this.viewArticles(baseLink + 15, 'Gossip News')} // Action
                    >
                        <View style={styles.cardHeader}>
                            <Text style={styles.title}>Gossip News</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../../assets/chat-room-512.png')}/>
                        <View style={styles.cardFooter}>
                            <Text style={styles.subTitle}>Top Gossip</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        width: Dimensions.get('window').width,
        // marginTop:20,
    },
    list: {
        //paddingHorizontal: 5,
        // backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    },
    /******** card **************/
    card: {
        marginHorizontal: 2,
        marginVertical: 2,
        flexBasis: '48%',
    },
    cardHeader: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 100,
        width: 100,
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        flex: 1,
        color: "#363636",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 12,
        flex: 1,
        color: "#252525",
        textAlign: 'center'
    },
    icon: {
        height: 20,
        width: 20,
    }
});
