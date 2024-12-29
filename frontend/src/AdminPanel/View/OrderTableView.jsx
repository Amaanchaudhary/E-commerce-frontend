import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliverOrder,
  getOrder,
  shipOrder,
} from "../../state/Admin/Order/Action";
import {
  Avatar,
  Button,
  Card,
  Paper,
  CardHeader,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  AvatarGroup,
  Menu,
  MenuItem,
} from "@mui/material";

const OrdersTableView = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorEl = [...anchorEl]; // Create a shallow copy of the array
    newAnchorEl[index] = event.currentTarget;
    setAnchorEl(newAnchorEl);
  };
  const handleClose = (index) => {
    // const newAnchorEl = [...anchorEl]; // Create a shallow copy of the array
    // newAnchorEl[index] = null;
    setAnchorEl([]);
  };

  useEffect(() => {
    dispatch(getOrder());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered]);

  console.log("order", adminOrder?.orders);

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliverOrder = (orderId) => {
    dispatch(deliverOrder(orderId));
    handleClose();
  };

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="Recent Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.slice(0, 5)?.map((item, index) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem, index) => (
                        <Avatar
                          key={index}
                          src={orderItem?.product?.imageUrl}
                        ></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem?.product?.title}</p>
                    ))}
                  </TableCell>

                  <TableCell align="left">{item?.totalItems}</TableCell>
                  <TableCell align="left">{item?.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full ${
                        item?.orderStatus == "CONFIRMED"
                          ? "bg-[#369236]"
                          : item?.orderStatus == "SHIPPED"
                          ? "bg-[#4141ff]"
                          : item?.orderStatus == "PLACED"
                          ? "bg-[#02B290]"
                          : item?.orderStatus == "PENDING"
                          ? "bg-[grey]"
                          : "bg-[#025720]"
                      }`}
                    >
                      {item?.orderStatus}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTableView;
