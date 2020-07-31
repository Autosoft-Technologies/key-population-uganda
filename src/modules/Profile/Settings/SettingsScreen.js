import React from 'react';
import { SafeAreaView, ImageBackground, ScrollView, Image, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, FlatList } from 'react-native';
import appStyles from '../../../styles/app-style';
import styles from './style';
import {Button} from "native-base";

const SETTINGS = [
  {
    id: 1, key: 'TermsAndPolicies', title: 'Terms & Policies'
  },
  {
    id: 2, key: 'Help', title: 'Help'
  },
  {
    id: 3, key: 'AboutUs', title: 'About Us'
  },
]

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
            <KeyboardAvoidingView style={appStyles.container}
              behavior='padding' 
              enabled 
            >
              <ScrollView style={appStyles.w_100}>
                <View style={styles.profile_container}>
                  <Image
                    style={styles.avatar}
                    source={require('../../../../assets/images/avatars/icons8-user-100.png')}
                  />
                  <View style={styles.profile_info}>
                    <Text style={[styles.profile_text, appStyles.font_bold]}>Christian</Text>
                    <Text style={[styles.profile_text, appStyles.gray]}>xtianm4@gmail.com</Text>
                  </View>
                </View>
                {/*<FlatList */}
                {/*  data={SETTINGS} */}
                {/*  renderItem={({item}) => (*/}
                {/*    <View style={styles.settings_item}>*/}
                {/*      <TouchableOpacity*/}
                {/*        style={styles.item_link} */}
                {/*        onPress={() => this.props.navigation.navigate(item.key)}*/}
                {/*      >*/}
                {/*        <Text style={appStyles.font_lg}>{item.title}</Text>*/}
                {/*      </TouchableOpacity>*/}
                {/*    </View>*/}
                {/*  )} */}
                {/*  keyExtractor={item => item.id.toString()} */}
                {/*/>*/}

                <View
                    style={styles.settings_container}
                >

                  <View style={styles.button_group}>
                    <Button rounded style={styles.loginBtn} onPress={()=>alert('Being implemented')}>
                      <Text style={{color:"#fff"}}>Sign out</Text>
                    </Button>
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default SettingsScreen;