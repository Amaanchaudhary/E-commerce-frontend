import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigations";
import Products from "./components/Product/Products";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:LevelThree" element={<Products />} />

        {/* <Products /> */}
        {/* <ProductDetails />   */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDertails/> */}
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default CustomerRoutes;
