import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.theandroidsoul.com/wp-content/uploads/2020/04/www.theandroidsoul.com-3171e114-c600-495d-a00b-a2ee2b9e7a48.jpeg">
        <h1>The Office</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Empolyee Database!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Here at the office we offer the info you need for those who we work with us!
            
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
