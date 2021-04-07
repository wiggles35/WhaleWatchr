import React from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'

const Student = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={{padding: 10, fontSize: 30}}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: .4,
        shadowRadius: 4,
        flexDirection: 'row'
    }
});

export default Student;