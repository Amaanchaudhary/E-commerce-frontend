import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../state/Auth/Action";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .matches(/^[A-Za-z]+$/, "First Name must contain only letters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .matches(/^[A-Za-z]+$/, "Last Name must contain only letters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
});

const RegisterForm = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const onSubmit = (data) => {
    const userData = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      password: data.password,
      mobile: data.mobile,
    };
    dispatch(register(userData));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   const userData = {
  //     firstname: data.get("firstName"),
  //     lastname: data.get("lastName"),
  //     email: data.get("email"),
  //     password: data.get("password"),
  //     mobile: data.get("mobile"),
  //   };
  //   dispatch(register(userData));
  //   // console.log(userData, "userData");
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...formRegister("firstName", {
                required: "First Name is required",
              })}
              label="First Name"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...formRegister("lastName", {
                required: "Last Name is required",
              })}
              label="Last Name"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...formRegister("email", { required: "Email is required" })}
              label="Email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...formRegister("password", {
                required: "Password is required",
              })}
              label="Password"
              type="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...formRegister("mobile", {
                required: "Mobile number is required",
              })}
              label="Mobile"
              fullWidth
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex flex-col items-center justify-center">
        <div className="py-3 flex item-center">
          <p>If you have already accouunt ? </p>
          <Button
            onClick={() => Navigate("/login")}
            className="ml-5"
            size="small"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
