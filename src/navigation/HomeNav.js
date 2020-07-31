import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, Text, TouchableOpacity, Linking,} from "react-native";
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

import Home from "../modules/Home";
import Contact from "../modules/Contact";
import About from "../modules/About";
import Profile from "../modules/Profile/Profile";
import Personal from "../modules/Personal";
import PostDetails from "../modules/details/PostDetails";
import Posts from "../modules/Posts";
import Articles from "../modules/Articles";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Blogs from "../modules/Blogs";
import News from "../modules/News";
import Centres from "../modules/Centres";
import Doctors from "../modules/doctors/Doctors";
import Reminders from "../modules/reminders/Reminders";
import Drugs from "../modules/drugs/Drugs";
import ProfileScreen from "../modules/Profile/ProfileScreen";
import EventDetailScreen from "../modules/EventDetail/EventDetailScreen";
import ProfileEditScreen from "../modules/Profile/ProfileEdit/ProfileEditScreen";
import AboutUsScreen from "../modules/Profile/Settings/AboutUs/AboutUsScreen";
import HelpScreen from "../modules/Profile/Settings/Help/HelpScreen";
import SettingsScreen from "../modules/Profile/Settings/SettingsScreen";
import TermsAndPoliciesScreen from "../modules/Profile/Settings/TermsAndPolicies/TermsAndPoliciesScreen";

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
                        } else if (route.name === 'Personal') {
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
                <BottomTabs.Screen name="Centres" component={Centres}/>
                {/*<BottomTabs.Screen name="About" component={About}/>*/}
                <BottomTabs.Screen name="Contact" component={Contact}/>
                <BottomTabs.Screen name="Personal" component={ProfileScreen}/>
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
                            // headerStyle: {
                            //     backgroundColor: '#d42329',
                            // },
                            // headerTintColor: '#fff',
                            // headerTitleStyle: {
                            //     fontWeight: 'bold',
                            // },
                            headerShown: false
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
                        <Stack.Screen name="Personal" component={Personal}/>
                        <Stack.Screen name="Doctors" component={Doctors}/>
                        <Stack.Screen name="Reminders" component={Reminders}/>
                        <Stack.Screen name="Settings" component={SettingsScreen}/>
                        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen}/>
                        <Stack.Screen name="EventDetailScreen" component={EventDetailScreen}/>
                        <Stack.Screen name="Drugs" component={Drugs}/>
                        <Stack.Screen name="AboutUs" component={AboutUsScreen}/>
                        <Stack.Screen name="Help" component={HelpScreen}/>
                        <Stack.Screen name="TermsAndPolicies" component={TermsAndPoliciesScreen}/>
                        {/*<Stack.Screen name="Drugs" component={Drugs}/>*/}
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
