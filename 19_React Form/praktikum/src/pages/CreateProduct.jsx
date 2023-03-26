import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, Nav, Form, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import { FormProduct, NavbarTemplate } from "../components/templates";

const CreateProduct = () => {
  const [account, setAccount] = useState({});
  const [isSwitch, setIsSwitch] = useState(false);
  const [productItem, setProductItem] = useState([]);

  const navigate = useNavigate();

  const article = {
    title: {
      id: "Buat Produk",
      en: "Create Product",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    setAccount(account);
  }, []);

  const handleSwitchLanguage = () => setIsSwitch(!isSwitch);

  const handleLogout = () => {
    localStorage.setItem(
      "account",
      JSON.stringify({ ...account, loggedIn: false })
    );
    navigate("/login");
  };
  return (
    <>
      <NavbarTemplate />
      <Nav className="mt-5 pt-4 pb-3 pt-lg-5 pb-lg-4 pt-md-4 pb-md-3 bg-light">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <Form.Check
              type="switch"
              label={isSwitch ? "EN" : "ID"}
              onChange={handleSwitchLanguage}
              checked={isSwitch}
            />
            <Button variant="danger" onClick={handleLogout}>
              Logout <Icon.BoxArrowRight className="ms-2" />
            </Button>
          </div>
        </Container>
      </Nav>
      <Container>
        <div className="d-flex align-content-center align-items-center mt-4 flex-column container px-5">
          <Image src="./assets/logo/bootstrap-logo.svg" className="mb-3" />
          <h3 className="d-flex align-items-center mt-2 mb-3">
            {isSwitch ? article.title.en : article.title.id}
          </h3>
          <p className="text-center">
            {isSwitch ? article.description.en : article.description.id}
          </p>
        </div>
        <FormProduct />
      </Container>
    </>
  );
};

export default CreateProduct;
