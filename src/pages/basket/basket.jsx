import React from "react";
import { useSelector } from "react-redux";

import { Info } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Container, Stack, Typography } from "@mui/material";

import BasketProduct from "./BasketProduct/BasketProduct";

import { DeliveryInfo, OverAllInfo, ProductContainer } from "./Basket.style";

function Basket() {
  const basketItems = useSelector((store) => store.basket);

  console.log(basketItems);
  const realSum = basketItems.reduce(
    (acc, item) => acc + item.product.realSum * item.quantity,
    0
  );

  const changedSum = basketItems.reduce(
    (acc, item) => acc + item.product.changedSum * item.quantity,
    0
  );
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <ProductContainer>
          {basketItems.map(({ product }) => (
            <BasketProduct
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.title}
              description={product.title}
              color="black"
              oldPrice={product.changedSum}
              price={product.realSum}
            />
          ))}
        </ProductContainer>

        <OverAllInfo>
          <Stack direction="row" className="deliverState">
            <LocationOnIcon sx={{ color: "#9F79FF" }} />

            <Typography variant="body2" fontWeight={600}>
              Topshirish punktiga korxona berish 5000 so'm <br />
              <Typography variant="caption" fontWeight={400} color="#333">
                {" "}
                Yana 42 010 so'm va tekin.
              </Typography>
            </Typography>
            <Info sx={{ color: "#6b7280", fontSize: 20 }} />
          </Stack>

          <DeliveryInfo>
            <Typography variant="subtitle1" fontWeight={600}>
              Buyurtmangiz
            </Typography>

            <Stack direction="row" justifyContent="space-between" mt={1}>
              <Typography variant="body2">
                Mahsulotlar ({basketItems.length}):{" "}
                {changedSum.toLocaleString()}
              </Typography>
              <Typography variant="body2"></Typography>
            </Stack>

            <Typography className="deliviryDate">
              Yetkazib berish: 25-aprel
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              className="resultSum"
            >
              <span>Jami:</span>
              <span>{realSum.toLocaleString()} so'm</span>
            </Stack>

            <Typography className="benefit" textAlign="right">
              Tejovingiz: {(changedSum - realSum).toLocaleString()} so'm
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#a855f7",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "16px",
                py: 1.5,
                mt: 1,
                "&:hover": {
                  backgroundColor: "#9333ea",
                },
              }}
            >
              Rasmiylashtirishga o‘tish
            </Button>
          </DeliveryInfo>
        </OverAllInfo>
      </Stack>
    </Container>
  );
}

export default Basket;
