import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
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

const TableStudent = ({ studentName, advisorName, parentName, parentEmail, parentPhone, actStr }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoWrapper}>
                <Image 
                    style = {styles.photo}
                    source = "https://www.sciencenewsforstudents.org/wp-content/uploads/2019/12/1030_two-students-looking-at-tablet-1028x579.jpg"/>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>{studentName}</Text>
            </View>
            <View style={styles.infoWrapper}>
                <View style={{width: "50%", height: "80%"}}>
                    <ActivityIcon 
                        actType={actStr}
                    />
                </View>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>{advisorName}</Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>{parentName}</Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>{parentEmail}</Text>
            </View>
            <View style={styles.infoWrapper}>
                <Text style={styles.infoText}>{parentPhone}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {width: 3, height: 4},
        shadowOpacity: .4,
        shadowRadius: 4,
        flexDirection: 'row',
        marginTop: 7,
        marginBottom: 7,
        width: '99%',
        height: 100,
        alignItems: "center"
        //justifyContent: 'space-between'
    },
    infoText: {
        padding: 10, 
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoWrapper: {
        flex:1, 
        justifyContent: "center", 
        alignItems: "center",
        height: "80%",
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'center'
    },
    photo: {
        width: 80,
        height: 150,
    }
});

export default TableStudent;