import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, Container } from "react-bootstrap";
import { NavbarTemplate } from "../components/templates";

const DetailProduct = () => {
  const param = useParams();
  const navigate = useNavigate();

  const QUERY_BY_NAME = gql`
    query QUERY_BY_NAME($_eq: Int!) {
      products(where: { id: { _eq: $_eq } }) {
        productName
        productPrice
        productUUID
        productImage
        productFreshness
        productDescription
        productCategory
      }
    }
  `;

  const {
    loading: loadingDetailProduct,
    error: errorDetailProduct,
    data: dataDetailProduct,
  } = useQuery(QUERY_BY_NAME, {
    variables: {
      _eq: param.id,
    },
  });

  return (
    <>
      <NavbarTemplate />
      <Container className="d-flex justify-content-center flex-column mt-5 pt-5">
        {errorDetailProduct && <div>Loading Detail Error</div>}
        {loadingDetailProduct && <div>Loading Detail ...</div>}
        {dataDetailProduct &&
          dataDetailProduct?.products.map((product) => {
            return (
              <div className="card mb-3" key={product}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`../assets/products/${product.productImage}`}
                      className="img-fluid rounded-start"
                      alt={product.productImage}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">{product.productName}</h2>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Freshness : {product.productFreshness}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Price : {product.productPrice}
                        </small>
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Category : {product.productCategory}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Back To Homepage
        </Button>
      </Container>
    </>
  );
};

export default DetailProduct;
