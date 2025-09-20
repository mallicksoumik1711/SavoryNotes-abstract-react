// src/components/BlogCard.jsx
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function BlogCard({ blog }) {
  return (
    <Container className="my-5 p-4 bg-dark text-light rounded shadow-lg">
      <Row>
        <Col md={12}>
          <h1 className="text-warning mb-3">{blog.title}</h1>
          <p className="text-muted mb-4">
            By <strong>{blog.author}</strong> • {blog.date}
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={12}>
          <Image
            src={blog.image || "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"}
            alt={blog.title}
            fluid
            rounded
            style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>{blog.content}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogCard;
