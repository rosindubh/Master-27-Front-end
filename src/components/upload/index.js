import "../../App.css";
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import Alert from '../alert';
// import Notification from '../notification';
import { sendNotification } from "../../utils";

export default function Upload({ user }) {
    const [email, setEmail] = useState();
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };
    // const handleNotification = (e) => {
    //     e.preventDefault();
    //     sendNotification(email, secure_url);
    // };


    const previewFile = (file) => {
        const reader = new FileReader(); //FileReader is a buit in js method
        reader.readAsDataURL(file); //Convert image to a string
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage) //send encoded image string to the console
        try {
           const response = await fetch('https://postcard-pals-proxy.herokuapp.com/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            console.log(data.uploadResponse.secure_url);
            sendNotification(email, data.uploadResponse.secure_url)
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };
    return (
        <div className="upload">
        <div>
            <p className="title">Upload an Image</p>
            <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" />
            {/* this next line calls the function that will handle submitting the file */}
            <form onSubmit={handleSubmitFile} className="upload-form">    
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="input-fields"
                />
                <input className="input-fields" placeholder='email' type="email" onChange={(e) => setEmail(e.target.value) } />
                <button className="submit-btn" type="submit">
                    Submit
                </button>
            </form>
            {/* <Notification setEmail={setEmail} setSecure_url={setSecure_url} handleNotification={handleNotification}/> */}
            {previewSource && (     //NOTE: this asks if there is a preview source then use an image tag todisplay it
                <img                //The height is sey to 300px so it doesn't swamp the page
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
            {!user && <Redirect to="/" />}
        </div>
        </div>
    );
}