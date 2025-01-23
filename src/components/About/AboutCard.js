import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I’m <strong>Felix Lopuran</strong> from Kenya, a dedicated professional with a Master’s degree in Computer Science and a Bachelor’s degree in Information Technology,
          both from Dedan Kimathi University of Technology (DeKUT). Currently, I work as a Graduate Assistant at DeKUT, where I combine my academic expertise with a passion for teaching and research in computer science and IT.
          </p>
        
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lopuran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
