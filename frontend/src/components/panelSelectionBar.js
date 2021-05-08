import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

//names is a list of the buttons needed
const panelSelectionBar = ({ buttons }) => {

    const renderItem = ({ item }) => {
        <TouchableOpacity>
            
        </TouchableOpacity>
    };

    return (
        <View>
            <FlatList />
        </View>
    );
};


export default panelSelectionBar;