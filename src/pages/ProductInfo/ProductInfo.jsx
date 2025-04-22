import React, { useCallback, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  FaStar,
  FaCheck,
  FaMoneyBills,
  FaRegStarHalfStroke,
} from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiHeart, CiCreditCard1, CiBank } from "react-icons/ci";

import ProductBrend from "src/assets/ProductInfobrand.png";

import {
  description_images,
  images_from_custom,
  images_product,
} from "src/mocs/productInfomoc";
import { ProductCarusel, ProductTotal } from "src/components";
import {
  addToBasket,
  decrementQuantity,
  incrementQuantity,
} from "src/redux/sliceRedux/basket";
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  ImagesInfoStyle,
  ProductCostCardStyle,
  ProductInfoStyle,
} from "./ProductInfo.style";

function ProductInfo() {
  const dispatch = useDispatch();
  const productInfo = useSelector((store) => store.product);
  const { id, image, title, reyting, perMonthSum, changedSum, realSum } =
    productInfo;

  const handleProduct = useCallback(() => {
    dispatch(addToBasket({ product: productInfo, quantity: 1 }));
  }, [dispatch, id]);

  return (
    <Container>
      <ProductInfoStyle>
        <List className="productInfoList">
          <ListItem>Bosh sahifa /</ListItem>
          <ListItem>Barcha toifalar /</ListItem>
          <ListItem>Maishiy texnika /</ListItem>
          <ListItem>Katta maishiy texnika /</ListItem>
          <ListItem>Sovutgichlar va muzlatgichlar /</ListItem>
          <ListItem>Sovutgichlar</ListItem>
        </List>
        <Stack direction="row">
          <ImagesInfoStyle>
            <Typography variant="h5">{title}</Typography>
            <Stack direction="row" alignItems="center">
              <Stack direction="row" alignItems="center">
                <FaStar className="productIcon" />
                <FaStar className="productIcon" />
                <FaStar className="productIcon" />
                <FaStar className="productIcon" />
                <FaRegStarHalfStroke className="productIcon" />
              </Stack>
              <Typography
                variant="body1"
                mb={0}
                pl={0.5}
                color="rgba(0, 0, 0, 0.618)"
                className="comment"
              >
                {reyting} (414 sharh)
              </Typography>
              <Typography
                variant="body1"
                mb={0}
                pl={0.5}
                color="rgba(0, 0, 0, 0.618)"
              >
                41 fotosurat
              </Typography>
              <Typography
                variant="body1"
                mb={0}
                pl={0.5}
                color="rgba(0, 0, 0, 0.618)"
              >
                {" "}
                800+ buyurtma
              </Typography>
            </Stack>
            <Stack direction="row">
              <Box className="productImagesVertical">
                {Array(3)
                  .fill()
                  .map((_, i) => (
                    <img key={i} src={image} alt={`Rasm ${i + 1}`} />
                  ))}
              </Box>
              <Box className="productImagesGorizontal">
                {Array(2)
                  .fill()
                  .map((_, i) => (
                    <img key={i} src={image} alt={`Rasm ${i + 1}`} />
                  ))}
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography className="reytingNumber">{reyting}</Typography>
              <FaStar className="productIcon" />
              <FaStar className="productIcon" />
              <FaStar className="productIcon" />
              <FaStar className="productIcon" />
              <FaRegStarHalfStroke className="productIcon" />
              <Typography className="reytingComment">591 sharh</Typography>
            </Stack>
            <Box className="customSendImages">
              {Array(7)
                .fill()
                .map((_, i) => (
                  <img key={i} src={image} alt={`Rasm ${i + 1}`} />
                ))}
            </Box>
            <Stack direction="row" gap={2}>
              <Box className="commentaryCard">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1.5}
                >
                  <Typography variant="body2" fontWeight={700}>
                    Dinara{" "}
                    <Typography
                      variant="body2"
                      fontWeight={400}
                      color="rgba(0, 0, 0, 0.566)"
                    >
                      4-mart
                    </Typography>
                  </Typography>
                  <Box>
                    <FaStar className="productIcon" />
                    <FaStar className="productIcon" />
                    <FaStar className="productIcon" />
                    <FaStar className="productIcon" />
                    <FaStar className="productIcon" />
                  </Box>
                </Stack>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  className="thoughts"
                >
                  Afzalliklari:{" "}
                  <Typography variant="body2" fontWeight={400}>
                    krem juda zo'r
                  </Typography>{" "}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  className="thoughts"
                >
                  Kamchiliklari:{" "}
                  <Typography variant="body2" fontWeight={400}>
                    yo
                  </Typography>{" "}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  className="thoughts"
                >
                  Izoh:{" "}
                  <Typography variant="body2" fontWeight={400}>
                    Manga yoqdi
                  </Typography>{" "}
                </Typography>
              </Box>
              <Box className="commentaryCard">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1.5}
                >
                  <Typography variant="body2" fontWeight={700}>
                    Dinara{" "}
                    <Typography
                      variant="body2"
                      fontWeight={400}
                      color="rgba(0, 0, 0, 0.566)"
                    >
                      4-mart
                    </Typography>
                  </Typography>
                  <Box>
                    <FaStar className="productIcon" />
                    <FaStar className="productIcon" />
                    <FaStar className="productIcon" />
                    <FaStar className="productIcon" />
                    <FaStar className="productIcon" />
                  </Box>
                </Stack>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  className="thoughts"
                >
                  Afzalliklari:{" "}
                  <Typography variant="body2" fontWeight={400}>
                    krem juda zo'r
                  </Typography>{" "}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  className="thoughts"
                >
                  Kamchiliklari:{" "}
                  <Typography variant="body2" fontWeight={400}>
                    yo
                  </Typography>{" "}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  className="thoughts"
                >
                  Izoh:{" "}
                  <Typography variant="body2" fontWeight={400}>
                    Manga yoqdi
                  </Typography>{" "}
                </Typography>
              </Box>
            </Stack>
            <Button className="showAllComment">Hamma sharhlarni ko'rish</Button>
            <Box className="productDescription">
              <Button>Mahsulot tavsifi</Button>
              <Typography>
                NIVEA Creme ko'p qirrali namlovchi vositadir. <br />
                Evserit, pantenol va glitserin bilan noyob formulasi tufayli
                krem tananing terisini, ayniqsa uning quruq joylarini mukammal
                namlaydi, oziqlantiradi va ehtiyotkorlik bilan parvarish qiladi.
                Nivea Creme tarkibida konservantlar mavjud emas va shuning uchun
                hatto nozik chaqaloq terisiga ham mos keladi.
              </Typography>
              <Box>
                {description_images.map((image) => {
                  return <img src={image} />;
                })}
              </Box>
            </Box>
          </ImagesInfoStyle>
          <ProductCostCardStyle>
            <Box className="productCostCard">
              <Stack direction="row" alignItems="center">
                <Typography className="price" mr={1}>
                  {realSum.toLocaleString("fi-FI")} so'm
                </Typography>
                <Typography className="oldPrice">
                  {changedSum.toLocaleString("fi-FI")} so'm
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                className="installmentOptions"
              >
                <Button className="selected">24 oy</Button>
                <Button>12 oy</Button>
                <Button>6 oy</Button>
                <Button>3 oy</Button>
              </Stack>
              <Box className="monthlyPayment">
                {perMonthSum.toLocaleString("fi-FI")} so'm × 24 oy
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1.5}
              >
                <Button className="quickBuy">1 klikda xarid qilish</Button>
                <Typography className="heart">
                  <CiHeart />
                </Typography>
              </Stack>
              <ProductTotal id={id}>
                <Button onClick={handleProduct} className="addToCart">
                  Savatga qo‘shish
                </Button>
              </ProductTotal>

              <Box className="stockInfo">
                <Typography>
                  <FaCheck className="stockCheck" /> 46 dona xarid qilish mumkin
                </Typography>
                <Typography>
                  <IoBagCheckOutline className="stockBag" /> Bu haftada 23 kishi
                  sotib oldi
                </Typography>
              </Box>
            </Box>
            <Box className="deliveryInfo">
              <Box className="section">
                <Stack direction="row" alignItems="center">
                  <Typography variant="body1" fontWeight={600} mb={1}>
                    Yetkazib berish 1 kundan boshlab
                  </Typography>
                  <Typography className="badge">Uzum Market ombori</Typography>
                </Stack>
                <Typography>
                  Uzum buyurtmalarni topshirish punktida yoki kuryer orqali
                </Typography>
              </Box>
              <Divider />
              <Box className="section">
                <Typography variant="body1" fontWeight={600} mb={1}>
                  Quay usulda xavfsiz to‘lov
                </Typography>
                <Typography>
                  Karta orqali, naqd pulda yoki bo‘lib to‘lang
                </Typography>
                <Box className="paymentIcons">
                  <Typography className="icon bank">
                    <CiBank />
                  </Typography>
                  <Typography className="icon nasiya">
                    <CiCreditCard1 />
                  </Typography>
                  <Typography className="icon humo">
                    <TbMoneybag />
                  </Typography>
                  <Typography className="icon cash">
                    <FaMoneyBills />
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box className="section">
                <Typography>Qaytarish oson va tez</Typography>
                <Typography>
                  Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini
                  qaytaramiz. <a href="#">Batafsil</a>
                </Typography>
              </Box>
            </Box>
            <Box className="storeInfo">
              <Stack direction="row" alignItems="center">
                <img src={ProductBrend} alt="NIVEA" className="storeLogo" />
                <Box>
                  <Typography>"NIVEA"</Typography>
                  <Typography className="rating">
                    <FaStar className="ratingIcon" /> {reyting} (35481 baho)
                  </Typography>
                </Box>
              </Stack>
              <Button className="storeButton">Do'konga o‘tish</Button>
            </Box>
          </ProductCostCardStyle>
        </Stack>
        <ProductCarusel title="O'xshash mahsulotlar" />
        <ProductCarusel title="Birga sotib olishadi" />
        <ProductCarusel title="Koʻrilgan mahsulotlar" />
      </ProductInfoStyle>
    </Container>
  );
}

export default ProductInfo;
