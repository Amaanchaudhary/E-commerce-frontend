import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { findProducts } from "../../state/product/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store);

  console.log(products, "products");

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      maxPrice: 100000,
      minPrice: 0,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 5,
      stock: "",
    };
    dispatch(findProducts(data));
  }, []);

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.product?.products?.content?.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={row.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.category.name}</TableCell>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.quantity}</TableCell>
                  <TableCell align="left">
                    <Button variant="outlined">Delete</Button>
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

export default ProductTable;
