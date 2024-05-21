import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-gray-600 hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://img.freepik.com/free-psd/stylish-blue-plaid-shirt-men-isolated-transparent-background_191095-23034.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Mens slim Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size : M</p>
              <p className="opacity-50 text-xs font-semibold">Color : Black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1599</p>
        </Grid>

        <Grid item xs={4}>
         {true && <div>
            <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <span>Delivered on March 03</span>
              <span></span>
            </p>
            <p className="text-xs">
                Your Item has been Delivered
            </p>
          </div>}
          {false && (
            <p>
              <span>Expected Delivery on March 04</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
