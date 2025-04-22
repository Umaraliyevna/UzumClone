import React from "react";
import { useSelector } from "react-redux";
import { Button, IconButton, Stack, Typography } from "@mui/material";

import { DeliveryInfo, OverAllInfo, ProductContainer } from "./Basket.style";
import BasketProduct from "./BasketProduct/BasketProduct";

function Basket() {
  const basketItems = useSelector((store) => store.basket);

  return (
    <div className="container">
      <Stack direction="row">
        <ProductContainer>
          {basketItems.map(({ image, title, changedSum, realSum }) => (
            <BasketProduct
              image={image}
              name={title}
              description={title}
              color="black"
              oldPrice={changedSum}
              price={realSum}
            />
          ))}
        </ProductContainer>
        <OverAllInfo>
          <Stack direction="row" className="deliverState">
            <p>Bepul yetkazib beramiz: olib ketish punkti yoki kuryer orqali</p>
            <IconButton size="small"></IconButton>
          </Stack>
          <DeliveryInfo>
            <p>Sizning buyurtmangiz</p>

            <Stack direction="row" justifyContent="space-between">
              <p>Mahsulotlar (15):</p>
              <p>6 178 480 so'm</p>
            </Stack>

            <Typography className="deliviryDate">
              17 aprel kuni yetkaziladi
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              className="resultSum"
            >
              <span>Jami:</span>
              <span>3 310 758 so'm</span>
            </Stack>

            <Typography className="benefit">
              Siz tejaysiz: 2 867 722 so'm
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#a155e5",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#8e3dd7",
                },
              }}
            >
              Rasmiylashtirishga o'tish
            </Button>
          </DeliveryInfo>
        </OverAllInfo>
      </Stack>
    </div>
  );
}

export default Basket;
