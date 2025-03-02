import React, { useState } from "react";
import "./formtutor_predgrades.css";

const students = [
  "Ahmad Abbas", "Amina Akhtar", "Bilal Baig", "Bushra Begum",
  "Cyrus Chaudhry", "Camila Chishty", "Dawood Dari", "Dua Durrani",
  "Ehsan Ellahi", "Esm Ebrahim", "Faisal Farooq", "Fatima Fakhor",
  "Ghazala Gillani", "Hamza Hassan", "Hina Habiba", "Imran Ibrahim",
  "Iqra Idris", "Junaid Javed", "Jamila Jahan"
];

const subjects = [
  "Accounting", "Art", "Biology", "Business Studies", "Chemistry",
  "Computer Science", "Drama", "Economics", "English Literature",
  "French", "Geography", "History", "Law", "Mathematics", "Media Studies"
];

const grades = ["A*", "A", "B", "C", "D", "E", "U"];

export default function FormTutorPredGrades() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [predictedGrades, setPredictedGrades] = useState({});

  const handleGradeSelection = (grade) => {
    if (selectedStudent && selectedSubject) {
      setPredictedGrades({
        ...predictedGrades,
        [selectedStudent]: {
          ...predictedGrades[selectedStudent],
          [selectedSubject]: grade,
        },
      });
    }
  };

  return (
    <div className="predicted-grades-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Predicted Grades</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">References</a>
          <a href="#">Personal Statement</a>
          <a href="#">My Profile</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <div className="columns">
          {/* Student List */}
          <div className="column">
            <h3>View your students</h3>
            <input type="text" placeholder="🔍 Search students..." className="search-box" />
            <ul className="list">
              {students.map((student) => (
                <li
                  key={student}
                  className={selectedStudent === student ? "selected" : ""}
                  onClick={() => setSelectedStudent(student)}
                >
                  {student}
                </li>
              ))}
            </ul>
          </div>

          {/* Predicted Grades Section */}
          {selectedStudent && (
            <div className="column">
              <h3>View Predicted Grades</h3>
              <h4>{selectedStudent}</h4>
              <input type="text" placeholder="🔍 Search subjects..." className="search-box" />
              <ul className="list">
                {subjects.map((subject) => (
                  <li
                    key={subject}
                    className={selectedSubject === subject ? "selected" : ""}
                    onClick={() => setSelectedSubject(subject)}
                  >
                    {subject}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Grade Selection */}
          {selectedStudent && selectedSubject && (
            <div className="column">
              <h3>Add/Edit Predicted Grades for {selectedStudent}</h3>
              <div className="grades-list">
                {grades.map((grade) => (
                  <button
                    key={grade}
                    className={`grade-button ${predictedGrades[selectedStudent]?.[selectedSubject] === grade ? "selected" : ""}`}
                    onClick={() => handleGradeSelection(grade)}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
