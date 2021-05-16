import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import ActivityIcon from '../components/ActivityIcon'
import ActivityWeekBar from './ActivityWeekBar'
import CalendarPicker from 'react-native-calendar-datepicker';
import moment from 'moment';
import PictureUpload from '../commons/services/picUpload';

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

const ParentStudent = ({ student }) => {
    const [date, setDate] = useState('');

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    return (
        <View style={styles.container}>
            <View style={styles.studName}>
                <Text style={{padding: 10, fontSize: 40}}>{student.first_name + " " + student.last_name}</Text>
                <img className="pictures" src={student.imgSrc} style={{height: 150, width: 80}}></img>
            </View>
            <View style={{flex:1}}>
                <ActivityWeekBar />
            </View>
            <View style={{flex:4}}>
                <CalendarPicker 
                    weekdays={days}
                    onDateChange={setDate}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                />
                <PictureUpload />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        flexDirection: "column",

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

export default ParentStudent;