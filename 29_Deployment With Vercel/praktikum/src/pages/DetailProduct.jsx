import React, { useEffect, useState } from "react";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Card,
  Container,
  FloatingLabel,
  Form,
  FormLabel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import Table from "react-bootstrap/Table";
import { NavbarTemplate } from "../components/templates";
import { useFormik } from "formik";

const DetailProduct = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const getUser = JSON.parse(localStorage.getItem("account"));

  useEffect(() => {
    if (getUser) {
      return setUsername(getUser.username);
    } else {
      setUsername("Anonymous");
    }
  }, []);

  const QUERY_BY_NAME = gql`
    subscription QUERY_BY_NAME($_eq: Int!) {
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

  const SUBSCRIPTION_COMMENT_PRODUCT = gql`
    subscription QUERY_PRODUCT_COMMENT($_eq: Int!) {
      product_comment(where: { product_id: { _eq: $_eq } }) {
        comment
        id
        username
      }
    }
  `;

  const MUTATION_ADD_PRODUCT_COMMENT = gql`
    mutation INSERT_PRODUCT_COMMENT(
      $product_id: Int!
      $comment: String!
      $username: String!
    ) {
      insert_product_comment(
        objects: {
          comment: $comment
          product_id: $product_id
          username: $username
        }
      ) {
        affected_rows
        returning {
          product_id
          comment
        }
      }
    }
  `;

  const {
    loading: loadingDetailProduct,
    error: errorDetailProduct,
    data: dataDetailProduct,
  } = useSubscription(QUERY_BY_NAME, {
    variables: {
      _eq: param.id,
    },
  });

  const {
    loading: loadingCommentProduct,
    error: errorCommentProduct,
    data: dataCommentProduct,
  } = useSubscription(SUBSCRIPTION_COMMENT_PRODUCT, {
    variables: { _eq: param.id },
  });

  const [
    addCommentByProductId,
    {
      loading: loadingAddComment,
      error: errorAddComment,
      data: dataAddComment,
    },
  ] = useMutation(MUTATION_ADD_PRODUCT_COMMENT);

  const formik = useFormik({
    initialValues: {
      usernameComment: username,
      productComment: "",
    },
    onSubmit: (formValues) => {
      addCommentByProductId({
        variables: {
          comment: formValues.productComment,
          username: formValues.usernameComment,
          product_id: param.id,
        },
      });
      formik.resetForm();
    },
  });

  console.log({ usernameLocalStorage: username });
  console.log({ usernameComment: formik.values.usernameComment });
  console.log({ form_values: formik.values });

  return (
    <>
      <NavbarTemplate />
      <Container className="mt-5 pt-5">
        <Button
          onClick={() => {
            navigate("/");
          }}
          className="mb-4"
        >
          Back To Homepage
        </Button>
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
      </Container>
      <Container className="mb-5">
        <Table bordered>
          <thead>
            <tr>
              <th className="text-center fs-3">
                <Icon.ChatLeftTextFill className="fs-4 me-3" />
                Comment
              </th>
            </tr>
          </thead>
          <tbody>
            {errorCommentProduct && (
              <tr>
                <td className="text-center">Error Loading Comment</td>
              </tr>
            )}
            {loadingCommentProduct && (
              <tr>
                <td className="text-center">Loading Comment...</td>
              </tr>
            )}
            {dataCommentProduct?.product_comment.length === 0 ? (
              <tr>
                <td className="align-items-center d-flex justify-content-center text-danger fw-bold">
                  <Icon.SlashCircle className="fs-6 me-3" />
                  Comment on this product not yet added
                </td>
              </tr>
            ) : (
              dataCommentProduct?.product_comment.map((comment, idx) => (
                <tr key={idx}>
                  <td>
                    <Card>
                      <Card.Header>Comment by : {comment.username}</Card.Header>
                      <Card.Body>
                        <Icon.ChatLeftTextFill className="fs-4 me-3" />
                        {comment.comment}
                      </Card.Body>
                    </Card>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <Card>
          <Card.Body>
            <Card.Title className="mb-4">
              Leave comment for this product, so that people will know quality
              of it!
            </Card.Title>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  as="input"
                  name="usernameComment"
                  type="text"
                  value={formik.values.usernameComment}
                  onChange={formik.handleChange}
                />
              </Form.Group>
              <FloatingLabel
                controlId="floatingInputComment"
                label="Add Comment"
                className="mb-5"
              >
                <Form.Control
                  as="textarea"
                  name="productComment"
                  onChange={formik.handleChange}
                  value={formik.values.productComment}
                  placeholder="Leave product comment here please! :-)"
                  style={{ height: "10rem" }}
                ></Form.Control>
              </FloatingLabel>
              <Button type="submit" variant="success">
                Add Comment
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default DetailProduct;
