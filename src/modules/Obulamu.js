import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    Linking,
    FlatList,
} from 'react-native';

const base_pages = "https://www.esrhr.org/wp-json/wp/v2/pages/";

export default class Obulamu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: "Stickers",
                    color: "#DC143C",
                    members: "HIV",
                    image: require('../../assets/icons-hiv-stickers.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/hiv-aids-resources/stickers/"
                },
                {
                    id: 1,
                    title: "Stickers",
                    color: "#4682B4",
                    members: "SRHR",
                    image: require('../../assets/srhr-stickers.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/srhr-resources/stickers/",
                },
                {
                    id: 2,
                    title: "Myths And Misconceptions",
                    color: "#2E8B57",
                    members: "HIV",
                    image: require('../../assets/hiv-myth.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/hiv-aids-resources/myths-and-misconceptions/"
                },
                {
                    id: 2,
                    title: "Myths And Misconceptions",
                    color: "#4B0082",
                    members: "SRHR",
                    image: require('../../assets/srhr-myth.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/srhr-resources/myths-and-misconceptions/"
                },
                {
                    id: 4,
                    title: "Posters",
                    color: "#DB7093",
                    members: "SRHR",
                    image: require('../../assets/poster-one.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/srhr-resources/posters/"
                },
                {
                    id: 5,
                    title: "Posters",
                    color: "#00BFFF",
                    members: "HIV",
                    image: require('../../assets/poster-two.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/hiv-aids-resources/posters/"
                },
                {
                    id: 6,
                    title: "Guides",
                    color: "#20B2AA",
                    members: "SRHR",
                    image: require('../../assets/guide-one.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/srhr-resources/guides/"
                },
                {
                    id: 8,
                    title: "Guides",
                    color: "#B22222",
                    members: "HIV",
                    image: require('../../assets/guide-two.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/guides/"
                },
                {
                    id: 9,
                    title: "Menstrual Hygiene Management",
                    color: "#191970",
                    members: "SRHR",
                    image: require('../../assets/menstral-one.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/srhr-resources/menstrual-hygiene-management/"
                },
                {
                    id: 9,
                    title: "HIV Aids Q&A",
                    color: "#FF8C00",
                    members: "HIV",
                    image: require('../../assets/questions.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/hiv-aids-resources/qa/"
                },
                {
                    id: 9,
                    title: "Family Planning",
                    color: "#008080",
                    members: "SRHR",
                    image: require('../../assets/family.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/srhr-resources/family-planning/"
                },
                {
                    id: 9,
                    title: "SRHR Q&A",
                    color: "#696969",
                    members: "SRHR",
                    image: require('../../assets/answers.png'),
                    url: base_pages + 98,
                    baseLink: "https://www.esrhr.org/obulamu/srhr-resources/qa/"
                },
            ]
        };
    }

    clickEventListener(item) {
        // alert(item.url)
        // this.props.navigation.navigate('BulamuDetails', {url: item.url});
        Linking.openURL(item.baseLink).catch(err => alert('Connection failed'));
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                          contentContainerStyle={styles.listContainer}
                          data={this.state.data}
                          horizontal={false}
                          numColumns={2}
                          keyExtractor={(item) => {
                              return item.id;
                          }}
                          renderItem={({item}) => {
                              return (
                                  <TouchableOpacity
                                      style={[styles.card, {backgroundColor: item.color}]}
                                      onPress={() => this.clickEventListener(item)}>
                                      <View style={styles.cardHeader}>
                                          <Text style={styles.title}>{item.title}</Text>
                                      </View>
                                      <Image style={styles.cardImage} source={item.image}/>
                                      <View style={styles.cardFooter}>
                                          <Text style={styles.subTitle}>{item.members}</Text>
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
        margin: 0,
        width: Dimensions.get('window').width,
        // marginTop:20,
    },
    list: {
        //paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
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
        paddingVertical: 17,
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
        height: 70,
        width: 70,
        alignSelf: 'center'
    },
    title: {
        fontSize: 16,
        flex: 1,
        color: "#FFFFFF",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 12,
        flex: 1,
        color: "#FFFFFF",
        textAlign: 'center'
    },
    icon: {
        height: 20,
        width: 20,
    }
});
