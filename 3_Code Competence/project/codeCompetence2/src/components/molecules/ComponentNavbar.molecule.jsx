import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const ComponentNavbar = () => {
  const screens = [false, "sm", "md", "lg", "xl", "xxl"];
  const [isTiktokClicked, setIsTiktokClicked] = useState(false);
  const handleTiktokClick = () => setIsTiktokClicked(!isTiktokClicked);
  const [isInstagramClicked, setIsInstagramClicked] = useState(false);
  const handleInstagramClick = () => setIsInstagramClicked(!isInstagramClicked);
  const [isLinkedInClicked, setIsLinkedInClicked] = useState(false);
  const handleLinkedInClick = () => setIsLinkedInClicked(!isLinkedInClicked);
  const [isGithubClicked, setIsGithubClicked] = useState(false);
  const handleGithubClick = () => setIsGithubClicked(!isGithubClicked);
  return (
    <header>
      {screens
        .filter((expand) => expand === "lg")
        .map((expand) => {
          return (
            <Navbar
              key={expand}
              bg="body"
              expand={expand}
              className="mb-3 px-xl-5 px-lg-3 py-xl-2 px-sm-3 border-bottom border-2"
              fixed="top"
            >
              <Container fluid>
                <Navbar.Brand href="#">Alfin Febrian</Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav
                      className="justify-content-end flex-grow-1 pe-3"
                      as="ul"
                    >
                      <Nav.Item as="li">
                        <Nav.Link href="#aboutMe">About Me</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link href="#myProject">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link href="#contactMe">Contact Me</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="d-none d-lg-block">
                        <Nav.Link
                          href="#action2"
                          className="btn btn-success text-white mt-3 mt-md-3 mt-lg-0 ms-0 ms-lg-2 px-0 px-lg-3"
                        >
                          <Icon.BriefcaseFill className="mb-1 me-2" /> Hire Me
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="d-block d-lg-none">
                        <Nav.Link
                          href="#action2"
                          className="btn btn-success w-50 text-white mt-3 mt-md-3 mt-lg-0 ms-0 ms-lg-2 px-0 px-lg-3"
                        >
                          <Icon.BriefcaseFill className="mb-1 me-2" /> Hire Me
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Nav className="d-lg-none mt-5">
                      <h5>
                        Connect With Me <Icon.Link45deg />
                      </h5>
                      <div className="d-flex gap-3 mt-3">
                        <Nav.Link
                          href="https://www.instagram.com/alfinisnotfound404/"
                          className={`${
                            isInstagramClicked
                              ? "bg-danger text-white border border-2 border-danger"
                              : "bg-light text-dark border border-2"
                          } rounded-circle`}
                          style={{
                            padding: "4px 16px 12px",
                            fontSize: "32px",
                          }}
                          onMouseEnter={handleInstagramClick}
                          onMouseLeave={handleInstagramClick}
                        >
                          <Icon.Instagram />
                        </Nav.Link>
                        <Nav.Link
                          href="https://github.com/alfinfebrian05"
                          className={`${
                            isGithubClicked ? "bg-dark" : "bg-light"
                          } ${
                            isGithubClicked ? "text-white" : "text-dark"
                          } rounded-circle border ${
                            isGithubClicked
                              ? "border-2 border-dark"
                              : "border-2"
                          }`}
                          style={{
                            padding: "4px 16px 12px",
                            fontSize: "32px",
                          }}
                          onMouseEnter={handleGithubClick}
                          onMouseLeave={handleGithubClick}
                        >
                          <Icon.Github />
                        </Nav.Link>
                        <Nav.Link
                          href="https://www.linkedin.com/in/alfin-febrian/"
                          className={`${
                            isLinkedInClicked
                              ? "bg-primary text-white border border-2 border-primary"
                              : "bg-light text-dark border border-2"
                          } rounded-circle`}
                          style={{
                            padding: "4px 16px 12px",
                            fontSize: "32px",
                          }}
                          onMouseEnter={handleLinkedInClick}
                          onMouseLeave={handleLinkedInClick}
                        >
                          <Icon.Linkedin />
                        </Nav.Link>
                        <Nav.Link
                          href="#tiktok-soon!"
                          className={`${
                            isTiktokClicked ? "bg-dark" : "bg-light"
                          } ${
                            isTiktokClicked ? "text-white" : "text-dark"
                          } rounded-circle border ${
                            isTiktokClicked
                              ? "border-2 border-dark"
                              : "border-2"
                          }`}
                          style={{
                            padding: "4px 16px 12px",
                            fontSize: "32px",
                          }}
                          onMouseEnter={handleTiktokClick}
                          onMouseLeave={handleTiktokClick}
                        >
                          <Icon.Tiktok />
                        </Nav.Link>
                      </div>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          );
        })}
      <Navbar
        bg="light"
        className="d-none d-lg-flex border-1 border-bottom z-1"
      >
        <Container fluid className="mt-5 pt-3 pb-2 px-md-4 px-xl-5 mx-xl-2">
          <Navbar.Brand>Connect With Me</Navbar.Brand>
          <Nav className="justify-content-end gap-2">
            <Nav.Link
              href="https://www.instagram.com/alfinisnotfound404/"
              className={`${
                isInstagramClicked
                  ? "bg-danger text-white border border-2 border-danger"
                  : "bg-white text-dark border border-2"
              } rounded-circle`}
              style={{
                padding: "4px 14px 12px",
                fontSize: "22px",
              }}
              onMouseEnter={handleInstagramClick}
              onMouseLeave={handleInstagramClick}
            >
              <Icon.Instagram />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/alfinfebrian05"
              className={`${isGithubClicked ? "bg-dark" : "bg-white"} ${
                isGithubClicked ? "text-white border-dark" : "text-dark"
              } rounded-circle border border-2`}
              style={{
                padding: "4px 14px 10px",
                fontSize: "22px",
              }}
              onMouseEnter={handleGithubClick}
              onMouseLeave={handleGithubClick}
            >
              <Icon.Github />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/alfin-febrian/"
              className={`${
                isLinkedInClicked
                  ? "bg-primary text-white border border-2 border-primary"
                  : "bg-white text-dark border border-2"
              } rounded-circle`}
              style={{
                padding: "4px 14px 12px",
                fontSize: "22px",
              }}
              onMouseEnter={handleLinkedInClick}
              onMouseLeave={handleLinkedInClick}
            >
              <Icon.Linkedin />
            </Nav.Link>
            <Nav.Link
              href="#tiktok-soon!"
              className={`${isTiktokClicked ? "bg-dark" : "bg-white"} ${
                isTiktokClicked ? "text-white" : "text-dark"
              } rounded-circle border "border-2"`}
              style={{
                padding: "4px 14px 12px",
                fontSize: "22px",
              }}
              onMouseEnter={handleTiktokClick}
              onMouseLeave={handleTiktokClick}
            >
              <Icon.Tiktok />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default ComponentNavbar;
