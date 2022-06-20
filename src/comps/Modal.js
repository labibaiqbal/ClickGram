import React from 'react'
import { motion } from "framer-motion";

const Modal = (props) => {
    const { selectedImage, setSelectedImage } = props;
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedImage(null);
        }
    }
    return (
        <motion.div 
            className="backdrop" 
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImage} alt="pic" 
                initial={{ y: "-100vh"}}
                transition={{ type: "spring", stiffness: 50 }}
                animate={{ y: 0, x: 0 }}
            />
        </motion.div>
    )
}

export default Modal
