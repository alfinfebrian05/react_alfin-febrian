import React, { useEffect, useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { NavbarTemplate } from "../components/templates";
import * as Icon from "react-bootstrap-icons";
import { Link, useNavigate, Navigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account")) || false;
    if (!account.isRegister) return <Navigate to="/register" />;
  }, []);

  return (
    <>
      <NavbarTemplate />
      <section className="mt-5 pt-5">
        <Container fluid="lg" className="px-sm-0 px-md-4 px-lg-3 mt-2">
          <Card>
            <Card.Header className="fs-4">Login To Account</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Col>
                    <Form.Label className="d-flex justify-content-between">
                      Password
                      <span onClick={handleShowPassword}>
                        {showPassword ? (
                          <Icon.EyeFill />
                        ) : (
                          <Icon.EyeSlashFill />
                        )}
                      </span>
                    </Form.Label>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <Col className="d-flex justify-content-center align-items-center mb-3">
                  <Button type="submit" className="w-50">
                    Login
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  Didn't Yet Registered?{" "}
                  <Link
                    className="ps-2 text-decoration-none fw-bold text-danger"
                    to="/register"
                  >
                    Register here
                  </Link>
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default LoginPage;
