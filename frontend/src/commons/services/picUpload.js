import React, {useState} from 'react';
import axios from 'axios';
// import "./picUpload.css";
import {uploadImage} from "./AWS";
import { Text, View, Button, StyleSheet } from 'react-native'
// import { useHistory } from "react-router-dom"

export function PictureUpload(){
    const [fact, setFact] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };


/*    const changeFactHandler = (event) => {
        setFact(event.target.value);
    }; */

    const handleSubmission = (event) => {
        event.preventDefault();
        var url = 'http://db.cse.nd.edu:5004/api/students/1'

        uploadImage(selectedFile).then( function(data){
            axios.post(
                url,
                {"user":userID,"image_link": data.Key,"fact": fact},
                {
                    headers:{'Content-Type': 'application/json'}
                }).then((response) => {
                alert("Uploaded successfully!")
            }).catch((error) => {
                    alert(JSON.stringify(error.response.data))
                }
            )}
        )
    };

    return (
        // <form onSubmit={handleSubmission}>
        <View style = {styles.container}>
            <Button
                title="Upload a picture"
                onPress={changeHandler}
                style={styles.button}
            />
            {/* <input id="file" type="file" name="file" onChange={changeHandler} className="inputfile" required/>
            <label for="file">Upload a picture</label> */}
            {isFilePicked ? (
                <View>
                    <Text>Filename: {selectedFile.name}</Text>
                </View>
            ) : (
                <Text>Select a picture to show details</Text>
            )}
            <View>
                <Button
                    title="Submit"
                    onPress={handleSubmission}
                    style={styles.button}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputfile: {
        width: 0.1,
        height: 0.1,
        opacity: 0,
        justifyContent: "center",
        fontSize: 15,
        color: "skyblue",
        border: "black",
        font: "Helvetica Neue",
        borderRadius: 5,
        paddingRight: 5,
        paddingLeft: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },    
    button: {
        padding: 4,
        margin: 4,
        flex: 1,
    },

    descEntry:{
       fontSize: 20,
    }
    });

export default PictureUpload;