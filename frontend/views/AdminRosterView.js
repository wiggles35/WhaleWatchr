import React from 'react';
import { Text, View, TextInput } from 'react-native'
import Student from '../components/Student'

const AdminRosterView = () => {
    return (
        <View style={{padding: 10}}>
            <Text style={{padding: 10, fontSize: 40}}>Admin Roster View</Text>
            <Student/>
        </View>
    );
}

export default AdminRosterView;