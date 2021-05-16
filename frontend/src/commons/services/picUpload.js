import React, {useState} from 'react';
import axios from 'axios';
import "./picUpload.css";
import {uploadImage} from "./AWS";
// import { useHistory } from "react-router-dom"

export function PictureUpload(){
    const [fact, setFact] = useState();
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };


    const changeFactHandler = (event) => {
        setFact(event.target.value);
    };

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
        <form onSubmit={handleSubmission}>
            <input id="file" type="file" name="file" onChange={changeHandler} className="inputfile" required/>
            <label for="file">Upload a picture</label>
            {isFilePicked ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    {/*<p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p> */}
                </div>
            ) : (
                <p>Select a picture to show details</p>
            )}
            <div>
                <button type="submit" className="button" onSubmit={handleSubmission}>Submit</button>
            </div>
        </form>
    );
}

export default PictureUpload;