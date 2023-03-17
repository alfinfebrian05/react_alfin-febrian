import { LandingPage, CreateProduct } from "../../pages";

const routers = [
  {
    pathname: "/",
    element: <LandingPage />,
  },
  {
    pathname: "/create-product",
    element: <CreateProduct />,
  },
];

export default routers;
