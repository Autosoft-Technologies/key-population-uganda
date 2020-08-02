import React, { Component } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Map from "./Map";
import * as Permissions from "expo-permissions";
import { Marker } from "react-native-maps";
// import { Location, Permissions } from 'expo'

// A placeholder until we get our own location
const region = {
    latitude: 0.347947,
    longitude: 32.662294,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

const deltas = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
};

export default class Map extends Component {

    state = {
        region: null,
        coffeeShops: []
    };

    componentWillMount() {
        this.getLocationAsync();
    }

    getRandomLatitude(min = 48, max = 56) {
        return Math.random() * (max - min) + min;
    }

    getRandomLongitude(min = 14, max = 24) {
        return Math.random() * (max - min) + min;
    }

    generateMarkers = count => {
        const markers = [];

        for (let i = 0; i < count; i++) {
            markers.push(
                <Marker
                    key={i}
                    coordinate={{
                        latitude: this.getRandomLatitude(),
                        longitude: this.getRandomLongitude()
                    }}
                />
            );
        }

        return markers;
    };

    getCoffeeShops = async () => {
        const { latitude, longitude } = this.state.region;
        const userLocation = { latitude, longitude };
        const coffeeShops = this.generateMarkers()
        this.setState({ coffeeShops });
    };

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied'
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            ...deltas
        };
        await this.setState({ region });
        await this.getCoffeeShops();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Map
                    region={region}
                    places={this.state.coffeeShops}
                />
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '80%',
    }
});