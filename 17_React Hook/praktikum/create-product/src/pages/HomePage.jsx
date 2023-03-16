import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    return () => {
      localStorage.clear("alreadyShown");
    };
  });
  return (
    <section className="container">
      <div className="d-flex flex-column justify-content-center align-items-center p-3 p-md-5">
        <h4 className="text-center">Apa yang anda ingin lakukan hari ini?</h4>
        <div className="d-flex my-3 gap-3">
          <Link to="/create-product" className="btn btn-primary">
            Add Product
          </Link>
          <Link to="/create-account" className="btn btn-primary">
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
