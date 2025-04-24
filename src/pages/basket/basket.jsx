import React from "react";
import { useSelector } from "react-redux";
import { Button, Container, Stack, Typography } from "@mui/material";
import BasketProduct from "./BasketProduct/BasketProduct";
import { DeliveryInfo, OverAllInfo, ProductContainer } from "./Basket.style";
import { Info } from "@mui/icons-material";

function Basket() {
  const basketItems = useSelector((store) => store.basket);

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
            <Info sx={{ color: "#6b7280", fontSize: 20 }} />
            <Typography variant="body2">
              Topshirish punktiga korxona berish <strong>5000 so'm</strong>{" "}
              <br />
              Yana <strong>42 010 so'm</strong>siz yaxshi odam siz.
            </Typography>
          </Stack>

          <DeliveryInfo>
            <Typography variant="subtitle1" fontWeight={600}>
              Buyurtmangiz
            </Typography>

            <Stack direction="row" justifyContent="space-between" mt={1}>
              <Typography variant="body2">
                Mahsulotlar ({basketItems.length}):
              </Typography>
              <Typography variant="body2">0 so'm</Typography>
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
              <span>0 so'm</span>
            </Stack>

            <Typography className="benefit">Sharhlar: 0 so'm</Typography>

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
