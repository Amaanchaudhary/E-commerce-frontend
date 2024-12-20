import React from "react";
import Achievements from "./Achievements";
import { Grid } from "@mui/material";
import MonthlyOverview from "./MonthlyOverview";
import ProductTable from "./ProductTable";

const AdminDashboard = () => {
  return (
    <div className="p-10">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Achievements />
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
