import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Button
} from 'react-native';
// import Colors from '../../../constants/Colors';
import appStyles from '../../../styles/app-style';
import styles from './style';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

class ProfileEditScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: null,
        }
    }

    // === === //
    render() {
        let {image} = this.state;
        return (
            <KeyboardAvoidingView style={appStyles.container}
                                  behavior='padding'
                                  enabled
            >
                <ScrollView style={appStyles.w_100}>
                    <ImageBackground
                        source={require('../../../../assets/images/backgrounds/bg-profile.png')}
                        style={styles.header}>
                        <View style={[appStyles.col_container, {flex: 2}]}>
                            <TouchableOpacity
                                style={styles.back_button}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Image
                                    source={require('../../../../assets/images/icons/arrow-left.png')}
                                    style={styles.arrow_left_icon}
                                />
                            </TouchableOpacity>
                            <View style={{flex: 1}}>
                                <TouchableOpacity
                                    style={styles.upload_avatar}
                                    onPress={() => this._pickImage()}
                                >
                                    {image && <Image source={{uri: image}} style={styles.avatar}/>}
                                    {!image && <Image style={styles.avatar}
                                                      source={require('../../../../assets/images/avatars/avatar-f.png')}/>}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[appStyles.col_container, {flex: 1}]}>
                            <View style={appStyles.col_container}>
                                <Text style={[appStyles.white, appStyles.font_md]}>Eng Christian</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View
                        style={styles.profile_form}
                    >
                        <View style={styles.input_group}>
                            <Text style={styles.label}>First Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='First Name'
                                onChangeText={text => this.setState({name: text})}
                            />
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                onChangeText={text => this.setState({email: text})}
                            />
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>Phone</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Phone'
                                onChangeText={text => this.setState({phone: text})}
                            />
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                onChangeText={text => this.setState({password: text})}
                            />
                        </View>
                        <View style={styles.input_group}>
                            <Text style={styles.label}>Confirm Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Confirm Password'
                                onChangeText={text => this.setState({passmatch: text})}
                            />
                        </View>
                        <View style={styles.button_group}>
                            <TouchableOpacity
                                style={styles.save_button}
                                onPress={() => this.onProfileSave()}
                            >
                                <Text style={[appStyles.white, appStyles.font_md]}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({image: result.uri, imgType: result.type});
            // let uriParts = this.state.image.split('.');
            // let fileType = uriParts[uriParts.length - 1];
            // console.log("File type : "+fileType)
        }
    };


    onProfileSave() {
        if (this.state.password !== this.state.passmatch) {
            alert('Password should match')
            return
        }

        if (this.state.name === null || this.state.email === null || this.state.phone === null || this.state.password === null) {
            alert('Fill all fields')
            return
        }

        // alert('Saving')
        // console.log(this.state)

        let apiUrl = "http://192.168.43.225:3000/upload";
        let uriParts = this.state.image.split('.');
        let fileType = uriParts[uriParts.length - 1];

        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('email', this.state.email)
        formData.append('phone', this.state.phone)
        formData.append('password', this.state.password)
        formData.append('avatar', {
            uri: this.state.image,
            name: `avatar.` + fileType,
            type: `image/` + fileType,
        });

        let options = {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        };

        return fetch(apiUrl, options)
            .then((response) => {
                console.log(response.status)
            })
            .then((responseData) => {
            })
            .catch(function (err) {
                console.log("Failed: " + err)
            });

    }

}

// const styles = StyleSheet.create({})
export default ProfileEditScreen;