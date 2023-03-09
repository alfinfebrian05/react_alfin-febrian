import React, { useEffect } from "react";
import TableProduct from "./TableProduct";

export default function FormProduct() {
  useEffect(() => {
    return () => {
      const formProduct = document.getElementById("formProduct");
      formProduct.onsubmit = (e) => {
        e.preventDefault();
      };
    };
  });

  return (
    <main className="container-fluid px-5 form-create">
      <section className="d-grid justify-content-center z-3">
        <div className="text-center">
          <img src="bootstrap-logo.svg" alt="" />
          <h1 className="mt-4">Create Product</h1>
          <p>
            Below is an example form built entirely with Bootstrap's form
            controls. Each form group has a validation state that can be
            triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <form method="post" className="container-fluid mt-5" id="formProduct">
          <h3 className="mb-4">Detail Product</h3>
          <div id="alertPlaceholder"></div>
          <div className="mb-3 col-md-6 col-sm-8">
            <label htmlFor="product-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              name="product-name"
              className="form-control"
              id="product-name"
              autoComplete="off"
              // onInput={checkInputProduct()}
            />
            <div id="feedbackPlaceholder"></div>
          </div>
          <div className="mb-3 col-md-4 col-sm-6">
            <label htmlFor="product-category" className="form-label">
              Product Category
            </label>
            <select
              name="product-category"
              id="product-category"
              className="form-select"
            >
              <option selected disabled defaultValue="">
                Pilih kategori produk
              </option>
              <option defaultValue="category 1">Category 1</option>
              <option defaultValue="category 2">Category 2</option>
              <option defaultValue="category 3">Category 3</option>
            </select>
            <div id="feedbackPlaceholder"></div>
          </div>
          <div className="mb-3 col-md-4 col-sm-6">
            <label htmlFor="product-image" className="form-label">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              className="form-control"
              id="product-image"
            />
          </div>
          <div className="mb-3 col-md-4 col-sm-6 form-check">
            <label className="pb-1 form-label">Product Freshness</label>
            <div id="feedbackPlaceholder"></div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="brand-new"
                name="radio-stacked"
                defaultValue="Brand New"
              />
              <label htmlFor="brand-new" className="form-check-label">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="second-hand"
                defaultValue="Second Hand"
                name="radio-stacked"
              />
              <label htmlFor="second-hand" className="form-check-label">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="refurbrished"
                defaultValue="Refurbrished"
                name="radio-stacked"
              />
              <label htmlFor="refurbrished" className="form-check-label">
                Refurbrished
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Additional Description</label>
            <textarea
              className="form-control"
              rows="10"
              name="product-description"
              id="productDescription"
            ></textarea>
          </div>
          <div className="mb-5">
            <label htmlFor="product-price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              className="form-control"
              id="product-price"
              placeholder="Rp 999999"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-5">
            Submit
          </button>
        </form>
      </section>
      <TableProduct />
    </main>
  );
}
