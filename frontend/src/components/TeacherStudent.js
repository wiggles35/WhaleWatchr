import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'
import ActivityIcon from './ActivityIcon'
import { downloadImage } from "../commons/services/AWS.js";

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

const TeacherStudent = ({ studentName }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Image //CHANGE
                    style = {styles.photo}
                    source = {"https://whalewatchr-pics.s3.us-east-2.amazonaws.com/"+studentName+".jpg"}/>            
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>{studentName}</Text>
            </View>
            <View style={styles.infoWrapper}>
                <View style={{width: "40%", height: "40%"}}>
                    <ActivityIcon actType='Bus' busNum='35' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: .4,
        shadowRadius: 4,
        flexDirection: 'row',
        marginTop: 3,
        marginBottom: 3,
        width: '99%',
        height: '15%', // This was the fix
        alignItems: "center"
        //justifyContent: 'space-between'
    },
    infoText: {
        padding: 10, 
        fontSize: 15,
    },
    infoWrapper: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center",
        //backgroundColor: 'red'
    },
    photo: {
        width: 80,
        height: 150,
    }
});

export default TeacherStudent;