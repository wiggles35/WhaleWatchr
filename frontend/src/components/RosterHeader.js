import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { radius, colors } from '../constants/whaleStyle';

const RosterHeader = () => {

    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Text style={styles.headerText}>Name</Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.headerText}>Transpo</Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.headerText}>Advisor</Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.headerText}>Parent</Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.headerText}>Email</Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.headerText}>Phone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "skyblue",
        borderTopLeftRadius: radius.m,
        borderTopRightRadius: radius.m,
        flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    headerText: {
        padding: 10, 
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    infoWrapper: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center"
    }
});

export default RosterHeader;