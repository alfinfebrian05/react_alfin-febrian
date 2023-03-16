import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";

const AddProduct = () => {
  const location = useLocation();
  const pageName = location.pathname;

  return (
    <>
      <AppNavbar />
    </>
  );
};

export default AddProduct;
