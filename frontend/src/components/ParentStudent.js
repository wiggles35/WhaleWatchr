import React, { useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native'
import ActivityIcon from '../components/ActivityIcon'
import ActivityWeekBar from './ActivityWeekBar'
import moment from 'moment';
import FormInput from '../components/FormInput';

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

const ParentStudent = ({ student, actList }) => {
    const [permanent, setPermanent] = useState(false);

    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Image
                style = {styles.photo}
                source = {"https://whalewatchr-pics.s3.us-east-2.amazonaws.com/" + student.first_name + " " + student.last_name + ".jpg"}/>
            </View>
            <View style={styles.weekContainer}>
                <ActivityWeekBar />
            </View>
            <View style={styles.actForm}>
                <View>
                    <FormInput 

                    />
                </View>
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
    weekContainer: {
        flex: 1,
        padding: 10,
    },
    actForm: {
        flex: 4,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
    infoWrapper: {
        flex:1,
        justifyContent: "ceenter",
        alignItems: "center",
    },
    photo: {
        width: 80,
        height: 150,
    }
});

export default ParentStudent;