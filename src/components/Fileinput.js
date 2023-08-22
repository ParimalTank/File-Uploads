import styles from "../styles/Home.module.css";
export default function FileInput({ handleOnChange }) {
    return (
        <div className={styles["input-group"]}>
            <label htmlFor="input-file">Select Image</label>
            <input
                type="file"
                id="input-file"
                accept="image/*"
                onChange={handleOnChange}
                style={{ display: "none" }}
            />
        </div>
    );
}