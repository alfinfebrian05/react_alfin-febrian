import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import FormAddAccount from "../components/FormAddAccount";

const CreateAccount = () => {
  const location = useLocation();
  const pageName = location.pathname;

  useEffect(() => {
    var alreadyShown =
      localStorage.getItem("alreadyShown") ||
      localStorage.setItem("alreadyShown", true);
    if (location.pathname === pageName && !alreadyShown) {
      alert(
        `Welcome to ${location.pathname.replace(/[/-]/g, " ").trim()} page!`
      );
    }
  }, [location, pageName]);

  return (
    <>
      <AppNavbar />
      <FormAddAccount />
    </>
  );
};

export default CreateAccount;
