import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Typography,
  Rating,
  Divider,
  Container,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import useProductDetail from "@/api/useProductDetail";
import ProductDetailLoader from "@/ui/ProductDetailLoader";

const ProductDetail: NextPage = () => {
  const router = useRouter();

  const { query } = router;
  const id = query.id;

  const { data, isLoading, error } = useProductDetail(id);

  return (
    <Container>
      <Box
        mt={5}
        display="flex"
        justifyContent="space-between"
        p="100px 0px"
        sx={{
          flexDirection: {
            md: "row",
            xs: "column",
          },
        }}
      >
        {/* loader */}
        {isLoading && <ProductDetailLoader />}
        {/* product detail */}
        {data && !isLoading && (
          <React.Fragment>
            <Box px={5} className={`image_container`}>
              <Button
                variant="contained"
                startIcon={<KeyboardBackspaceIcon />}
                sx={{
                  borderRadius: "0",
                  width: "100%",
                  fontWeight: "bold",
                  p: "10px 5px",
                  mb: "15px",
                }}
                onClick={() => router.back()}
              >
                {" "}
                All Products
              </Button>

              <Image
                className={`prod_img`}
                src={data.image}
                alt={data.title}
                fill={true}
                sizes="(max-width: 100vw) 100vw, 50vw"
                priority
              />
            </Box>
            <Box px={5}>
              <Typography variant="h5">{data?.title}</Typography>
              <Typography mt={3}>{data?.description}</Typography>
              <Box my={2}>
                <Typography
                  mt={2}
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  color="success.light"
                >
                  InStock
                </Typography>
                <Typography
                  my={2}
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                  color="success.light"
                >
                  $ {data?.price}
                </Typography>
                <Rating name="simple-controlled" value={4} />
              </Box>
              <Divider />
              <Box mt={2} sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{ p: "10px 50px", borderRadius: "0", fontWeight: "bold" }}
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
};
export default ProductDetail;
