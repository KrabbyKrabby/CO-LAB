import React, {useState, useRef} from 'react'
import styles from '../components/CSS/DragDropImage.module.css'

const DragDropImage = ({ onImagesChange }) => {

    // State variables
    const [images, setImages] = useState([]); // Array to store selected images
    const [isDragging, setIsDragging] = useState(false); // Flag to indicate if an item is being dragged
    const fileInputRef = useRef(null); // Reference to file input element

    // Open file dialog when Browse is clicked
    function selectFiles() {
        fileInputRef.current.click();
    }

    // Handle file selection
    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;
        let newImages = [];
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                newImages.push({
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                });
            }
        }
        setImages((prevImages) => [...prevImages, ...newImages]);
        if (onImagesChange) onImagesChange([...images, ...newImages]); // Pass updated images to parent component
    }

    // Delete an image by index
    function deleteImage(index) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        );
    }

    // Handle drag over event
    function ondragover(event) {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = 'copy';
    }

    // Handle drag leave event
    function ondragleave(event) {
        event.preventDefault();
        setIsDragging(false);
    }

    // Handle drop event
    function ondrop(event) {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        let newImages = [];
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                newImages.push({
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                });
            }
        }
        setImages((prevImages) => [...prevImages, ...newImages]);
        if (onImagesChange) onImagesChange([...images, ...newImages]); // Pass updated images to parent component
    }


    
    return (
        <div className={styles.DragDropImageCard}>
            {/* Header */}
            <div className={styles.DragDropTop}>
                <h4>Drag & Drop image for upload</h4>
            </div>
            {/* Drag and drop area */}
            <div className={styles.drag_area} onDragOver={ondragover} onDragLeave={ondragleave} onDrop={ondrop}>
                {isDragging ? (
                    <span className={styles.DDSelect}>
                        Drop image here
                    </span>
                ) : (
                    <>
                        Drag or Drop image here or {" "}
                        <span className={styles.DDSelect} role='button' onClick={selectFiles}>
                            Browse
                        </span>
                    </>
                )}
                {/* Hidden file input */}
                <input name='file' type='file' className={styles.DDFile} multiple ref={fileInputRef} onChange={onFileSelect}></input>
            </div>
            {/* Display selected images */}
            <div className={styles.DDContainer}>
                {images.map((image, index) => ( // Changed images to image for clarity
                    <div className={styles.DDImage} key={index}>
                        <span className={styles.DDDelete} onClick={() => deleteImage(index)}>
                            &times;
                        </span>
                        <img src={image.url} alt={image.name} />
                    </div>
                ))}
            </div>
            {/* Upload button */}
            {/* <button type={styles.button} onClick={uploadImage}>
                Upload
            </button> */}
        </div>
    )
}

export default DragDropImage
