import React, { useState } from 'react';
import { Text, Button, View, Image, TextInput, StyleSheet, Platform } from 'react-native'
import ActivityIcon from '../components/ActivityIcon'
import ActivityWeekBar from './ActivityWeekBar'
import moment from 'moment';
import FormInput from '../components/FormInput'
import axios from 'axios';

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
    const [permanent, setPermanent] = useState('');
    const [date, setDate] = useState('');
    const [actStr, setActStr] = useState('');

    const makeUpdateReq = () => {
        //make post request to updateRequest
        const updateReqURL = "http://db.cse.nd.edu:5004/api/updateRequest/";

        var actId = -1;

        for(var i = 0; i < actList.length; i++){
            if(actStr === actList[i].name){
                actId = actList[i].id;
            };
        };

        console.log(student);
        console.log(actList);

        if(actId != -1){
            const sendObj = {
                "student": student.student_id,
                "permanent": permanent === "yes" ? true : false,
                "start_date": date,
                "activityDetail": actId
            };

            console.log(sendObj)

            axios.post(updateReqURL, sendObj, {headers:{'Content-Type': 'application/json'}})
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    alert(JSON.stringify(error.response.data))
                });

                setPermanent('');
                setDate('');
                setActStr('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.studName}>
                <View style={styles.infoWrapper}>
                    <Image
                    style = {styles.photo}
                    source = {{uri: "https://whalewatchr-pics.s3.us-east-2.amazonaws.com/" + student.first_name + " " + student.last_name + ".jpg"}}/>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={{fontSize: 40}}>{student.first_name + ' ' + student.last_name}</Text>
                </View>
            </View>
            <View style={styles.weekContainer}>
                <ActivityWeekBar 
                    baseWeek={student.activity_base}
                    actList={actList}
                />
            </View>
            <View style={styles.formContainer}>
                <View style={styles.actForm}>
                    <View style={styles.inputWidth}>
                        <FormInput 
                            data={date}
                            setData={setDate} 
                            title="Date"
                            placeholder="YYYY-MM-DD"
                            fontSize={30}
                        />
                    </View>
                    <View style={styles.inputWidth}>
                        <FormInput 
                            data={actStr}
                            setData={setActStr}
                            title="Activity Title"
                            placeholder='"Bus xx" or "Walk" or "Parent Pickup"'
                            fontSize={30}
                        />
                    </View>
                    <View style={styles.inputWidth}>
                        <FormInput 
                            data={permanent}
                            setData={setPermanent}
                            title="Permanent?"
                            placeholder='"yes" or "no"'
                            fontSize={30}
                        />
                    </View>
                </View>
                <View>
                    <Button 
                        title="Request Change"
                        onPress={makeUpdateReq}
                        style={styles.button}
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
    formContainer: {
        flex: 4,
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center"
    },
    weekContainer: {
        flex: 1,
        padding: 10,
    },
    actForm: {
        flex: 4,
        padding: 10,
        flexDirection: Platform.OS === 'ios' ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        //backgroundColor: "red",
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
        //backgroundColor: "red",
    },
    innerActivityContainer: {
        width: "50%",
        height: "50%",
    },
    infoWrapper: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    photo: {
        width: 80,
        height: 150,
    },
    inputWidth: {
        flex: 1,
        //width: "60%",
        //backgroundColor: "blue",
        margin: "3%",
    },
    button: {
        padding: 10,
        margin: 10,
        flex: 1,
    }
});

export default ParentStudent;