// src/pages/JobCardForm.js
import React, { useState } from 'react';
import { createJobCard } from '../services/jobCardService'; // Assume you create this service
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const JobCardForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJobCard({ title, description });
      alert('Job card created successfully!');
      navigate('/job-cards');
    } catch (error) {
      console.error('Error creating job card:', error);
    }
  };

  return (
    <div className="container">
      <h2>Create Job Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Card Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Job Card Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default JobCardForm;
