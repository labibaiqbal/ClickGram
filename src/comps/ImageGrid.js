import React , { useState, useRef } from 'react'
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = (props) => {
    const { setSelectedImage } = props;
    const { docs } = useFirestore('images');
    const [message, setMessage] = useState("Copy Hex Code:");
    const [selected, isSelected] = useState(false)
    const textAreaRef = useRef(null);

    const SWATCHES_STYLES = {
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      };

    // const handleClick = (event) => {
    // /* Get the text field */
    // event.preventDefault();
    // // isSelected(true);
    // // var copyText = document.getElementById("color-hex-selected");
    // // console.log(copyText);
    // // /* Select the text field */
    // // // copyText.select();
    // // // copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
    // // /* Copy the text inside the text field */
    // // document.execCommand("copy");
    // console.log(textAreaRef.current)
    // // textAreaRef.current.select();
    // // document.execCommand('copy');
    // /* Alert the copied text */
    // setMessage("Copied Hex Code: " + textAreaRef.current.select());
    // }
      
    
    return (
        <>
        <div className="title">
            <h2>The Palette Wall</h2>
            <h3> Click on the swatches to copy the hexcode</h3>
        </div>

        <div className="image-box">
            { docs && docs.map( doc => (
                <div className="img-grid">

                    <motion.div className="img-wrap" key={doc.id}
                        whileHover={{opacity: 1}}
                        layout
                        onClick={() => setSelectedImage(doc.url)}
                    >
                        <motion.img 
                            src={doc.url} 
                            alt="pics" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1}}
                        />
                    </motion.div>
                    <div style={SWATCHES_STYLES} className="color-extractor">
                        {doc.colors && doc.colors.map((color, id) => (
                            <div className="color-box">
                                <div
                                    key={id}
                                    className="color"
                                    style={{
                                        backgroundColor: color,
                                        width: 50,
                                        height: 50,
                                        margin: 15,
                                        borderRadius: 10,
                                    }}
                                    // onClick={handleClick}
                                >
                                    <span class="tooltiptext" >{message}</span>
                                </div>
                                <span 
                                    style={{
                                        color: "black",
                                        fontSize: "12px"
                                    }}
                                    ref={textAreaRef}
                                    value={color}
                                    id={selected ? "color-hex-selected" :"color-hex"}
                                >{color}</span>
                            </div>
                        ))}
                    </div>

                    </div>
            ))}
        </div>
        
        </>
    )
}

export default ImageGrid
