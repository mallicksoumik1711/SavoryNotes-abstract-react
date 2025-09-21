
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-warning">About SavoryNotes</h1>
          <p className="text-light fs-5 text-center mt-3">
            SavoryNotes is your ultimate recipe companion. Discover, create, and share delicious recipes from around the world, curated to inspire both beginners and seasoned chefs.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-3">
          <Card className="bg-dark text-light h-100">
            <Card.Img 
              variant="top" 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" 
              alt="Our Mission" 
            />
            <Card.Body>
              <Card.Title className="text-warning">Our Mission</Card.Title>
              <Card.Text>
                To make cooking accessible, fun, and rewarding for everyone. Explore authentic recipes, learn new techniques, and bring joy to your kitchen.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-3">
          <Card className="bg-dark text-light h-100">
            <Card.Img 
              variant="top" 
              src="https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg" 
              alt="Why SavoryNotes" 
            />
            <Card.Body>
              <Card.Title className="text-warning">Why SavoryNotes?</Card.Title>
              <Card.Text>
                We believe that cooking is an art and a way to connect with loved ones. Our platform provides curated recipes, easy-to-follow instructions, and tips to make your culinary journey smooth and enjoyable.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="bg-dark text-light text-center p-4">
            <Card.Img 
              variant="top" 
              src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80" 
              alt="Join Our Community" 
            />
            <Card.Body>
              <Card.Title className="text-warning mb-3">Join Our Community</Card.Title>
              <Card.Text>
                Become part of a growing community of food enthusiasts. Share your favorite recipes, discover hidden gems, and inspire others with your culinary creations.
              </Card.Text>
              <Button href="/signIn" variant="warning" className="mt-3 fw-semibold">
                Get Started
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
