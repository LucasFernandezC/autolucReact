import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";
// Context
import CartProvider from "./context/CartContext";

const App = () => (
  <div className="App">
    <CartProvider>
      <BrowserRouter>
        <Header />
        <div id="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/producto/:id" element={<Detail />}></Route>
            <Route path="/:category" element={<Home />}></Route>
            <Route path="/cart" element={<Checkout />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  </div>
);

export default App;
