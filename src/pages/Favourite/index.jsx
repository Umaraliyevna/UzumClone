import React from "react";
import { useSelector } from "react-redux";

import { Container, Grid } from "@mui/material";

import getImagUrl from "src/mocs/images";
import { ProductCard } from "src/components";
import PRODUCT_LIST from "src/mocs/ProductCard";

const Favourite = () => {
  const favouriteProductId = useSelector((store) => store.favourite);

  const products = PRODUCT_LIST.filter((item) =>
    favouriteProductId.includes(item.id)
  );
  console.log(favouriteProductId, products);
  return (
    <Container maxWidth="lg">
      <Grid
        spacing={{ xs: 2.5, sm: 10, md: 3, lg: 2.5 }}
        container
        className="productGrid"
        sx={{
          pb: { xs: 2, sm: 0 },
        }}
      >
        {products.map((product) => (
          <Grid size={{ xs: 6, sm: 3.9, md: 3, lg: 2.4 }} key={product.id}>
            <ProductCard image={getImagUrl()} {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Favourite;
