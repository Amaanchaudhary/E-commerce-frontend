import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect } from "react";
import OrderTracker from "../Order/OrderTracker";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../state/Order/Action";
import { updatePayment } from "../../../state/payment/Action";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state);

  console.log(order.order, "order");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    setPaymentId(urlParams.get("razorpay_payment_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get placed
        </Alert>
      </div>

      <OrderTracker activeStep={1} />

      <Grid container className="space-y-5 py-5 pt-20">
        {order.order?.orderItems?.map((item) => (
          <Grid
            container
            item
            className=""
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img className="w-[5-rem] h-[5rem] object-cover object-top">
                </img>

              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
