import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const AdminActivitiesPanel = ({ actList, setActList }) => {

    return (
        <View>
            <View>
                <Text>Incoming Activity Changes</Text>
            </View>
            <ScrollView>

            </ScrollView>
        </View>
    );
}

export default AdminActivitiesPanel;