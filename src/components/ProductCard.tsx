import React from "react";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import { Product } from "@/types";

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Card
      className="card"
      elevation={2}
      sx={{ padding: "10px", borderRadius: "10px" }}
    >
      <Link
        href={{
          pathname: "/products/[id]",
          query: {
            id: product.id,
          },
        }}
        passHref
      >
        <Box className={`image_container`}>
          <Image
            className={`prod_img`}
            src={product.image}
            alt={product.title}
            fill={true}
            sizes="(max-width: 100vw) 100vw, 50vw"
            priority
          />
        </Box>
      </Link>
      <CardContent>
        <Typography variant="h6" noWrap>
          <Link
            href={{
              pathname: "/products/[id]",
              query: {
                id: product.id,
              },
            }}
            as={`/products/${product.id}`}
            passHref
          >
            {product.title}
          </Link>
        </Typography>

        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography component="span" color="success.light">
            Price:
          </Typography>
          <Typography component="span" color="primary.dark">
            ${product.price}
          </Typography>
        </Box>
        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography component="legend" color="success.light">
            Rating
          </Typography>
          <Rating name="rating" value={product.rating.rate} />
        </Box>

        <Typography mt={1} noWrap component="p">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="success" size="small">
          Add To Cart
        </Button>
        <FavoriteIcon sx={{ color: "red", cursor: "pointer" }} />
      </CardActions>
    </Card>
  );
};
