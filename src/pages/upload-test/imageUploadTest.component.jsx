import React, { useState } from 'react';

const ImageUploadTest = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null); // for testing server

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
  
      try {
        const response = await fetch('http://localhost:3001/api/upload', {
          method: 'POST',
          body: formData,
        });
        
        console.log(`Response Status: ${response.status}, Status Text: ${response.statusText}`);
        const data = await response.json();
        setData(data);  
        console.log('Upload response:', data);
      } catch (error) {
        console.error('Upload error:', error);
      }
    }
  
  };
  
  const testServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/test', {
        method: 'POST',
        timeout: 5000, // 5 seconds timeout
      });
  
      const data = await response.json();
      console.log('Test response:', data);
    } catch (error) {
      console.error('Test error:', error);
    }
  };
  
  
  
  return (
    <div>
      <h1>Image Upload Test</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={testServer}>Test Server</button>
      {data && <div>{data.imageUrl}</div>}   
    </div>
  );
};

export default ImageUploadTest;
