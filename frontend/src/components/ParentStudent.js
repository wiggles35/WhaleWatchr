import React, { useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import ActivityIcon from '../components/ActivityIcon'
import ActivityWeekBar from './ActivityWeekBar'
import moment from 'moment';
import FormInput from '../components/FormInput'

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
    const [date, setDate] = useState(new Date());
    const [actStr, setActivity] = useState([]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    return (
        <View style={styles.container}>
            <View style={styles.studName}>
                    <Text style={{padding: 10, fontSize: 40}}>{student.first_name + " " + student.last_name}</Text>
            </View>
            <View style={styles.studName}>
                <Image
                style = {styles.photo}
                source = {{uri: "https://whalewatchr-pics.s3.us-east-2.amazonaws.com/" + student.first_name + " " + student.last_name + ".jpg"}}/>
            </View>
            <View style={{flex:1}}>
                <ActivityWeekBar />
            </View>
            <View style={styles.inputWidth}>
                <FormInput 
                    data={date}
                    setData={setDate} 
                    title="date"
                    placeholder="yyyy/mm/dd"
                />
                <FormInput 
                    data={actStr}
                    setData={setActivity}
                    title="Activity Title"
                    placeholder="Activity Title"
             />
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
        flexDirection: "row",
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
    },
    photo: {
        width: 80,
        height: 150,
    },
    inputWidth: {
        flex: 1,
        width: "60%",
    }
});

export default ParentStudent;