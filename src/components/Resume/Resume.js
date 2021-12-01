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
            <h3 className="resume-title">THE BOX - "20"</h3>
            <Resumecontent
              title="20 feet Intelligent Data Container"
              date="168 x S19j pro"
              content={[
                "Imput: 600A x 2 (415V Wye 3Phase)",
              
              ]}
            />
            <h3 className="resume-title">THE BOX - "40"</h3>
            <Resumecontent
              title="40 feet Intelligent Data Container"
              date="336 x S19j pro"
              content={[
                "Imput: 600A x 4 (415V Wye 3Phase)",
              
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">SPECIFICATIONS</h3>
            <Resumecontent
              title="Key Features"
              date="For BOTH The BOX 20 and 40"
              content={[
                "Our products adopt integrated power supply system, power supply circuit adopts three-level switch protection, each device socket is controlled by independent circuit breaker, conveniently and flexibly.",
                " The container is installed with water curtain cooling system, through which further reduce the inner environment temperature, improving the heat dissipation of equipment."
              ]}
            />

            <h3 className="resume-title">PRICE</h3>
            <Resumecontent
              title=""
              content={[
                "Contact: wchen.btc@gmail.com",
              ]}
            />

            <h3 className="resume-title">Stock Status</h3>
            <Resumecontent
              title=""
              content={[
                "At the port of USA, will start transit soon, ORDER NOW! First Come, First Served",
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
