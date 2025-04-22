import React from "react";
import { FaAngleRight } from "react-icons/fa6";

import { Container, Stack } from "@mui/material";

import PRODUCT_LIST from "src/mocs/ProductCard";
import { ProductCard } from "src/components";
import { Carusel } from "./ProductCarusel.style";

function ProductCarusel({ title }) {
  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Carusel>
        <h2 className="productTitle">
          {title}
          <FaAngleRight />
        </h2>
        <Stack direction="row" gap={2} sx={{ overflowX: "auto", pb: 2 }}>
          {PRODUCT_LIST.map((product) => (
            <div style={{ minWidth: 200 }} key={product.id}>
              <ProductCard className="caruselCard" {...product} />
            </div>
          ))}
        </Stack>
      </Carusel>
    </Container>
  );
}

export default ProductCarusel;
