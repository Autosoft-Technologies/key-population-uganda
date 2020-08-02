import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    AsyncStorage
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import HomeNav from "../navigation/HomeNav";

const data = [
    {
        title: 'Free medical advice',
        image: require('../../assets/1.png'),
        bg: '#9e0b0f',
    },
    {
        title: 'Access to healthy centres',
        image: require('../../assets/2.png'),
        bg: '#cc161d',
    },
    {
        title: 'Automate your schedules',
        image: require('../../assets/one.jpg'),
        bg: '#9e0b0f',
    },
];

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
    },
    image: {
        width: 320,
        height: 320,
        marginTop: 32,
    },
    title: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
});

export default class HomeSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_Main_App: false,
            loading: true,
        };
    }

    componentDidMount() {
        AsyncStorage.getItem('first_time').then((value) => {
            this.setState({ show_Main_App: !!value, loading: false });
        });
    }

    on_Done_all_slides = () => {
        AsyncStorage.setItem('first_time', 'true').then(() => {
            this.setState({ show_Main_App: true });
        });
    };

    on_Skip_slides = () => {
        AsyncStorage.setItem('first_time', 'true').then(() => {
            this.setState({ show_Main_App: true });
        });
    };

    _renderItem = ({item}) => {

        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.bg,
                }}>
                <SafeAreaView style={styles.slide}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image source={item.image} style={styles.image} />
                </SafeAreaView>
            </View>
        );
    };

    _keyExtractor = (item) => item.title;

    render() {
        if (this.state.show_Main_App) {
            return (
                <HomeNav/>
            )
        } else {
            return (
                <View style={{flex: 1}}>
                    <StatusBar translucent backgroundColor="transparent"/>
                    <AppIntroSlider
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        onDone = {this.on_Done_all_slides}
                        onSkip = {this.on_Skip_slides}
                        showSkipButton
                        showPrevButton
                        data={data}
                    />
                </View>
            );
        }
    }
}
