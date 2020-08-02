import React from 'react';
import { SafeAreaView, ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView, Dimensions, Button } from 'react-native';
import Colors from '../../constants/Colors';
import appStyles from '../../styles/app-style';
import styles from './style';
import EventItem from '../../components/EventItem';
import HTML from "react-native-render-html/src/HTML";
import {Linking} from "expo/build/deprecated.web";
import moment from "moment";
class EventDetailScreen extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //
  //   }
  // }
  state = this.props.route;

  // === === //
    render() {
      const blog = this.state.params;
        return (
            <SafeAreaView style={appStyles.container}>
              <ScrollView style={[appStyles.w_100, {flex: 1}]}>
                <ImageBackground
                    source={{uri: blog.immage}}
                  style={[appStyles.col_container, {height: Dimensions.get('window').width * 0.65}]}>
                  <View style={[appStyles.col_container, {flex: 2}]}>
                    <TouchableOpacity
                      style={styles.back_button}
                      onPress={() => this.goBack()}
                    >
                      <Image 
                        source={require('../../../assets/images/icons/arrow-left.png')}
                        style={styles.arrow_left_icon}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <View style={[appStyles.col_container, {alignItems: 'flex-start'}]}>
                    <EventItem 
                      name={blog.title}
                      open_at={blog.date}
                    />
                    <View style={[appStyles.col_container, {alignItems: 'flex-start', width: '80%', paddingLeft: 10, paddingTop: 20, paddingBottom: 20}]}>
                      <HTML style={styles.genre} html={blog.description}/>
                      {/*<Text style={appStyles.gray}>On 30 August 2018, Muse announced their eight studio album,</Text>*/}
                    </View>

                </View>
              </ScrollView>
              <View style={styles.footer}>
                <View style={{flex: 1}}>
                  <Text style={appStyles.pink}>Published on</Text>
                  {/*<Text style={[appStyles.black, appStyles.font_bold]}>{blog.date}</Text>*/}
                  <Text style={appStyles.black} numberOfLines={1}>{moment(blog.pubDate).format("MMM Do YYYY")}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Button 
                    title='View on website'
                    color={Colors.pinkColor}
                    onPress={() => Linking.openURL(blog.link)}
                  />
                </View>
              </View>
            </SafeAreaView>
        );
    }

  editProfile = () => {
    Alert.alert('You clicked Edit Profile');
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  showAllEvents = () => {
    Alert.alert('Show all events');
  }

  goMyPlaces = () => {
    Alert.alert('Show all events');
  }
}

export default EventDetailScreen;