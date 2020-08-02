import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import MapView from "react-native-map-clustering";
import {Marker, AnimatedRegion} from "react-native-maps";
import healthyCenters from '../data/centres';

export default class Centres extends Component {


    state = {
        initialRegion: {
            latitude: 0.3210737,
            longitude: 32.6150801,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
        },
        centres: []
    }

    componentDidMount() {
        this.setInitialRegion();
        this.setState({
            centres: healthyCenters
        });
    }

    setInitialRegion() {
        navigator.geolocation.getCurrentPosition((position) => {
                const lat = parseFloat(position.coords.latitude);
                const long = parseFloat(position.coords.longitude);

                const initialRegion = {
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                };

                this.setState({initialRegion: initialRegion})
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000});
    }

    _generateMarkers = () => {
        const markers = [];

        for (let i = 0; i < this.state.centres.length; i++) {
            markers.push(
                <Marker
                    key={i}
                    title={this.state.centres[i].facility}
                    description={'Provider: ' + this.state.centres[i].provider}
                    coordinate={{
                        latitude: this.state.centres[i].latitude,
                        longitude: this.state.centres[i].longitude
                    }}
                />
            );
        }

        return markers;
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <MapView initialRegion={this.state.initialRegion} style={styles.container}>
                        {this._generateMarkers()}
                    </MapView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: Dimensions.get("window").height,
    }
});