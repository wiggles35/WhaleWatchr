import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

//names is a list of the buttons needed
const panelSelectionBar = ({ buttons }) => {

    return (
        <View>
            {buttons.map(item => {
                return (
                    <View>
                        <TouchableOpacity >
                            <View>
                                <Text></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};


export default panelSelectionBar;