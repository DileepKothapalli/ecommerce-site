import { useNavigate } from "react-router-dom";
import ApplicationCard from "../shared/ApplicationCard";
import { Grid } from "@mui/material";
import { useMemo } from "react";

const AdminHome = () => {

  const cards = useMemo(
    () => [
    { name: "Dashboard", icon: "", route: "/admin/dashboard" },
    { name: "Product Management", icon: "", route: "/admin/product-management" },
    { name: "Orders", icon: "", route: "/admin/orders" },
  ]);
  return (
    <Grid container spacing={2} padding={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <ApplicationCard data={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AdminHome;
