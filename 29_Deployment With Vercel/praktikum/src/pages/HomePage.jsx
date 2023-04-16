import React, { useEffect, useState } from "react";
import { NavbarTemplate } from "../components/templates";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  ListGroup,
  Badge,
  Modal,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { gql, useSubscription } from "@apollo/client";
import { useFormik } from "formik";

const HomePage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(3);

  const SEARCH_PRODUCT_QUERY = gql`
    subscription PRODUCT_QUERY_LIMIT($limit: Int!, $_ilike: String!) {
      products(
        limit: $limit
        where: { productName: { _ilike: $_ilike } }
        order_by: { id: asc }
      ) {
        productName
        productImage
        productFreshness
        productDescription
        productCategory
        productPrice
        productUUID
        id
      }
    }
  `;

  const formik = useFormik({
    initialValues: {
      searchProduct: "",
    },
    onSubmit: (value) => {
      setSearch(value.searchProduct);
    },
  });

  const {
    loading: loadingQuerySearch,
    error: errorQuerySearch,
    data: dataQuerySearch,
  } = useSubscription(SEARCH_PRODUCT_QUERY, {
    variables: {
      _ilike: `%${search}%`,
      limit: limit,
    },
  });

  const handleLoadMore = () => {
    const addLimit = 3;
    setLimit(limit + addLimit);
  };

  console.log(dataQuerySearch?.products);

  return (
    <>
      <NavbarTemplate />
      <Container
        fluid
        className="mt-5 py-5"
        style={{ backgroundColor: "#37517E" }}
      >
        <Container>
          <Row className="justify-content-center align-items-center gap-5">
            <Col xs={12} md={9} lg={5} xl={6} xxl={5}>
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
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Get Started
                </Button>
                <Button
                  variant="link"
                  className="text-decoration-none text-white"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Watch Video
                </Button>
              </div>
            </Col>
            <Col xs={12} md={9} lg={5} xl={6} xxl={5}>
              <Image fluid src="./assets/banner/heroImage.png" alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="py-3 py-md-5">
        <div className="d-flex justify-content-between align-items-center">
          Product List
          <div className="mt-4 mb-5">
            <form onSubmit={formik.handleSubmit} className="d-flex gap-3">
              <input
                type="text"
                className="form-control"
                aria-describedby="button-addon2"
                name="searchProduct"
                onChange={formik.handleChange}
                value={formik.values.searchProduct}
                placeholder="Search Product..."
              />
              <Button type="submit" style={{ width: "13rem" }}>
                Search Product
              </Button>
            </form>
          </div>
        </div>
        <Row className="g-sm-4 gap-4 row-gap-3 row-gap-md-0 gap-md-0 gap-lg-0">
          {loadingQuerySearch && <h6>Loading...</h6>}
          {errorQuerySearch && <h6>Error Get Data</h6>}
          {dataQuerySearch?.products.map((product, index) => (
            <Col sm lg={6} md={6} xl={4} key={index}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`./assets/products/${product.productImage}`}
                  className="object-fit-cover"
                />
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                </Card.Body>
                <Card.Body className="d-flex justify-content-start gap-2">
                  <Button
                    variant="outline-primary"
                    className="d-flex align-items-center gap-1 ps-3"
                    onClick={() => navigate(`/detail/${product.id}`)}
                  >
                    Read Description
                    <Icon.BookHalf className="ms-2 me-1" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-end mt-4">
          <Button onClick={() => handleLoadMore()}>Load More</Button>
        </div>
      </Container>
      <Container fluid className="py-5 bg-light">
        <div className="d-flex flex-column align-items-center">
          <h1 style={{ fontFamily: "'Jost', sans-serif", color: "#37517E" }}>
            Join Our Newsletter
          </h1>
          <p className="pt-2 text-center">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <div className="input-group mt-4 mb-3 px-5">
            <input
              type="text"
              className="form-control"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-info text-white"
              type="button"
              id="button-addon2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </Container>
      <Container fluid className="bg-white">
        <Container>
          <footer className="py-5">
            <Row>
              <Col md={4} xl={3} className="mb-4">
                <h2
                  className="text-uppercase fw-bold"
                  style={{ fontFamily: "'Jost', sans-serif", color: "#37517E" }}
                >
                  arsha
                </h2>
                <ul className="list-group pt-3">
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    A108 Adam Street
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    New York, NY 535022
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    United States
                  </li>
                </ul>
                <ul className="list-group pt-3">
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Phone: +1 5589 55488 55
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Email: info@example.com
                  </li>
                </ul>
              </Col>
              <Col md={4} xl={3} className="mb-4">
                <h5
                  className="text-capitalize fw-bolder"
                  style={{ fontFamily: "'Jost', sans-serif", color: "#37517E" }}
                >
                  useful links
                </h5>
                <ul className="list-group pt-3">
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    <Link className="text-dark text-decoration-none" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    <Link
                      className="text-dark text-decoration-none"
                      to="/create"
                    >
                      Product
                    </Link>
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    About Us
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Services
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Term Of Service
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Privacy Policy
                  </li>
                </ul>
              </Col>
              <Col md={4} xl={3} className="mb-4">
                <h5
                  className="text-capitalize fw-bolder"
                  style={{ fontFamily: "'Jost', sans-serif", color: "#37517E" }}
                >
                  our services
                </h5>
                <ul className="list-group pt-3">
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Web Design
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Product Management
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Marketing
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Graphic Design
                  </li>
                </ul>
              </Col>
              <Col md={4} xl={3} className="mb-4">
                <h5
                  className="text-capitalize fw-bolder"
                  style={{ fontFamily: "'Jost', sans-serif", color: "#37517E" }}
                >
                  our social network
                </h5>
                <ul className="list-group pt-3">
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    Cras fermentum odio eu feugiat lide par naso tierra videa
                    magna derita valies
                  </li>
                  <li className="list-group-item border border-white bg-white border border-white bg-white ps-0">
                    <div className="d-flex gap-3">
                      <div className="bg-info rounded-circle p-3">
                        <Link to="https://instagram.com/alfinisnotfound404/">
                          <Icon.Instagram size={32} color="white" />
                        </Link>
                      </div>
                      <div className="bg-info rounded-circle p-3">
                        <Link to="https://github.com/alfinfebrian05/">
                          <Icon.Github size={32} color="white" />
                        </Link>
                      </div>
                      <div className="bg-info rounded-circle p-3">
                        <Link to="https://www.linkedin.com/in/alfin-febrian-4b926a251">
                          <Icon.Linkedin size={32} color="white" />
                        </Link>
                      </div>
                      <div className="bg-info rounded-circle p-3">
                        <Link to="#tiktok-created-soon!">
                          <Icon.Tiktok size={32} color="white" />
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </footer>
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "#37517E" }} className="py-3">
        <Container>
          <Row className="d-none d-md-flex">
            <Col className="text-white" md={6} lg={9} xl={10}>
              &copy; Copyright
              <span className="fw-semibold px-1">Arsha.</span>
              All Rights Reserved
            </Col>
            <Col className="text-white text-end">
              Design By <span className="text-info">BootstrapMade</span>
            </Col>
          </Row>
          <Row className="d-flex d-md-none text-center">
            <Col className="text-white" md={6} lg={9} xl={10}>
              &copy; Copyright
              <span className="fw-semibold px-1">Arsha.</span>
              All Rights Reserved
            </Col>
            <Col className="text-white">
              Design By <span className="text-info">BootstrapMade</span>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
