import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../config/redux/store";
import CreateProduct from "./CreateProduct";

describe("Create Product", () => {
  test("Render Create Product", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const createProductTitle = getByText(`Buat Produk`);
    expect(createProductTitle).toBeInTheDocument();
  });
});

describe("Test Input Form Product", () => {
  test("Input Product Name", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productName = getByLabelText("Product Name");
    fireEvent.change(productName, { target: { value: "Coba 123" } });
    expect(screen.getByLabelText("Product Name")).toHaveValue("Coba 123");
  });

  test("Select Product Category", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productCategory = getByLabelText("Product Category");
    fireEvent.change(productCategory, { target: { value: "Category 1" } });
    expect(screen.getByLabelText("Product Category")).toHaveValue("Category 1");
  });

  test("Check Product Freshness Brand New", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productFreshness = getByLabelText("Brand New");
    fireEvent.click(productFreshness);
    expect(screen.getByLabelText("Brand New")).toBeChecked("Brand New");
  });

  test("Check Product Freshness Second Hand", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productFreshness = getByLabelText("Second Hand");
    fireEvent.click(productFreshness);
    expect(screen.getByLabelText("Second Hand")).toBeChecked("Second Hand");
  });

  test("Check Product Freshness Refurbrished", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productFreshness = getByLabelText("Refurbrished");
    fireEvent.click(productFreshness);
    expect(screen.getByLabelText("Refurbrished")).toBeChecked("Refurbrished");
  });

  test("Input Product Image", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productImage = getByLabelText("Product Image");
    fireEvent.change(productImage, { target: { files: ["test-image.jpg"] } });
    expect(productImage.files[0]).toEqual("test-image.jpg");
  });

  test("Input Product Description", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productDescription = getByLabelText("Product Description");
    fireEvent.change(productDescription, { target: { value: "Coba 123" } });
    expect(screen.getByLabelText("Product Description")).toHaveValue(
      "Coba 123"
    );
  });

  test("Input Product Price", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateProduct />
        </Provider>
      </BrowserRouter>
    );
    const productPrice = getByLabelText("Product Price");
    fireEvent.change(productPrice, { target: { value: 12345 } });
    expect(screen.getByLabelText("Product Price")).toHaveValue(12345);
  });

  describe("Product Name Validation", () => {
    test("Regex Test", async () => {
      const { getByLabelText, getByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateProduct />
          </Provider>
        </BrowserRouter>
      );
      const productName = getByLabelText("Product Name");
      fireEvent.change(productName, { target: { value: "$$$@!$$%^&*(!" } });

      await waitFor(() => {
        expect(
          getByText("Product Name Only Accept Alphabet and Numbers!")
        ).toBeInTheDocument();
      });
    });

    test("Max Length Test", async () => {
      const { getByLabelText, getByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateProduct />
          </Provider>
        </BrowserRouter>
      );
      const productName = getByLabelText("Product Name");
      fireEvent.change(productName, {
        target: {
          value: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        },
      });

      await waitFor(() => {
        expect(getByText("Product Name Exceed 25 Char!")).toBeInTheDocument();
      });
    });

    test("Form Required ", async () => {
      const { getByRole, getByText, getAllByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateProduct />
          </Provider>
        </BrowserRouter>
      );

      const submitButton = getByRole("button", { name: "Submit" });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(getByText("Product Name must be Filled!")).toBeInTheDocument();
        expect(
          getByText("Product Category must be Filled!")
        ).toBeInTheDocument();
        expect(
          getByText("Product Image must be selected!")
        ).toBeInTheDocument();
        expect(
          getByText("Product Description must be Filled!")
        ).toBeInTheDocument();
        expect(getByText("Product Price must be filled!")).toBeInTheDocument();
      });
    });
  });
});
