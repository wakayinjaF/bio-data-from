import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

const ProfilePicture = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('/api/upload', formData);
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-picture">
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
      {image && (
        <img src={URL.createObjectURL(image)} alt="Preview" className="preview" />
      )}
    </div>
  );
};

export default ProfilePicture;
