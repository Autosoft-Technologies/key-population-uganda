import React from 'react';
import { ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView } from 'react-native';
import Colors from '../../constants/Colors';
import appStyles from '../../styles/app-style';
import styles from './style';

import EventItem from '../../components/EventItem';
import { FlatList } from 'react-native-gesture-handler';

const MENU = [
  {
    id: 1, key: 'Doctors', title: 'My Doctors'
  },
  {
    id: 2, key: 'Drugs', title: 'My Drugs'
  },
  {
    id: 3, key: 'Reminders', title: 'My Reminders'
  },
  {
    id: 5, key: 'Settings', title: 'Settings'
  }
]

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
            <View style={appStyles.container}>
              <ImageBackground 
                source={require('../../../assets/images/backgrounds/bg-profile.png')}
                style={[appStyles.col_container, {flex: 2}]}>
                <View style={[appStyles.col_container, {flex: 2}]}>
                  <TouchableOpacity
                    style={styles.edit_button}
                    onPress={() => this.goProfileEditScreen()}
                  >
                    <Image 
                      source={require('../../../assets/images/icons/pencil.png')}
                      style={styles.edit_icon}
                    />
                  </TouchableOpacity>
                  <View style={{flex: 1}}>
                    <Image style={styles.avatar} 
                      source={require('../../../assets/images/avatars/icons8-user-100.png')}
                    />
                  </View>
                </View>
                <View style={[appStyles.col_container, {flex: 1}]}>
                  <View style={appStyles.col_container}>
                    <Text style={[appStyles.white, appStyles.font_md]}>Eng Christian</Text>
                    <Text style={[appStyles.white, appStyles.font_lg]}>0705270204</Text>
                    <Text style={[appStyles.white, appStyles.font_lg]}>xtianm4@gmail.com</Text>
                  </View>
                </View>
              </ImageBackground>
              <View style={[appStyles.col_container, {flex: 3}]}>
                <ScrollView style={[appStyles.w_100, {flex: 1}]}>
                  <View style={{paddingLeft: 10}}>
                    <TouchableOpacity
                      style={{width: 110}}
                      onPress={() => this.goNextEvent()}
                    >
                      <Text style={[appStyles.gray, appStyles.font_md, {paddingLeft: 10, paddingTop: 10}]} >MY MENU</Text>
                    </TouchableOpacity>
                    {/*<EventItem */}
                    {/*  name='Muse Simulation Theory Tour' */}
                    {/*  place='A2 Green Concert Hall' */}
                    {/*  open_at='24 JUN' */}
                    {/*/>*/}
                    {/*<TouchableOpacity */}
                    {/*  style={{width: 90}}*/}
                    {/*  onPress={() => this.showAllEvents()}*/}
                    {/*>*/}
                    {/*  <Text style={[appStyles.pink, appStyles.font_md, {padding: 10}]} >All Events</Text>*/}
                    {/*</TouchableOpacity>*/}
                  </View>
                  <FlatList 
                    style={{marginTop: 15, marginBottom: 15}}
                    data={MENU} 
                    renderItem={({item, index, separators}) => ( 
                      <TouchableOpacity
                        style={[appStyles.row_container, appStyles.w_100, styles.profile_item]}
                        onPress={() => this.props.navigation.navigate(item.key)}
                      >
                        <Text 
                          style={[appStyles.font_lg, {color: Colors.blackMarlinColor}]}
                        >{item.title}</Text>
                        <Image 
                          source={require('../../../assets/images/icons/right-arrow.png')}
                          style={styles.right_arrow}
                        />
                      </TouchableOpacity>
                    )}
                  />
                </ScrollView>
              </View>
            </View>
        );
    }

  goProfileEditScreen = () => {
    this.props.navigation.navigate('ProfileEdit');
  }

  goNextEvent = () => {
    Alert.alert('You clicked NEXT EVENT');
  }

  showAllEvents = () => {
    Alert.alert('Show all events');
  }

}

export default ProfileScreen;