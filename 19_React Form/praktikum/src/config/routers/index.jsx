import { HomePage, CreateProduct, LoginPage, RegisterPage } from "../../pages";

import { Navigate } from "react-router-dom";

const PrivateRouter = (props) => {
  const fakeAuth = JSON.parse(localStorage.getItem("account")) || false;
  if (!fakeAuth.loggedIn) return <Navigate to="/login" />;
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
    element: <CreateProduct />,
    textLink: "Product",
  },
  {
    pathname: "/login",
    element: (
      <PrivateRouter>
        <LoginPage />
      </PrivateRouter>
    ),
    textLink: "Login",
  },
  {
    pathname: "/register",
    element: <RegisterPage />,
    textLink: "Register",
  },
];

export default routers;
