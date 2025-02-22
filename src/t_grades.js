import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./t_grades.css";

const Tgrades = () => {
  return (
    <Container className="grades-container mt-4">
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="#">Predicted Grades</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">References</a></li>
              <li className="nav-item"><a className="nav-link" href="#">My Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>
    
      <Row>
     
        <Col md={5} className="students-list">
          <h5>View your students</h5>
          <Form.Control type="text" placeholder="Search students..." className="mb-3" />
          <div className="students-box">
            {[

"Student 1", "Student 2", "Student 3", "Student 4", 
"Student 5", "Student 6", "Student 7", "Student 8", 
"Student 9", "Student 10", "Student 11", "Student 12",
"Student 13", "Student 14", "Student 15", "Student 16",
"Student 17", "Student 18", "Student 19", "Student 20"

            ].map((student, index) => (
              <p key={index} className="student-name">{student}</p>
            ))}
          </div>
        </Col>

 
        <Col md={7} className="grades-section">
          <h5>Add/Edit Predicted Grades</h5>
          <h6 className="selected-student">Ahmad Abbas</h6>
          <Row>
            <Col md={6}>
              <Form.Control type="text" placeholder="Search subjects..." className="mb-3" />
              <div className="subjects-box">
                {[
                  "Accounting", "Art", "Biology", "Business Studies", "Chemistry",
                  "Computer Science", "Drama", "Economics", "English Literature",
                  "French", "Geography", "History", "Law", "Mathematics", "Media Studies"
                ].map((subject, index) => (
                  <p key={index} className="subject-name">{subject}</p>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <Button className="edit-grades-btn">Add/Edit Predicted Grades</Button>
              <div className="grades-box">
                {["A*", "A", "B", "C", "D", "E", "U"].map((grade, index) => (
                  <p key={index} className="grade">{grade}</p>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Tgrades;