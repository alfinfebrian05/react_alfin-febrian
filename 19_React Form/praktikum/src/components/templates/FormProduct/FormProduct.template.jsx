import React, { useCallback, useEffect, useState } from "react";
import { Form, Button, Table } from "react-bootstrap";

import { useFormik } from "formik";
import * as Yup from "yup";

import FormComponent from "../../molecules/FormComponent.molecule";
import { FormSelect, FormCheck, FormInput } from "../../atoms";

const FormProduct = () => {
  const productFreshness = ["Brand New", "Second Hand", "Refurbrished"];
  const categories = [
    "Pilih Kategori Produk",
    "Category 1",
    "Category 2",
    "Category 3",
  ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = JSON.parse(window.localStorage.getItem("products")) || [];
    if (items.length >= 1) {
      setProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const validImageType = ["image/png", "image/jpg", "image/jpeg"];
  const validImageSize = 1500000;

  const validationFormSchema = Yup.object({
    productFreshness: Yup.string()
      .oneOf(productFreshness)
      .required("Product freshness must be choosed!"),
    productImage: Yup.mixed()
      .test(
        "type",
        "image type is invalid, choose another image",
        (file) => file && validImageType.includes(file.type)
      )
      .test(
        "size",
        `Maximum image size is ${validImageSize / 1000000}MB !`,
        (file) => file && file.size <= validImageSize
      ),
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      productCategory: "",
      productImage: "",
      productFreshness: "",
      productDescription: "",
      productPrice: "",
    },
    validationSchema: validationFormSchema,
    onSubmit: useCallback(
      (formProduct) => {
        const {
          productName,
          productCategory,
          productImage,
          productFreshness,
          productDescription,
          productPrice,
        } = formProduct;

        const imageValue = productImage.name;
        const dateCurrent = new Date().toLocaleDateString("id-ID");
        const timeCurrent = new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        });

        const newProduct = {
          dateIn: `${dateCurrent} ${timeCurrent}`,
          productName,
          productCategory,
          productImage: imageValue,
          productFreshness,
          productDescription,
          productPrice,
        };

        setProducts([...products, newProduct]);
        formik.resetForm();
      },
      [products]
    ),
  });

  const handleDeleteProduct = (idx) => {
    const updatedProduct = [...products];
    updatedProduct.splice(idx, 1);
    console.log(updatedProduct);
    setProducts(updatedProduct);
  };

  return (
    <>
      <FormComponent
        formClassName="mt-4 mb-5"
        onSubmitHandler={formik.handleSubmit}
      >
        <Form.Group className="col-11 col-md-7 col-lg-4 mb-3">
          <Form.Label>Product Name</Form.Label>
          <FormInput
            inputAs="input"
            inputType="text"
            inputName="productName"
            inputValue={formik.values.productName}
            handleChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="col-10 col-md-6 col-lg-3 mb-3">
          <Form.Label>Product Category</Form.Label>
          <FormSelect
            selectName="productCategory"
            handleChange={formik.handleChange}
            defaultOptionValue={formik.values.productCategory}
          >
            {categories.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              );
            })}
          </FormSelect>
        </Form.Group>
        <Form.Group className="col-8 col-md-5 col-lg-3 mb-3">
          <Form.Label>Product Image</Form.Label>
          <FormInput
            inputType="file"
            inputAccept="image"
            inputName="productImage"
            handleChange={(e) =>
              formik.setFieldValue("productImage", e.currentTarget.files[0])
            }
            handleInvalid={formik.errors.productImage}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.productImage}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-8 col-md-5 col-lg-4 mb-3">
          <Form.Label>Product Freshness</Form.Label>
          {productFreshness.map((freshnessValue) => {
            return (
              <FormCheck
                formCheckType="radio"
                formCheckName="productFreshness"
                formCheckLabel={freshnessValue}
                // formCheckValue={formik.values.productCategory}
                checkOnChange={(e) =>
                  formik.setFieldValue(
                    "productFreshness",
                    (e.target.value = freshnessValue)
                  )
                }
                handleInvalid={formik.errors.productFreshness}
                key={freshnessValue}
              />
            );
          })}
          <Form.Control.Feedback type="invalid">
            {formik.errors.productFreshness}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-8 col-md-5 col-lg-9 mb-3">
          <Form.Label>Product Description</Form.Label>
          <FormInput
            inputAs="textarea"
            inputName="productDescription"
            inputValue={formik.values.productDescription}
            handleChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group className="col-11 col-md-7 col-lg-9 mb-3">
          <Form.Label>Product Price</Form.Label>
          <FormInput
            inputAs="input"
            inputType="number"
            inputPlaceholder="Rp 1"
            inputName="productPrice"
            handleChange={(e) => {
              const { value } = e.target;
              const formattedPrice = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(value);
              formik.setFieldValue("productPrice", formattedPrice);
            }}
          />
        </Form.Group>
        <Form.Group className="col-11 col-md-7 col-lg-9 mb-3 d-flex justify-content-center">
          <Button
            type="submit"
            variant="success"
            children="Submit"
            className="w-50"
          />
        </Form.Group>
      </FormComponent>
      <div className="table-responsive">
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Image</th>
              <th>Product Freshness</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productImage}</td>
                <td>{product.productFreshness}</td>
                <td>{product.productDescription}</td>
                <td>{product.productPrice}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <Button variant="warning">Edit</Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteProduct(idx)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default FormProduct;
