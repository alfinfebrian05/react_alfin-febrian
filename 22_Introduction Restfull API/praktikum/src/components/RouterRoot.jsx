import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routers from "../config/routers";

const RouterRoot = () => {
  return (
    <Router>
      <Routes>
        {routers.map((router) => {
          return (
            <Route
              path={router.pathname}
              element={router.element}
              key={router}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default RouterRoot;
