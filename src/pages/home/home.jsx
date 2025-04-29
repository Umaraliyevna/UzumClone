import React from "react";

import Slider from "react-slick";
import { Button, Box, Container, Stack, Typography, Grid } from "@mui/material";

import { FaAngleRight } from "react-icons/fa6";

import getImagUrl from "src/mocs/images";
import images from "src/mocs/homeCaruselMoc";
import PRODUCT_LIST from "src/mocs/ProductCard";
import { ProductCard, ProductCarusel } from "src/components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ButtonGroupStyle, HomeCarusel, ProductStyle } from "./home.style";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <HomeCarusel>
        <Container maxWidth="lg">
          <Slider {...settings} autoplay>
            {images.map((img) => (
              <Box>
                <img id="caruselImg" src={img} />
              </Box>
            ))}
          </Slider>
          <ButtonGroupStyle className="buttons__wrapper">
            <Button color="inherit">Ramazon</Button>
            <Button color="inherit">Foyda</Button>
            <Button color="inherit">Zamonaviy Bozor</Button>
            <Button color="inherit">Hafta tovarlari</Button>
          </ButtonGroupStyle>
        </Container>
      </HomeCarusel>

      <ProductStyle>
        <Container maxWidth="lg" sx={{ p: 2 }}>
          <Stack direction="row" alignItems="center" mt={5}>
            <Typography variant="h5" fontWeight={600}>
              Mashhur
            </Typography>
            <FaAngleRight className="titleRightIcon" />
          </Stack>
          <Grid
            spacing={{ xs: 2.5, sm: 3, md: 3, lg: 2.5 }}
            container
            className="productGrid"
            sx={{
              pb: { xs: 2, sm: 0 },
            }}
          >
            {PRODUCT_LIST.map((product, index) => (
              <Grid key={index} size={{ xs: 6, sm: 3.9, md: 3, lg: 2.4 }}>
                <ProductCard image={getImagUrl()} {...product} />
              </Grid>
            ))}
          </Grid>
          <Button className="showAgainBtn">Yana ko'rsatish 10</Button>
        </Container>
      </ProductStyle>
      <ProductCarusel title="Bahoriy chegirmalar" />
      <ProductCarusel title="Har kuni foyda" />
      <ProductCarusel title="Texno sovg'alar" />
      <ProductCarusel title="Zamonaviy yangiliklar" />
      <ProductCarusel title="Goʻzallik va parvarish" />
      <ProductCarusel title="Nivea chegirmalari" />
      <ProductCarusel title="Yosh malikalarga" />
      <ProductCarusel title="Avon'dan chegirmalar" />
      <ProductCarusel title="Premium sovgʻalar" />
      <ProductCarusel title="Garderobni yangilaymiz" />
      <ProductCarusel title="Xiaomi dan chegirmalar" />
      <ProductCarusel title="Ramazon oyi" />
      <ProductCarusel title="Kerasys chegirmalari" />
      <ProductCarusel title="Tozalash va kir yuvish" />
    </div>
  );
}

export default Home;
