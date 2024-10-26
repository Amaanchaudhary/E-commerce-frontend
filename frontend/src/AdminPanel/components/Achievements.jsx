import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 10,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achievements = () => {
  return (
    <Card
      className=""
      sx={{ position: "relative", bgcolor: "#242B2E", color: "white" }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          Shop with Zosh
        </Typography>
        <Typography variant="body2">Congratulations 🥳</Typography>
        <Typography variant="h5" sx={{ my: 2.5 }}>
          420.8k
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <TriangleImg src=""></TriangleImg>
        <TrophyImg src="https://t4.ftcdn.net/jpg/07/51/13/95/360_F_751139599_djQxLX0SXrA23Y6pnIeNFvogxlYFqdd3.jpg"></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achievements;
