import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function ImagePreviewer({ imageFile, children }) {
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        if (!imageFile) return;
        const url = URL.createObjectURL(imageFile);
        setImageURL(url);
        return () => url && URL.revokeObjectURL(url);
    }, [imageFile]);

    return imageFile ? (
        <>
            <div className={styles["image-wrapper"]}>
                <img src={imageURL} alt="" />
            </div>
            <p>{`${(imageFile.size / 1024 / 1024).toFixed(2)} MB`}</p>
        </>
    ) : null;
}