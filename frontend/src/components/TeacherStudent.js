import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import ActivityIcon from './ActivityIcon'

const TeacherStudent = ({ studentName }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>{studentName}</Text>
            </View>
            <View style={styles.infoWrapper}>
                <View style={{width: "50%"}}>
                    <ActivityIcon actType='Bus' busNum='35' />
                </View>
            </View>
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
        marginTop: 7,
        marginBottom: 7,
        width: '99%',
        alignItems: "center"
        //justifyContent: 'space-between'
    },
    infoText: {
        padding: 10, 
        fontSize: 15,
    },
    infoWrapper: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center"
    }
});

export default TeacherStudent;