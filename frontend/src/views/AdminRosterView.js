import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TableStudent from '../components/TableStudent';
import { radius, colors } from '../constants/whaleStyle';
import { getAllStudents } from '../controllers/adminController';
import AdminRosterPanel from '../components/adminRosterPanel';

const studentsURL = "http://db.cse.nd.edu:5004/api/students/"

const AdminRosterView = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [studentsObj, setStudentsObj] = useState([]);
    const [isRoster, setIsRoster] = useState(true);
    const [isActivity, setIsActivity] = useState(false);
    const [isAdvisor, setIsAdvisor] = useState(false);

    useEffect(() => {
        getAllStudents(setStudentsObj);
        console.log(studentsObj);
        setIsLoading(false);
    }, []);

    let buttons = [
        {
            name: "Roster",
            state: isRoster,
            set: setIsRoster
        },
        {
            name: "Activity",
            state: isActivity,
            set: setIsActivity
        },
        {
            name: "Advisor",
            state: isAdvisor,
            set: setIsAdvisor
        }
    ]

    return (
        <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
                { isLoading ? (
                    <View styles={{justifyContent: "center", alignItems: "center", padding: 40, margin: 40, backgroundColor: "#000", flex:1}}>
                        <ActivityIndicator />
                    </View>
                ) : (
                    <AdminRosterPanel 
                        studentsObj={studentsObj}
                    />
                )}
            </View>
            <View style={styles.rightContainer}>
                <Text>Right Container</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: "row"
    },
    leftContainer: {
        paddingTop: 10,
        height: 600,
        flexDirection: "column",
        flex: 7,
    },
    rightContainer: {
        paddingTop: 10,
        height: 600,
        flexDirection: "column",
        flex: 3,
    },
    scrollContainer: {
        paddingTop: 10,
        flex: 1
    },
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

export default AdminRosterView;