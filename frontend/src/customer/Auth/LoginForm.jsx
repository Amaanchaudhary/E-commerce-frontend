import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const  Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log(userData, "userData");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex flex-col items-center justify-center">
        <div className="py-3 flex item-center">
          <p>If you don't have accouunt ? </p>
          <Button
            onClick={() => Navigate("/register")}
            className="ml-5"
            size="small"
          >
            Register
          </Button>
        </div>
      </div>

    </div>
  );
};

export default LoginForm;
