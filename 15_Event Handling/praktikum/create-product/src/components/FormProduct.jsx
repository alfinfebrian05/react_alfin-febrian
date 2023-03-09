import React, { useEffect, useState } from "react";
import TableProduct from "./TableProduct";

export default function FormProduct() {
  const [isChecked, setIsChecked] = useState(false);
  const [randomId, setRandomId] = useState("");
  const [validateMessage, setValidateMessage] = useState("");

  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const randomProductId = (event) => {
    const newRandomId = Math.floor(Math.random() * 100000) + 1;
    setRandomId(newRandomId);
    console.log(randomId);
  };

  const checkInputProduct = (e) => {
    const inputValue = e.target.value;
    var inputLengthMax = 10;
    var countInputLength = 0;

    if (inputValue.length > inputLengthMax) {
      setValidateMessage(
        `Nama produk tidak boleh lebih dari ${inputLengthMax}`
      );
    } else {
      for (let i = 0; i < inputValue.length; i++) {
        countInputLength += 1;
      }
      setValidateMessage(`Nama produk : ${countInputLength} karakter`);
    }
  };

  useEffect(() => {
    return () => {
      const formProduct = document.getElementById("formProduct");
      formProduct.onsubmit = (e) => {
        e.preventDefault();
      };
    };
  });

  return (
    <main className="container-fluid px-3 px-lg-5 form-create">
      <section className="d-grid justify-content-center z-3">
        <div className="d-flex align-items-center gap-3 pb-4">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchChangeLanguage"
              onChange={handleSwitchChange}
              checked={isChecked}
            />
            <label className="form-check-label" htmlFor="switchChangeLanguage">
              {isChecked ? "ID" : "EN"}
            </label>
          </div>
        </div>
        <div className="text-center">
          <img src="./assets/bootstrap-logo.svg" alt="logo" />
          <h1 className="mt-4">
            {isChecked ? article.title.id : article.title.en}
          </h1>
          <p>{isChecked ? article.description.id : article.description.en}</p>
        </div>

        <form method="post" className="container-fluid mt-5" id="formProduct">
          <h3 className="mb-4">Detail Product</h3>
          <div id="alertPlaceholder"></div>
          <div className="mb-3 row">
            <label
              htmlFor="productId"
              className="col-md-2 col-xl-1 col-form-label"
            >
              Product ID :
            </label>
            <div className="col-7 col-md-3">
              <input
                className="form-control"
                type="text"
                value={randomId && `PID-${randomId}`}
                aria-label="Disabled input example"
                disabled
                readOnly
              />
            </div>
            <div className="col-5">
              <button
                type="button"
                className="btn btn-primary"
                onClick={randomProductId}
              >
                Random ID
              </button>
            </div>
          </div>
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
              onChange={checkInputProduct}
            />
            <div className="d-block">{validateMessage && validateMessage}</div>
            {/* <div className="invalid-feedback">{validateMessage}</div> */}
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
              <option disabled defaultValue="">
                Pilih kategori produk
              </option>
              <option value="category 1">Category 1</option>
              <option value="category 2">Category 2</option>
              <option value="category 3">Category 3</option>
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
