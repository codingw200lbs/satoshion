import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/package.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
 
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download SPECS
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">THE BOX</h3>
            <Resumecontent
              title="SATOSHION THE BOX"
              date="TEST"
              content={[
                "TEST",
                "TEST",
                "TEST",
              ]}
            />
            <h3 className="resume-title">QUOTE</h3>
            <Resumecontent
              title="TEST"
              content={[
                "TEST",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">SPECIFICATIONS</h3>
            <Resumecontent
              title="TEST"
              date="TEST"
              content={[
                "TEST",
              ]}
            />

            <h3 className="resume-title">PRICE</h3>
            <Resumecontent
              title=""
              content={[
                "TEST",
              ]}
            />

            <h3 className="resume-title">PDF</h3>
            <Resumecontent
              title=""
              content={[
                "TEST",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download SPECS
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
