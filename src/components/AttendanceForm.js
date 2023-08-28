import React, { useState } from 'react';
import './AttendanceForm.css';

function AttendanceForm() {
  const [attendanceList, setAttendanceList] = useState([]);
  const [studentName, setStudentName] = useState('');

  const handleAddAttendance = () => {
    if (studentName.trim() === '') {
      return;
    }
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    const newAttendance = `${studentName} (${formattedDate}, ${formattedTime})`;

    const newAttendanceList = [...attendanceList, newAttendance];
    setAttendanceList(newAttendanceList);
    setStudentName('');
  };

  return (
    <div className="attendance-form-page">
      <h1>Mark Your Attendance</h1>
      <div className="attendance-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button onClick={handleAddAttendance}>Mark Attendance</button>
      </div>
      <div className="attendance-list">
        <h2>Attendance List</h2>
        <ul>
          {attendanceList.map((attendance, index) => (
            <li key={index}>{attendance}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AttendanceForm;
