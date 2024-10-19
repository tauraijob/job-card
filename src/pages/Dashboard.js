import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const Dashboard = () => {
  const navigate = useNavigate();

  // Add logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logout successful!');
    navigate('/login');
  };

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome to the Job Card Management System!</p>
      <button onClick={() => navigate('/job-cards')}>View Job Cards</button>
      {/* Add logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
