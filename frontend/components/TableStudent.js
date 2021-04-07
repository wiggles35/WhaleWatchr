import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ActivityIcon from './ActivityIcon'

const TableStudent = ({ studentName, advisorName, parentName, parentEmail, parentPhone }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>{studentName}</Text>
            <ActivityIcon actType='Bus' busNum='35' />
            <Text style={styles.infoText}>{advisorName}</Text>
            <Text style={styles.infoText}>{parentName}</Text>
            <Text style={styles.infoText}>{parentEmail}</Text>
            <Text style={styles.infoText}>{parentPhone}</Text>
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
        flexDirection: 'row',
        width: '100%',
        //justifyContent: 'space-between'
    },
    infoText: {
        padding: 10, 
        fontSize: 15,
        flex: 1
    }
});

export default TableStudent;