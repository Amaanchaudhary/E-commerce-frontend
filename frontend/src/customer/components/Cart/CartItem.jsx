import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../state/cart/Action";
import { useLocation } from "react-router-dom";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const step = searchParams.get("step")  

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?._id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item?._id));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="h-full w-full object-cover object-top "
            src={item?.product?.imageUrl}
            alt="img"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.title}</p>
          <p className="opacity-70">
            Size: {item?.size} , {item?.product?.color}
          </p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          <div className="flex space-x-5 item-center text-gray-900 pt-6">
            <p className="font-semibold">₹{item?.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item?.price}</p>
            <p className="text-green-600 font-semibold">
              {item?.product?.discountPercent}% off
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4 ">
        <div className="flex item-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item?.quantity <= 1 || step == 3}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="px-7 py-1 border rounded-sm">{item.quantity}</span>
          <IconButton
            sx={{ color: "RGB(145 85 253)" }}
            onClick={() => handleUpdateCartItem(1)}
            disabled={step == 3}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button
            sx={{ color: "RGB(145 85 253)" }}
            onClick={handleRemoveCartItem}
            disabled={step == 3}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
