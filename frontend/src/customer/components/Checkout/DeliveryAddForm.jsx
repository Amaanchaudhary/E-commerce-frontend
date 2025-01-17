import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { addAdress, createOrder } from "../../../state/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleDeliverHere = (address) => {
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
    console.log("Delivering to:", address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstname"),
      lastName: data.get("lastname"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: Number(data.get("zip")),
      mobile: data.get("phonenumber"),
    };

    // const orderData = { address };
    dispatch(addAdress(address));
    console.log("address", address);
    // Clear the form after dispatch
    form.reset();
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 cursor-pointer">
            {auth?.user?.address.map((item) => (
              <div className="shadow-lg shadow-grey-600 px-2 py-1 mb-3">
                <AddressCard address={item} />
                <Button
                  sx={{ mt: 1, bgcolor: "RGB(145 85 253)" }}
                  size="large"
                  variant="contained"
                  onClick={() => handleDeliverHere(item)}
                >
                  Deliver Here
                </Button>
              </div>
            ))}
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete="given-Name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-Name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-Name"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-Name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-Name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="Shipping postal-code"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phonenumber"
                    name="phonenumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-Name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Add Address
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddForm;
