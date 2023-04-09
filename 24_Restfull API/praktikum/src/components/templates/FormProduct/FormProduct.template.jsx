import React, { useCallback } from "react";
import { Form, Button, Table } from "react-bootstrap";

import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

import FormComponent from "../../molecules/FormComponent.molecule";
import { FormSelect, FormCheck, FormInput } from "../../atoms";

import { useDispatch } from "react-redux";
import {
  useIsEditSelector,
  useProductSelector,
  useProductType,
} from "../../../config/redux/product/productSelector";
import { productAction } from "../../../config/redux/product/productSlice";
import { useEffect } from "react";
import {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../../../config/redux/product/productThunk";

const FormProduct = () => {
  const productFreshness = ["Brand New", "Second Hand", "Refurbrished"];
  const categories = [
    "Pilih Kategori Produk",
    "Category 1",
    "Category 2",
    "Category 3",
  ];
  const dispatch = useDispatch();
  const product = useProductSelector();
  const productType = useProductType();
  const isEdit = useIsEditSelector();
  const validImageType = ["image/png", "image/jpg", "image/jpeg"];
  const validImageSize = 1500000;

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    if (productType === addProduct.fulfilled.type) {
      dispatch(getProduct());
    }
    if (productType === deleteProduct.fulfilled.type) {
      dispatch(getProduct());
    }
    if (productType === updateProduct.fulfilled.type) {
      dispatch(getProduct());
    }
  }, [productType]);

  const validationFormSchema = Yup.object({
    productName: Yup.string()
      .required("Product Name must be Filled!")
      .max(25, "Product Name Exceed 25 Char!")
      .matches(
        /^[A-Za-z0-9\s]+$/,
        "Product Name Only Accept Alphabet and Numbers!"
      ),
    productCategory: Yup.string()
      .required("Product Category must be Filled!")
      .matches(
        /^[A-Za-z0-9\s]+$/,
        "Product Name Only Accept Alphabet and Numbers!"
      ),
    productDescription: Yup.string()
      .required("Product Description must be Filled!")
      .matches(
        /^[A-Za-z0-9\s]+$/,
        "Product Description Only Accept Alphabet and Numbers!"
      ),
    productFreshness: Yup.string()
      .oneOf(productFreshness)
      .required("Product freshness must be choosed!")
      .matches(
        /^[A-Za-z0-9\s]+$/,
        "Product Freshness Only Accept Alphabet and Numbers!"
      ),
    productPrice: Yup.string()
      .required("Product Price must be filled!")
      .matches(/^[0-9]*$/, "Product Price Only Accept Alphabet and Numbers!"),
    productImage: Yup.mixed()
      .required("Product Image must be selected!")
      .test(
        "type",
        "Image type is invalid, choose another image type (.png, .jpeg, .jpg)",
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
      id: "",
      productUUID: uuidv4(),
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
          productUUID,
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
          productUUID,
          dateIn: `${dateCurrent} ${timeCurrent}`,
          productName,
          productCategory,
          productImage: imageValue,
          productFreshness,
          productPrice,
          productDescription,
        };

        dispatch(addProduct(newProduct));
        formik.resetForm();
      },
      [product]
    ),
  });

  const handleEdit = (product) => {
    formik.setValues({
      id: product.id,
      productUUID: product.productUUID,
      productName: product.productName,
      productCategory: product.productCategory,
      productImage: product.productImage,
      productFreshness: product.productFreshness,
      productDescription: product.productDescription,
      productPrice: product.productPrice,
    });

    dispatch(productAction.setIsEdit(true));
  };

  const handleUpdate = (newValues, event) => {
    event.preventDefault();
    dispatch(
      updateProduct({
        id: newValues.id,
        productUUID: newValues.productUUID,
        productName: newValues.productName,
        productCategory: newValues.productCategory,
        productImage: newValues.productImage.name,
        productFreshness: newValues.productFreshness,
        productDescription: newValues.productDescription,
        productPrice: newValues.productPrice,
      })
    );
    dispatch(productAction.setIsEdit(false));
    formik.resetForm();
  };

  return (
    <>
      <FormComponent
        formClassName="mt-4 mb-5"
        onSubmitHandler={
          isEdit
            ? (event) => handleUpdate(formik.values, event)
            : formik.handleSubmit
        }
      >
        <Form.Control
          name="productUUID"
          value={formik.values.productUUID}
          onChange={formik.handleChange}
          hidden
        />
        <Form.Group className="col-11 col-md-7 col-lg-4 mb-3">
          <Form.Label htmlFor="productName">Product Name</Form.Label>
          <FormInput
            inputAs="input"
            inputType="text"
            inputName="productName"
            inputValue={formik.values.productName}
            handleChange={formik.handleChange}
            handleInvalid={formik.errors.productName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.productName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-10 col-md-6 col-lg-3 mb-3">
          <Form.Label htmlFor="productCategory">Product Category</Form.Label>
          <FormSelect
            selectName="productCategory"
            handleChange={formik.handleChange}
            defaultOptionValue={formik.values.productCategory}
            handleInvaLid={formik.errors.productCategory}
          >
            {categories.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              );
            })}
          </FormSelect>
          <Form.Control.Feedback type="invalid">
            {formik.errors.productCategory}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-8 col-md-5 col-lg-3 mb-3">
          <Form.Label htmlFor="productImage">Product Image</Form.Label>
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
          <Form.Label htmlFor="productFreshness">Product Freshness</Form.Label>
          {productFreshness.map((freshnessValue) => {
            return (
              <FormCheck
                formCheckType="radio"
                formCheckName="productFreshness"
                formCheckLabel={freshnessValue}
                checkOnChange={(e) =>
                  formik.setFieldValue(
                    "productFreshness",
                    (e.target.value = freshnessValue)
                  )
                }
                handleInvalid={formik.errors.productFreshness}
                invalidMessage={formik.errors.productFreshness}
                key={freshnessValue}
              />
            );
          })}
        </Form.Group>
        <Form.Group className="col-8 col-md-5 col-lg-9 mb-3">
          <Form.Label htmlFor="productDescription">
            Product Description
          </Form.Label>
          <FormInput
            inputAs="textarea"
            inputName="productDescription"
            inputValue={formik.values.productDescription}
            handleChange={formik.handleChange}
            handleInvalid={formik.errors.productDescription}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.productDescription}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-11 col-md-7 col-lg-9 mb-3">
          <Form.Label htmlFor="productPrice">Product Price</Form.Label>
          <FormInput
            inputAs="input"
            inputType="number"
            inputPlaceholder="Rp 1"
            inputName="productPrice"
            handleChange={formik.handleChange}
            inputValue={formik.values.productPrice}
            handleInvalid={formik.errors.productPrice}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.productPrice}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="col-11 col-md-7 col-lg-9 mb-3 d-flex justify-content-center">
          <Button
            type="submit"
            variant="success"
            children={isEdit ? "Update" : "Submit"}
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
            {product.map((value, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{value.productName}</td>
                  <td>{value.productCategory}</td>
                  <td>{value.productImage}</td>
                  <td>{value.productFreshness}</td>
                  <td>{value.productDescription}</td>
                  <td>
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(value.productPrice * 14929)}
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      className="mb-2"
                      onClick={() => {
                        handleEdit(value);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        if (
                          confirm(
                            "Apakah anda ingin menghapus produk? Proses ini tidak bisa dikembalikan!"
                          )
                        ) {
                          dispatch(deleteProduct(value.id));
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default FormProduct;
