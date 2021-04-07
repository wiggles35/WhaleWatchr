import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TableStudent from '../components/TableStudent'

const studentsURL = "http://db.cse.nd.edu:5004/api/students/"

const AdminRosterView = () => {
    const [studentsObj, setStudentsObj] = useState([]);

    useEffect(() => {
        fetch(studentsURL)
            .then((response) => response.json())
            .then((json) => {
                const studList = Object.values(json["students"]);
                const fullStudList = studList.map((student) => {
                    // for each student, add a new object to a list with all props of student plus advisor name
                    let newStud = {
                        ...student,
                        'advisorName': (
                            json["advisors"][student.advisor.toString()]["first_name"]
                            + " " + json["advisors"][student.advisor.toString()]["last_name"]
                        )
                    };
                    return newStud;
                });
                setStudentsObj(fullStudList);
            })
            .catch((error) => alert(error))
    }, []);

    return (
        <View style={{padding: 10}}>
            <Text style={{padding: 10, fontSize: 40}}>Admin Roster View</Text>
            <View style={styles.container}>
                <Text style={styles.headerText}>Name</Text>
                <Text style={styles.headerText}>Transpo</Text>
                <Text style={styles.headerText}>Advisor</Text>
                <Text style={styles.headerText}>Parent</Text>
                <Text style={styles.headerText}>Email</Text>
                <Text style={styles.headerText}>Phone</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <FlatList 
                    data={studentsObj} keyExtractor={({ student_id }, index) => student_id} 
                />
                <TableStudent 
                    studentName="John Doe" 
                    advisorName="Kerry Lolley" 
                    parentName="Jane Doe" 
                    parentEmail="janedoe@gmail.com" 
                    parentPhone="(206) 612-8810"
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingTop: 10,
        flexDirection: "column",
        width: "80%"
    },
    container: {
        padding: 10,
        backgroundColor: "skyblue",
        borderRadius: 4,
        flexDirection: 'row',
        width: '80%',
        //justifyContent: 'space-between'
    },
    headerText: {
        padding: 10, 
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});

export default AdminRosterView;