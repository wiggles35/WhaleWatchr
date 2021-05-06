import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TableStudent from '../components/TableStudent'

const studentsURL = "http://db.cse.nd.edu:5004/api/students/"

const AdminRosterView = () => {
    const [isLoading, setIsLoading] = useState(true);
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
                        ),
                        'parentName' : (
                            json["parents"][student.parent.toString()]["first_name"] + " " + 
                            json["parents"][student.parent.toString()]["last_name"]
                        ),
                        'parentEmail' : (
                            json["parents"][student.parent.toString()]["email"]
                        ),
                        'parentPhone' : (
                            json["parents"][student.parent.toString()]["phone_number"]
                        )
                    };
                    return newStud;
                });
                setStudentsObj(fullStudList);
                setIsLoading(false);
                console.log(fullStudList);
            })
            .catch((error) => alert(error))
    }, []);

    const renderStudent = ({ item }) => (
        <TableStudent 
            studentName={item.first_name + " " + item.last_name} 
            advisorName={item.advisorName} 
            parentName={item.parentName} 
            parentEmail={item.parentEmail}
            parentPhone={item.parentPhone}
        />
    );

    return (
        <View >
            <View style={styles.leftContainer}>
                <Text style={{padding: 10, fontSize: 40}}>Admin Roster View</Text>
                <View style={styles.container}>
                    <Text style={styles.headerText}>Name</Text>
                    <Text style={styles.headerText}>Transpo</Text>
                    <Text style={styles.headerText}>Advisor</Text>
                    <Text style={styles.headerText}>Parent</Text>
                    <Text style={styles.headerText}>Email</Text>
                    <Text style={styles.headerText}>Phone</Text>
                </View>
                <View styles={styles.scrollContainer} >
                    { isLoading ? (
                        <ActivityIndicator styles={{justifyContent: "center", alignItems: "center", flex:1}} />
                    ) : (
                        <View style={{flex:1}}>
                        <ScrollView contentContainerStyle={{flexGrow: 1, flex: 1}}>
                            {studentsObj.map(item => {
                                return (
                                    <TableStudent 
                                        studentName={item.first_name + " " + item.last_name} 
                                        advisorName={item.advisorName} 
                                        parentName={item.parentName} 
                                        parentEmail={item.parentEmail}
                                        parentPhone={item.parentPhone}
                                    /> 
                                )
                            })}
                        </ScrollView>
                        </View>
                    )}
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Text>Right Container</Text>
            </View>
        </View>
    );
}

/*
<FlatList 
                            data={studentsObj}
                            renderItem={renderStudent}
                            keyExtractor={item => item.student_id}
                            styles={{height: 1000, flex: 1}}
                        /> */
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
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
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