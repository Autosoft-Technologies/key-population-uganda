import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text, TouchableOpacity, Linking,} from "react-native";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

import Home from "../modules/Home";
import Contact from "../modules/Contact";
import About from "../modules/About";
import ProfileScreen from "../modules/Profile/ProfileScreen";
import Profile from "../modules/Profile";
import PostDetails from "../modules/details/PostDetails";
import Obulamu from "../modules/Obulamu";
import Mixrl from "../modules/soundcloud/Mixrl";
import Posts from "../modules/Posts";
import Articles from "../modules/Articles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Blogs from "../modules/Blogs";
import News from "../modules/News";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#d42329',
    },
};
export default class HomeNav extends Component {
    constructor(props){
        super(props);
    }
    // navigation = this.props;

// ------------------------------------------ Top Navigation bars


    createTopTabs = () => {
        return (
            <TopTabs.Navigator>
                <TopTabs.Screen name="News" component={News} />
                <TopTabs.Screen name="Blogs" component={Blogs} />
            </TopTabs.Navigator>
        )
    };

    createBottomTabs = () => {
        return (
            <BottomTabs.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'md-home' : 'md-home';
                        } else if (route.name === 'Centres') {
                            iconName = focused ? 'md-medkit' : 'ios-medkit';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'ios-person' : 'md-person';
                        } else if (route.name === 'About') {
                            iconName = focused ? 'md-globe' : 'ios-globe';
                        } else if (route.name === 'Contact') {
                            iconName = focused ? 'md-mail' : 'ios-mail';
                        }
                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#d42329',
                    inactiveTintColor: 'gray',
                }}
            >
                <BottomTabs.Screen name="Home" children={this.createTopTabs}/>
                <BottomTabs.Screen name="Centres" component={Posts}/>
                <BottomTabs.Screen name="About" component={About}/>
                <BottomTabs.Screen name="Contact" component={Contact}/>
                <BottomTabs.Screen name="Profile" component={Profile}/>
            </BottomTabs.Navigator>
        )
    };


    // ------------------------------------------ Main/Drawer Navigation bars
    render() {

        return (
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor='#d42329'
                    barStyle='light-content'
                />
                <NavigationContainer theme={MyTheme}>
                    <Stack.Navigator
                        screenOptions={({route, navigation}) => ({
                            headerStyle: {
                                backgroundColor: '#d42329',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerRight: () => (
                                <View style={styles.iconContainer}>

                                    <TouchableOpacity onPress={() => alert('Options')}>
                                        <Icon name={Platform.OS === "ios" ? "md-more" : "md-more"}
                                              color='#fff'
                                              size={30}
                                        />
                                    </TouchableOpacity>

                                </View>
                            )
                        })}
                    >

                        <Stack.Screen
                            name="HomeTabs"
                            children={this.createBottomTabs}
                            options={{
                                title: 'KPU',
                            }}
                        />
                        <Stack.Screen
                            name="Contact"
                            component={Contact}
                            options={{
                                headerRight: null
                            }}
                        />
                        <Stack.Screen name="Profile" component={ProfileScreen}/>
                        <Stack.Screen name="Details" component={PostDetails}/>
                        <Stack.Screen name="SoundCloud" component={Profile}/>
                        <Stack.Screen name="Mixrl" component={Mixrl}/>
                        <Stack.Screen
                            options={({route, navigation}) => ({
                                title: route.params.name
                            })}
                            name="Articles"
                            component={Articles}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        paddingHorizontal: 18,
        paddingTop: 5,
    },
    icon: {
        paddingLeft: 10,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120,
    }
});
