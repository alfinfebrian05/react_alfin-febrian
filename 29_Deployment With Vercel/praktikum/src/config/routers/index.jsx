import {
  HomePage,
  CreateProduct,
  LoginPage,
  RegisterPage,
  DetailProduct,
} from "../../pages";

import { Navigate } from "react-router-dom";
import SearchProduct from "../../pages/SearchProduct";

export const PrivateRouter = (props) => {
  const fakeAuth = JSON.parse(localStorage.getItem("account")) || false;
  if (!fakeAuth.loggedIn) {
    alert("Silahkan login /register terlebih dahulu!");
    return <Navigate to="/login" />;
  }
  const account = JSON.parse(localStorage.getItem("account"));
  alert("Welcome user " + account.username + " !");
  return props.children;
};

const routers = [
  {
    pathname: "/",
    element: <HomePage />,
    textLink: "Home",
  },
  {
    pathname: "#features",
    element: "",
    textLink: "Features",
  },
  {
    pathname: "#pricing",
    element: "",
    textLink: "Pricing",
  },
  {
    pathname: "#faq",
    element: "",
    textLink: "FAQs",
  },
  {
    pathname: "/create",
    element: (
      <PrivateRouter>
        <CreateProduct />
      </PrivateRouter>
    ),
    textLink: "Product",
  },
  {
    pathname: "/login",
    element: <LoginPage />,
    textLink: "Login",
  },
  {
    pathname: "/register",
    element: <RegisterPage />,
    textLink: "Register",
  },
  {
    pathname: "/detail/:id",
    element: <DetailProduct />,
    textLink: "Detail Product",
  },
  {
    pathname: "/search/:product_name",
    element: <SearchProduct />,
  },
];

export default routers;
