import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { getOrder, getUserAllOrder } from "../../../state/Admin/Order/Action";
import { useDispatch, useSelector } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAllOrder());
  }, []);

  const {adminOrder} = useSelector((state) => state);

  const { orders } = adminOrder;
  

  const orderStatus = [
    { label: "On the Way", value: "on_the_way" },
    { label: "Delivered", value: "Delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];

  return (
    <div className="px-5 lg:px-10">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold ">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div className="flex item-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300
                  text-indigo-600 focus:ring-indigo-500"
                  />

                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-5">
            {orders?.map((item) => (
              <OrderCard item={item} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
