import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">SATOSHION THE TEAM.</span>
           
            <br />We are Professional team for building Our <br />SATOSHION "THE FARM"
            <br />
            <br />
            We can provide :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Crypto Mining Farm Infra
            </li>
            <li className="about-activity">
              <ImPointRight /> Hosting
            </li>
            <li className="about-activity">
              <ImPointRight /> Self-Mining
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "We All Are SATOSHI! Everyone Can Mine!"{" "}
          </p>
          <footer className="blockquote-footer">THE TEAM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
