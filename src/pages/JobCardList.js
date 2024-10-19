// src/pages/JobCardList.js
import React, { useEffect, useState } from 'react';
import { getJobCards, deleteJobCard } from '../services/jobCardService'; // Assume you create this service
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const JobCardList = () => {
  const [jobCards, setJobCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobCards = async () => {
      try {
        const data = await getJobCards();
        setJobCards(data);
      } catch (error) {
        console.error('Error fetching job cards:', error);
      }
    };

    fetchJobCards();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteJobCard(id);
      setJobCards(jobCards.filter((jobCard) => jobCard.id !== id));
    } catch (error) {
      console.error('Error deleting job card:', error);
    }
  };

  return (
    <div className="container job-card-list">
      <h2>Job Card List</h2>
      <button onClick={() => navigate('/job-cards/new')}>Create Job Card</button>
      <ul>
        {jobCards.map((jobCard) => (
          <li key={jobCard.id} className="job-card-item">
            {jobCard.title}
            <button onClick={() => handleDelete(jobCard.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCardList;
