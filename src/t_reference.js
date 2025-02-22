import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import "bootstrap/dist/css/bootstrap.min.css";
import "./t_reference.css";

export default function Working() {
  const students = [
      "Student 1", "Student 2", "Student 3", "Student 4", 
      "Student 5", "Student 6", "Student 7", "Student 8", 
      "Student 9", "Student 10", "Student 11", "Student 12",
      "Student 13", "Student 14", "Student 15", "Student 16",
      "Student 17", "Student 18", "Student 19", "Student 20"
  ];
    
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [referenceText, setReferenceText] = useState("HI i am a student");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">References</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Predicted Grades</a></li>
              <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="references-container">
        <div className="student-list">
          <h5>View your students</h5>
          <TextField label="Find a student" variant="outlined" fullWidth size="small" />
          <ul className="list-group mt-2">
            {students.map((student, index) => (
              <li
                key={index}
                className={`list-group-item ${selectedStudent === student ? "active" : ""}`}
                onClick={() => setSelectedStudent(student)}
              >
                {student}
              </li>
            ))}
          </ul>
        </div>

        <div className="reference-editor">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{selectedStudent}</h5>
            <IconButton onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? <SaveIcon /> : <EditIcon />}
            </IconButton>
          </div>
          <TextField
            multiline
            fullWidth
            variant="outlined"
            value={referenceText}
            onChange={(e) => setReferenceText(e.target.value)}
            disabled={!isEditing}
            rows={6}
            className="mt-2"
          />
          <small className="text-muted">{referenceText.length} of 4000 Chr</small>
        </div>
      </div>
    </div>
  );
}
