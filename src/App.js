import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AttendanceForm from './components/AttendanceForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mark-attendance" element={<AttendanceForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
