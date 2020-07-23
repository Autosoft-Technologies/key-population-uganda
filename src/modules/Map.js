import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from "react-native-maps";
// import { MapView } from 'expo'

const Marker = MapView.Marker

export default class Map extends Component {
    renderMarkers() {
        return this.props.places.map((place, i) => (
            <Marker key={i} title={place.name} coordinate={place.coords} />
        ))
    }

    render() {
        const { region } = this.props
        return (
            <MapView
                style={styles.container}
                region={region}
                showsUserLocation
                showsMyLocationButton
            >
                {this.renderMarkers()}
            </MapView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '80%',
    }
});


