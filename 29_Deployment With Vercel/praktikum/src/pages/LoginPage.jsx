import React, { useEffect, useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { NavbarTemplate } from "../components/templates";
import * as Icon from "react-bootstrap-icons";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const loginValidation = Yup.object({
    emailLogin: Yup.string().email("Input valid email!"),
    passwordLogin: Yup.string().min(8, "Password minimum 8 Character length"),
  });

  const formik = useFormik({
    initialValues: {
      emailLogin: "",
      passwordLogin: "",
    },
    validationSchema: loginValidation,
    onSubmit: (value) => {
      const user = JSON.parse(localStorage.getItem("account"));
      if (
        user.email === value.emailLogin &&
        user.password === value.passwordLogin
      ) {
        localStorage.setItem(
          "account",
          JSON.stringify({ ...user, loggedIn: true })
        );
        return navigate("/create");
      } else {
        alert("Email / Password Salah!");
      }
    },
  });

  return (
    <>
      <NavbarTemplate />
      <section className="mt-5 pt-5">
        <Container fluid="lg" className="px-sm-0 px-md-4 px-lg-3 mt-2">
          <Card>
            <Card.Header className="fs-4">Login To Account</Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="emailLogin"
                      onChange={formik.handleChange}
                      value={formik.values.emailLogin}
                      isInvalid={formik.errors.emailLogin}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.emailLogin}
                    </Form.Control.Feedback>
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
                      name="passwordLogin"
                      onChange={formik.handleChange}
                      value={formik.values.passwordLogin}
                      isInvalid={formik.errors.passwordLogin}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.passwordLogin}
                    </Form.Control.Feedback>
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
