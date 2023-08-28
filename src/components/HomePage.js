import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';


function HomePage() {
  const [rollNumber, setRollNumber] = useState('');
  const navigate = useNavigate();

  const handleStartAttendance = () => {
    if (rollNumber.trim() === '') {
      return;
    }
    navigate('/mark-attendance');
  };

  return (
    <div className="home-page">
      <h1 className="Homepage_space">Attendance Management System</h1>
      <input 
        type="text"
        placeholder="Enter your roll number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <button className='input_space' onClick={handleStartAttendance}>Login</button>
    </div>
  );
}

export default HomePage;
