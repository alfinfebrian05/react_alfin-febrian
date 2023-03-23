import React, { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { NavbarTemplate } from "../components/templates";

import * as Yup from "yup";
import { useFormik } from "formik";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const messageValidationSchema = Yup.object({
    firstname: Yup.string()
      .min(3, "Firstname minimal 3 Character length")
      .required("Firstname input must be filled"),
    lastname: Yup.string()
      .min(3, "Lastname minimal 3 Character length")
      .required("Lastname input must be filled"),
    username: Yup.string().required("Username input must be filled"),
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email input must be filled"),
    password: Yup.string()
      .required("Password input must be filled")
      .min(8, "Your password is too short"),
    confirmPassword: Yup.string()
      .required("Please retype your password")
      .oneOf([Yup.ref("password")], "Your password dont match"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: messageValidationSchema,
    onSubmit: (formValue) => {
      const { firstname, lastname, username, email, password } = formValue;
      const formSubmit = localStorage.setItem(
        "account",
        JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
          isRegister: true,
        })
      );
      console.log(JSON.parse(formSubmit));
    },
  });

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <>
      <NavbarTemplate />
      <section className="mt-5 pt-5">
        <Container fluid="lg" className="px-sm-0 px-md-4 px-lg-3 mt-2">
          <Card>
            <Card.Header className="fs-4">Register Account</Card.Header>
            <Card.Body>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="firstname"
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                      isInvalid={formik.errors.firstname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.firstname}
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lastname"
                      onChange={formik.handleChange}
                      value={formik.values.lastname}
                      isInvalid={formik.errors.lastname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.lastname}
                    </Form.Control.Feedback>
                    {/* <Form.Control.Feedback type="valid">
                      {formik.vald.lastname}
                    </Form.Control.Feedback> */}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      isInvalid={formik.errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.username}
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      isInvalid={formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
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
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      isInvalid={formik.errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label className="d-flex justify-content-between">
                      Confirm Password
                      <span onClick={handleShowConfirmPassword}>
                        {showConfirmPassword ? (
                          <Icon.EyeFill />
                        ) : (
                          <Icon.EyeSlashFill />
                        )}
                      </span>
                    </Form.Label>
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      isInvalid={formik.errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Col className="d-flex justify-content-center mb-3">
                  <Button variant="success" className="w-50" type="submit">
                    Register
                  </Button>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  Already Registered?{" "}
                  <Link
                    className="ps-2 text-decoration-none fw-bold text-danger"
                    to="/login"
                  >
                    Login here
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

export default RegisterPage;
