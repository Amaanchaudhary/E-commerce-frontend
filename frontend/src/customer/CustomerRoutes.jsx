import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigations";
import Products from "./components/Product/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import Order from "./components/Order/Order";
import OrderDetails from "./components/Order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="py-5">
        <Routes>
          <Route path="/login" element={<Homepage />} />
          <Route path="/register" element={<Homepage />} />

          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/:levelOne/:levelTwo/:LevelThree"
            element={<Products />}
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:id" element={<OrderDetails />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
