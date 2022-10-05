import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
