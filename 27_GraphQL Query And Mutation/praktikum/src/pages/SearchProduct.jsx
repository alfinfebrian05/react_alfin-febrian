import React from "react";
import { useParams } from "react-router-dom";
import { NavbarTemplate } from "../components/templates";
import { gql, useQuery } from "@apollo/client";
import { Container, Card, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const SearchProduct = () => {
  const param = useParams();

  const SEARCH_PRODUCT_QUERY = gql`
    query SEARCH_PRODUCT($_ilike: String!) {
      products(where: { productName: { _ilike: $_ilike } }) {
        productName
        productImage
        productPrice
        productFreshness
        productDescription
        productCategory
        productUUID
      }
    }
  `;

  const {
    loading: loadingQuerySearch,
    error: errorQuerySearch,
    data: dataQuerySearch,
  } = useQuery(SEARCH_PRODUCT_QUERY, {
    variables: {
      _ilike: param.product_name,
    },
  });

  console.log(dataQuerySearch?.products);

  return (
    <>
      <NavbarTemplate />
      <Container className="mt-5 pt-4">
        {dataQuerySearch?.products.map((product) => {
          return (
            <Card key={product}>
              <Card.Img
                variant="top"
                src={`../assets/products/${product.productImage}`}
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
          );
        })}
      </Container>
    </>
  );
};

export default SearchProduct;
