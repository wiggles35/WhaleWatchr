import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import TableStudent from '../components/TableStudent';
import { radius, colors } from '../constants/whaleStyle';
import RosterHeader from './RosterHeader';
import {downloadImage} from '../commons/services/AWS.js';

const AdminRosterPanel = ({ studentsObj }) => {
    // states to control which organization to show
    const [isRoster, setIsRoster] = useState(true);
    const [isActivity, setIsActivity] = useState(false);
    const [isAdvisor, setIsAdvisor] = useState(false);

    const buttons = [
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

    const loadImage = function(imageLink, id, fact){
        downloadImage(imageLink).then( function(data){
            const buffer = Buffer.from(data.Body)
            const base64ImageData = buffer.toString('base64');
            const imgSrc = "data:image/jpg;base64," + base64ImageData;
            const postObject = {
                imgSrc: imgSrc,
                post_id: id,
                fact: fact
            }
            setPosts(posts => [...posts, postObject])
        })
     }
     

    return (
        <View style={styles.mainContainer}>
            <Text style={{padding: 10, fontSize: 40}}>Admin Roster View</Text>
            <RosterHeader/>
            <ScrollView >
                {studentsObj.map(item => {
                    return (
                        <TableStudent 
                            studentName={item.first_name + " " + item.last_name} 
                            advisorName={item.advisorName} 
                            parentName={item.parentName} 
                            parentEmail={item.parentEmail}
                            parentPhone={item.parentPhone}
                            actStr={item.actToday}
                            key={item.student_id}
                        /> 
                    );
                })}
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        textAlign: 'center',
    },
    scrollContainer: {
        paddingTop: 10,
        flex: 1
    },
});

export default AdminRosterPanel;