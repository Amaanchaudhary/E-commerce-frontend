import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md shadow-gray-600 hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.orderItems?.[0]?.product?.imageUrl}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>{item?.orderItems?.[0]?.product?.title}</p>
              <p className="opacity-50 text-xs font-semibold">
                Size : {item?.orderItems?.[0]?.size}
              </p>
              <p className="opacity-50 text-xs font-semibold">
                Color : {item?.orderItems?.[0]?.product?.color}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>{item?.totalDiscountedPrice}</p>
        </Grid>

        <Grid item xs={4}>
          {(() => {
            const currentDate = new Date();
            const orderDate = new Date(item?.orderDate);

            // Adjust delivery date for non-delivered cases
            let deliveryDate = new Date(orderDate);
            if (currentDate < orderDate) {
              deliveryDate.setDate(orderDate.getDate() + 2); // Add 2 days to the order date for upcoming deliveries
            } else if (
              currentDate >= orderDate &&
              (currentDate - orderDate) / (1000 * 60 * 60 * 24) <= 2
            ) {
              deliveryDate.setDate(orderDate.getDate() + 3); // Add 3 days to recent deliveries
            }

            const timeDiff = currentDate - deliveryDate;
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Difference in days

            let status, message;

            if (daysDiff > 0) {
              status = "delivered";
              message = `Delivered on ${deliveryDate.toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}`;
            } else if (daysDiff >= -2) {
              status = "recent";
              message = `Your item will be delivered soon. Estimated delivery: ${deliveryDate.toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}`;
            } else {
              status = "upcoming";
              message = `Expected Delivery on ${deliveryDate.toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}`;
            }

            return (
              <div>
                {status === "delivered" && (
                  <div>
                    <p>
                      <AdjustIcon
                        sx={{ width: "15px", height: "15px" }}
                        className="text-green-600 mr-2 text-sm"
                      />
                      <span>{message}</span>
                    </p>
                    <p className="text-xs">Your item has been delivered</p>
                  </div>
                )}
                {status === "recent" && (
                  <div>
                    <p>
                      <span>{message}</span>
                    </p>
                    <p className="text-xs">
                      Your item is on its way and will be delivered soon.
                    </p>
                  </div>
                )}
                {status === "upcoming" && (
                  <p>
                    <span>{message}</span>
                  </p>
                )}
              </div>
            );
          })()}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
