import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

import { Routes, Route } from "react-router-dom";

import AddProduct from "./pages/AddProduct";
import CreateAccount from "./pages/CreateAccount";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/create-account" element={<CreateAccount />}></Route>
      <Route path="/create-product" element={<AddProduct />}></Route>
    </Routes>
  );
}

export default App;
