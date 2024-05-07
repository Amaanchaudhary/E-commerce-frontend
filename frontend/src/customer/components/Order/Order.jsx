import { Grid } from "@mui/material";
import React from "react";

const Order = () => {

    const orderStatus = [
        {label : "On the Way", value : "on_the_way"},
        {label : "Delivered", value : "Delivered"},
        {label : "Cancelled", value : "cancelled"},
        {label : "Returned", value : "returned"},

    ]

  return (
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold ">ORDER STATUS</h1>
            </div>
          </div>
        </Grid>

        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default Order;
