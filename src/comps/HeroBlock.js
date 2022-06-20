import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
// import { Blob } from 'react-blob'
import { motion } from "framer-motion";

const HeroBlock = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const handleChange = (e) => {
        if (e.target.type == "file"){
            let selected = e.target.files[0];
            if (selected && types.includes(selected.type)) {
                setFile(selected);
                setError("");
            } else {
                setFile(null);
                setError("Please select an image file (png, jpeg, jpg)");
            }

        } else {
            let selected = e.target.value;

            if (selected) {
                setFile(selected);
                setError("");
            } else {
                setFile(null);
                setError("Please add a url");
            }
        }
        
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="shape"></div>
                <div className="shape2"></div>
                <div className="shape3"></div>
                <div className="shape4"></div>
                <div className="shape5"></div>
                <div className="shape6"></div>
                <div className="main_box">
            
                    <div className="title">
                        <h1>Extract colors from your favourite pics!</h1>
                        <h2>Create your own photo-inspired <br /> color palette!</h2>
                    </div>
                    
                    <div className="input_box">
                        {/* <input className="url_Image" type="url" onChange={handleChange} placeholder="enter an image url or upload" /> */}
                        <label>
                            <input 
                                className="upload_button"
                                type="file" 
                                onChange={handleChange}
                            />
                            <span>Upload an Image</span>
                        </label>
                    </div>
                    <div className="button_box">
                        {/* <button className="random_button">Get Random Image</button> */}
                        {/* <button className="palette_button"  onChange={handleChange} >Upload an Image</button> */}
                        {/* <button className="palette_button"> Generate Palette</button> */}
                    </div>
                    <div className="output">
                        { error && <div className="error">{ error }</div> }
                        {/* { file && <div>{ file.name }</div> } */}
                        { file && <ProgressBar file={ file } setFile={ setFile }/> }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroBlock
