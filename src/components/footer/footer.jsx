import React from "react";

import { FaFacebookF } from "react-icons/fa6";
import { Box, Container, Stack, Typography } from "@mui/material";
import { RiGooglePlayLine, RiTelegram2Fill } from "react-icons/ri";
import { FaApple, FaInstagramSquare, FaYoutube } from "react-icons/fa";

import { FooterStyle } from "./Footer.style";

function Footer() {
  return (
    <Container maxWidth="lg" disableGutters sx={{ px: 2 }}>
      <FooterStyle>
        <Stack
          direction={{ sm: "column", md: "row", lg: "row" }}
          gap={{ xs: 2, sm: 4, md: 6, lg: 7 }}
          className="footerInfo"
          flexWrap="wrap"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={{ xs: 1, sm: 4, md: 9, lg: 10 }}
            sx={{ width: "fit-content", mx: "auto" }}
          >
            <Box p={1.5}>
              <Typography
                className="footerInfoTitle"
                variant={{ lg: "h4", md: "h6" }}
              >
                Biz haqimizda
              </Typography>
              <Typography pt={2} variant="body1">
                Topshirish punktlari
              </Typography>
              <Typography pt={2} variant="body1">
                Vakansiyalar
              </Typography>
            </Box>
            <Box p={1.5}>
              <Typography
                className="footerInfoTitle"
                variant={{ lg: "h4", md: "h6" }}
              >
                Foydalanuvchilarga
              </Typography>
              <Typography pt={2} variant="body1">
                Biz bilan bog'lanish
              </Typography>
              <Typography pt={2} variant="body1">
                Savol-javob
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={{ xs: 1, sm: 4, md: 9, lg: 10 }}
            sx={{ width: "fit-content", mx: "auto" }}
          >
            <Box p={1.5}>
              <Typography
                className="footerInfoTitle"
                variant={{ lg: "h4", md: "h6" }}
              >
                Tadbirkorlarga
              </Typography>
              <Typography pt={2} variant="body1">
                Uzumda soting
              </Typography>
              <Typography pt={2} variant="body1">
                Sotuvchi kabinetiga kirish
              </Typography>
              <Typography pt={2} variant="body1">
                Topshirish punktini ochish
              </Typography>
            </Box>
            <Box p={1.5}>
              <Typography
                className="footerInfoTitle"
                pt={1.5}
                mb={1.2}
                variant={{ lg: "h4", md: "h6" }}
              >
                Ilovani yuklab olish
              </Typography>
              <Stack
                direction={{ md: "column", lg: "row" }}
                alignItems="center"
                spacing={2}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  pr={{ xs: 0, sm: 2 }}
                  pb={{ xs: 1, sm: 0 }}
                >
                  <FaApple className="footerIcon" />
                  <Typography variant="body1" fontWeight={600} pt={0}>
                    AppStore
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <RiGooglePlayLine className="footerIcon" />
                  <Typography variant="body1" fontWeight={600} pt={0}>
                    Google Play
                  </Typography>
                </Stack>
              </Stack>

              <Typography variant="body1" pt={2}>
                Uzum ijtimoiy tarmoqlarda
              </Typography>
              <Box sx={{ pt: 2 }}>
                <FaInstagramSquare className="footerIcon instagramm" />
                <RiTelegram2Fill className="footerIcon telegramm" />
                <FaFacebookF className="footerIcon facebook" />
                <FaYoutube className="footerIcon youtube" />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </FooterStyle>
    </Container>
  );
}

export default Footer;
