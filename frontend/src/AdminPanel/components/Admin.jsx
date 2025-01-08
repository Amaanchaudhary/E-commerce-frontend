import {
  Box,
  Button,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "./Dashboard";
import CreateProducts from "./CreateProducts";
import OrdersTable from "./OrdersTable";
import CustomersTable from "./CustomersTable";
import ProductTable from "./ProductTable";
import AdminDashboard from "./Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../state/Auth/Action";
import AuthModal from "../../customer/Auth/AuthModal";
import AdminAuthModal from "../../customer/Auth/AdminAuthModal";
import { getOrder } from "../../state/Admin/Order/Action";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  // { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
];
const Admin = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [OpenAuthModal, setOpenAuthModal] = useState(false);
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = () => {
    setOpenAuthModal(true);
  };

  const handleClose = () => {
    setOpenAuthModal(false);
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      handleClose();
    } else {
      handleOpen();
    }
  }, [jwt, auth.jwt]);

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText >HomePage</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="relative flex h-[100vh] ">
      {auth.user && (
        <>
          <CssBaseline />
          <div className="shadow-gray-600 shadow-lg w-[15%]  h-full fixed top-0">
            {drawer}
          </div>

          <div className="w-[85%] h-full ml-[15%]">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/product/create" element={<CreateProducts />} />
              <Route path="/products" element={<ProductTable />} />
              <Route path="/orders" element={<OrdersTable />} />
              <Route path="/customers" element={<CustomersTable />} />
            </Routes>
          </div>
        </>
      )}

      <AdminAuthModal handleClose={handleClose} open={OpenAuthModal} />
    </div>
  );
};

export default Admin;
