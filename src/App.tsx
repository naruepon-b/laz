import React from "react";
import Products from "./sections/Products";

import Navigation from "./components/Navigation";
import "./App.css";
import Footer from "./sections/Footer";
import Carousel from "./sections/Carousel";
import Header from "./sections/Header";
import FlashSales from "./sections/FlashSale";
import Menu from "./sections/Menu";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Menu />
      <FlashSales />
      <Products />
      <Footer />
      <Navigation />
    </>
  );
}

export default App;
