import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

// handles file uploads 
const useStorage = (file) => {
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [id, setId] = useState(null);
    useEffect(() => {
        
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection("images");

        storageRef.put(file).on('stage_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err) => {
            setError(err);
        }, async () => {
            const fileUrl = await storageRef.getDownloadURL();
            const createdAt= timestamp();
            const { id } = await collectionRef.add({
                url: fileUrl, 
                createdAt,
            })
            setId(id)
            console.log("id", id)
            setUrl(fileUrl);
        });

    }, [file]);

    return { progress, url , error, id};
}

export default useStorage;