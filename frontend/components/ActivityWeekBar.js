import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import ActivityIcon from '../components/ActivityIcon'

const ActivityWeekBar = () => {

    return (
        <View style={styles.activityWeek}>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType="Walk"
                    />
                </View>
            </View>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType="Walk"
                    />
                </View>
            </View>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType="Walk"
                    />
                </View>
            </View>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType="Walk"
                    />
                </View>
            </View>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType="Walk"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    studName: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,

    },
    activityWeek: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    activityContainer: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center",
    },
    innerActivityContainer: {
        width: "50%",
        height: "50%",
    }
});

export default ActivityWeekBar;