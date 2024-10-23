import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../customer/pages/Homepage/Homepage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigations";
import Products from "../customer/components/Product/Products";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";

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
            path="/:levelOne/:levelTwo/:levelThree"
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
