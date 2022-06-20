import React, { useEffect, useState } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";
import { ColorExtractor } from 'react-color-extractor'

const ProgressBar = (props) => {
    const { file, setFile } = props;
    const [colors, setColors] = useState(null);
    const { url, progress, id} = useStorage(file, colors);
    const imgUrl = window.URL.createObjectURL(file);

    const getColors = (colorArr)=> {
        setColors(colorArr); 
        if (colorArr && id){
            console.log(colorArr)
            saveColorsData(colorArr)
        }
    }

    const saveColorsData =(colors) => {
        projectFirestore.collection("images").doc(id).update({
            colors
        })
    }

    useEffect(() =>{
        if (url){
            setFile(null);
        }
    }, [url, setFile])
    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width:`${progress}%`  }}
        > 
        { imgUrl && 
            <ColorExtractor
                src={imgUrl}
                getColors={getColors}
            >
            </ColorExtractor> 
        }
        </motion.div>
    )
}

export default ProgressBar
