import React from "react";
import { LinkComponent } from "../components/atoms";
import { NavbarComponent } from "../components/organisms";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const LandingPage = () => {
  return (
    <>
      <NavbarComponent />
      <Container fluid className="py-5" style={{ backgroundColor: "#37517E" }}>
        <Container>
          <Row className="justify-content-center align-items-center gap-5">
            <Col xs={12} md={9} lg={7} xl={6} xxl={5}>
              <h1
                className="fw-bold"
                style={{
                  color: "#FFFF",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 600,
                }}
              >
                Better Solution For Your Bussiness
              </h1>
              <h5
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 500,
                }}
              >
                We are team of talented designers making websites with Bootstrap
              </h5>
              <div className="d-flex gap-3 pt-3">
                <Button
                  variant="info"
                  className="text-white rounded-pill px-4 py-2"
                >
                  Get Started
                </Button>
                <Button variant="link" className="">
                  Watch Video
                </Button>
              </div>
            </Col>
            <Col xs={12} md={9} lg={7} xl={6} xxl={5}>
              <Image fluid src="./img/banner/heroImage.png" alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default LandingPage;
