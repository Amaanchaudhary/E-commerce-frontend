import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderById } from "../../../state/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../state/payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const handleCheckout = () => {
    dispatch(createPayment(orderId))
  }

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border mb-5">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order?.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border border-gray-200 rounded-xl p-2">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10 ">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{order.order?.discounte}
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full"
                sx={{
                  px: ["0.75rem", "2rem"],
                  py: ["0.50rem", "1rem"],
                  bgcolor: "#9155fd",
                }}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
