import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../state/product/Action";
import { navigation } from "../../customer/components/Navigation/NavigationData";

import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];
const CreateProducts = () => {
  const { categories } = navigation;
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPercent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });

  const [secondLevelCategories, setSecondLevelCategories] = useState([]);
  const [thirdLevelCategories, setThirdLevelCategories] = useState([]);

  const handleTopLevelChange = (e) => {
    const topLevelId = e.target.value;
    setProductData((prevData) => ({
      ...prevData,
      topLevelCategory: topLevelId,
      secondLevelCategory: "",
      thirdLevelCategory: "",
    }));

    const selectedCategory = categories.find((cat) => cat.id === topLevelId);
    setSecondLevelCategories(selectedCategory ? selectedCategory.sections : []);
    setThirdLevelCategories([]);
  };

  const handleSecondLevelChange = (e) => {
    const secondLevelId = e.target.value;
    setProductData((prevData) => ({
      ...prevData,
      secondLevelCategory: secondLevelId,
      thirdLevelCategory: "",
    }));

    const selectedSection = secondLevelCategories.find(
      (sec) => sec.id === secondLevelId
    );
    setThirdLevelCategories(selectedSection ? selectedSection.items : []);
  };

  const handleThirdLevelChange = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      thirdLevelCategory: e.target.value,
    }));
  };

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    // console.log(name , value , "check");

    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);
    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevData) => ({
      ...prevData,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    console.log(productData, "created");
  };

  return (
    <div className="p-10">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center"
      >
        Add new Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen "
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              label="Discount Percent"
              name="discountPercent"
              value={productData.discountPercent}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level category</InputLabel>
              <Select
                required
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleTopLevelChange}
                label="Top Level Category"
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level category</InputLabel>
              <Select
                required
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleSecondLevelChange}
                disabled={!secondLevelCategories.length}
                label="Second Level Category"
              >
                {secondLevelCategories.map((sec) => (
                  <MenuItem key={sec.id} value={sec.id}>
                    {sec.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level category</InputLabel>
              <Select
                required
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleThirdLevelChange}
                disabled={!thirdLevelCategories.length}
                label="Third Level Category"
              >
                {thirdLevelCategories.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>

          {productData?.size?.map((size, index) => (
            <Grid key={index} container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Sizes Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  value={size.quantity}
                  onChange={(event) => handleSizeChange(event, index)}
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Add New product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProducts;
