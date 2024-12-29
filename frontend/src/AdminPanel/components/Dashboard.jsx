import React from "react";
import Achievements from "./Achievements";
import { Grid } from "@mui/material";
import MonthlyOverview from "./MonthlyOverview";
import ProductTable from "./ProductTable";
import OrdersTableView from "../View/OrderTableView";
import ProductTableView from "../View/ProductTableView";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="shadow-gray-600 shadow-lg">
            <Achievements />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-gray-600 shadow-lg">
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-gray-600 shadow-lg">
            <OrdersTableView />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="shadow-gray-600 shadow-lg">
            <ProductTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
