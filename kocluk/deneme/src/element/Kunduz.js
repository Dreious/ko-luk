import React, { useState, useRef } from 'react';
import styles from './Kunduz.module.css';

function Kunduz() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileDataUrl, setFileDataUrl] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileDataUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setFileDataUrl(null);
    fileInputRef.current.value = null;
  };

  return (
    <div className={styles.container}>
      <h2>Dosya Ekleme ve Görüntüleme Bölümü</h2>
      <input 
        type="file" 
        onChange={handleFileChange} 
        ref={fileInputRef} 
        className={styles.fileInput}
      />
      {fileDataUrl && (
        <div className={styles.fileDetails}>
          <p><strong>Seçilen Dosya:</strong> {selectedFile.name}</p>
          {selectedFile.type.startsWith('image/') && (
            <img src={fileDataUrl} alt="Selected" className={styles.previewImage} />
          )}
          <button onClick={handleFileRemove} className={styles.removeButton}>Dosyayı Kaldır</button>
        </div>
      )}
    </div>
  );
}

export default Kunduz;
