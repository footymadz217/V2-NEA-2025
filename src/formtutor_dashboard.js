import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import "bootstrap/dist/css/bootstrap.min.css";
import Grades from "./grades"; 
import MyProfile from "./profile"; 
import ReferenceCards from "./reference"; // ✅ ADDED BACK!
import PersonalStatement from "./personal_statment"; // ✅ ADDED BACK!

export default function FormTutorDashboard() {
  const [currentScreen, setCurrentScreen] = useState("dashboard");

  return (
    <Container className="text-center academia-container">
      {currentScreen === "dashboard" ? (
        <>
          <Typography variant="h4" className="mt-4 academia-title">
            Welcome to <span className="brand">Academia360</span>
          </Typography>
          <Typography variant="subtitle1" className="home-page">Form Tutor Dashboard</Typography>

          <Row className="mt-4">
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="option-card" onClick={() => setCurrentScreen("grades")}>
                <Card.Body>
                  <SchoolIcon className="icon" />
                  <Card.Title>Predicted Grades</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="option-card" onClick={() => setCurrentScreen("references")}>
                <Card.Body>
                  <AssignmentIcon className="icon" />
                  <Card.Title>References</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="option-card" onClick={() => setCurrentScreen("personal_statement")}>
                <Card.Body>
                  <DescriptionIcon className="icon" />
                  <Card.Title>Personal Statement</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="option-card" onClick={() => setCurrentScreen("profile")}>
                <Card.Body>
                  <PersonIcon className="icon" />
                  <Card.Title>My Profile</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <>
          {/* Show selected component */}
          {currentScreen === "grades" && <Grades />}
          {currentScreen === "references" && <ReferenceCards />}
          {currentScreen === "personal_statement" && <PersonalStatement />}
          {currentScreen === "profile" && <MyProfile />}
          
          {/* Back button */}
          <Button onClick={() => setCurrentScreen("dashboard")} className="mt-3">Back to Dashboard</Button>
        </>
      )}
    </Container>
  );
}
