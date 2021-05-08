import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

const ActivityIcon = ({ actType, busNum }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.innerText}>{actType}</Text>
            {busNum && <Text style={styles.innerText}>{busNum}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 3,
        backgroundColor: "skyblue",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: .4,
        shadowRadius: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    innerText: { 
        padding: 2,
        fontSize: 12,
        justifyContent: 'center'
    }
});

export default ActivityIcon;