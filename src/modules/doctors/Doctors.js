import React from 'react';
import { SafeAreaView, FlatList, ScrollView, Image, Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Button } from 'react-native';
import Colors from '../../constants/Colors';
import ArtistCard from '../../components/ArtistCard';

const DATA = [
    {
        id: '1',
        name: 'Dr chris',
        place: 'Mulago Hospital',
        open_at: '24 JUN'
    },
    {
        id: '2',
        name: 'Dr chris',
        place: 'Mulago Hospital',
        open_at: '24 JUN'
    },
    {
        id: '3',
        name: 'Dr chris',
        place: 'Mulago Hospital',
        open_at: '24 JUN'
    },
    {
        id: '4',
        name: 'Dr chris',
        place: 'Mulago Hospital',
        open_at: '24 JUN'
    },
    {
        id: '5',
        name: 'Dr chris',
        place: 'Mulago Hospital',
        open_at: '24 JUN'
    },
    {
        id: '6',
        name: 'Dr chris',
        place: 'Mulago Hospital',
        open_at: '24 JUN'
    },
    {
        id: '7',
        name: 'Dr chris',
        place: 'Mulago Hospital',
        open_at: '24 JUN'
    },
    {
        id: '8',
        name: 'Dr chris',
        place: 'Mulago Hospital',
        open_at: '24 JUN'
    }
];

class Doctors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    // === === //
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    style={{flex: 1}}
                    data={DATA}
                    renderItem={({item, index, separators}) => (
                        <TouchableOpacity
                            style={{borderColor: Colors.lightGrayColor, borderBottomWidth: 1}}
                            onPress={() => alert('Disabled. Being finalised')}
                        >
                            <ArtistCard name={item.name} place={item.place} open_at={item.open_at} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity
                    style={{position: 'absolute', right: 5, bottom: 5}}
                    onPress={() => alert('Disabled. Being finalised')}
                >
                    <Image
                        source={require('../../../assets/images/icons/circle-plus-red.png')}
                        style={{width: 60, height: 60}}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default Doctors;