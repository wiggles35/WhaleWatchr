import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import ActivityIcon from '../components/ActivityIcon'
import ParentStudent from '../components/ParentStudent'
import { downloadImage } from "../commons/services/AWS.js";


const ParentView = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [studentsObj, setStudentsObj] = useState([]);

    const parentStudentsURL = 'http://db.cse.nd.edu:5004/api/parents/1'

    useEffect(() => {
        fetch(parentStudentsURL)
            .then((response) => response.json())
            .then((json) => {
                setStudentsObj(json.students);
                setIsLoading(false);
            })
            .catch((error) => alert(error))
    }, []);

    return (
        <View style={styles.container}>
            { isLoading ? (
                        <ActivityIndicator styles={{justifyContent: "center", alignItems: "center", flex:1}} />
                    ) : (
                        <View style={{flex:1}}>
                            <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow: 1, flex: 1}}>
                                {studentsObj.map(item => {
                                    return (
                                        <ParentStudent 
                                            student={item}
                                            key={item.student_id}
                                        />
                                    )
                                })}
                            </ScrollView>
                        </View>
                    )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,

    },
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
        backgroundColor: "white",
    },
    innerActivityContainer: {
        width: "50%",
        height: "50%",
    }
});

export default ParentView;