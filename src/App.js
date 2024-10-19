import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import JobCardList from './pages/JobCardList';
import JobCardForm from './pages/JobCardForm';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'; // Import the CSS file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job-cards" element={<ProtectedRoute><JobCardList /></ProtectedRoute>} />
        <Route path="/job-cards/new" element={<ProtectedRoute><JobCardForm /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
