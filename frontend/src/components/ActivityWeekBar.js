import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import ActivityIcon from './ActivityIcon'

const ActivityWeekBar = ({ baseWeek, actList}) => {
    console.log(actList);
    console.log(baseWeek);
    return (
        <View style={styles.activityWeek}>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType={actList[baseWeek[0]-1].name}
                    />
                </View>
            </View>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType={actList[baseWeek[1]-1].name}
                    />
                </View>
            </View>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType={actList[baseWeek[2]-1].name}
                    />
                </View>
            </View>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType={actList[baseWeek[3]-1].name}
                    />
                </View>
            </View>
            <View style={styles.activityContainer}>
                <View style={styles.innerActivityContainer}>
                    <ActivityIcon
                        actType={actList[baseWeek[4]-1].name}
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
        width: "60%",
        height: "50%",
    }
});

export default ActivityWeekBar;