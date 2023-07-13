import React from "react";
import { Box, Skeleton } from "@mui/material";

const ProductDetailLoader = () => {
  return (
    <React.Fragment>
      <Box px={5} width="50%">
        <Skeleton width="100%" />
        <Skeleton width="100%" height={350} />
      </Box>
      <Box width="100%">
        <Skeleton width="60%" />
        <Skeleton width="100%" height={350} />
        <Skeleton width="30%" />
        <Skeleton width="30%" />
        <Skeleton width="40%" />
      </Box>
    </React.Fragment>
  );
};

export default ProductDetailLoader;
