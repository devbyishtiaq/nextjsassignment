import React from "react";
import { Grid, Skeleton } from "@mui/material";

const ProductsLoader = () => {
  return (
    <Grid item xs={12} md={3}>
      <Skeleton height={400} />
      <Skeleton />
      <Skeleton width="60%" />
    </Grid>
  );
};

export default ProductsLoader;
