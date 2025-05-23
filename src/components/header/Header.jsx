import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Stack,
  InputBase,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { CiHeart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { RiArchiveStackLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";

import LoginForm from "src/components";
import PATHS from "src/routes/routePath";
import logo from "src/assets/headerImages/image.png";
import check from "src/assets/headerImages/_vyg.png";
import flag from "src/assets/headerImages/header.png";
import star from "src/assets/headerImages/Topsales.png";

import { HeaderStyle, HeaderPartStyle } from "./Header.style";

const emails = ["username@gmail.com", "user02@gmail.com"];

function Header() {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const basketItems = useSelector((store) => store.basket);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleLogin = (username, password) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setUser({ username, password });
  };

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedPassword) {
      setUser({ username: savedUsername, password: savedPassword });
    }
  }, []);

  const openFavouritePage = useCallback(() => {
    navigate(`${PATHS.favourite}`);
  }, []);

  return (
    <HeaderStyle>
      <Box className="headerWrapper">
        <Container maxWidth="lg" disableGutters>
          <Stack direction="row" justifyContent="space-between">
            <List className="headerList">
              <ListItem className="headerListItem" id="location">
                <SlLocationPin />
              </ListItem>
              <ListItem className="headerListItem">Toshkent</ListItem>
              <ListItem className="headerListItem">
                Topshirish punktlari
              </ListItem>
            </List>
            <List className="headerList">
              <ListItem className="headerListItem">Sotuvchi bo'lish</ListItem>
              <ListItem className="headerListItem">|</ListItem>
              <ListItem className="headerListItem">
                Topshirish punktini ochish
              </ListItem>
              <ListItem className="headerListItem">Savol javob</ListItem>
              <ListItem className="headerListItem">Buyurtmalarim</ListItem>
              <ListItem className="headerListItem">
                <img className="headerFlag" src={flag} alt="uzb flag" />
              </ListItem>
              <ListItem className="headerListItem">o'zbekcha</ListItem>
            </List>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg" disableGutters>
        <HeaderPartStyle>
          <List className="mainList">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              pr={2}
            >
              <Stack direction="row" alignItems="center">
                <ListItem className="mainListItem">
                  <img className="homeLogo" src={logo} alt="" />
                </ListItem>
                <Link to={"/"} className="link">
                  <ListItem className="homeTitle mainListItem">
                    uzum market
                  </ListItem>
                  <Typography
                    variant="body2"
                    color="#484747ae"
                    className="downloadMessage"
                  >
                    Ilovani yuklab olish
                  </Typography>
                </Link>
              </Stack>
              <Button variant="contained" className="downloadBtn" color="info">
                Yuklab olish
              </Button>
            </Stack>
            <Link to={"/"} className="link">
              <ListItem className="mainListItem listItemCatalog">
                <Button className="homeBtn flex">
                  <RiArchiveStackLine className="catalogIcon" />
                  <Typography className="catalogTitle">Katalog</Typography>
                </Button>
              </ListItem>
            </Link>
            <ListItem className="flex mainListItem">
              <Box
                sx={{
                  position: "relative",
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "480px",
                    lg: "500px",
                  },
                  mx: "auto",
                }}
              >
                <InputBase
                  placeholder="Mahsulotlar va turkumlar izlash"
                  fullWidth
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    pl: 2,
                    pr: 6, // tugma uchun joy
                    py: 1,
                  }}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 2,
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "#f1f2f4",
                    borderRadius: 1,
                    padding: "12px",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </ListItem>
            <ListItem className="flex homeActions mainListItem">
              <Button onClick={handleClickOpen}>
                <IoPersonOutline className="homeActionsIcon" />
                <Typography variant="body2" ml={0.6}>
                  Kirish
                </Typography>
                <LoginForm
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  onLogin={handleLogin}
                />
              </Button>
            </ListItem>
            <ListItem className="flex homeActions mainListItem">
              <Button onClick={openFavouritePage} color="#333333">
                <CiHeart className="homeActionsIcon" />

                <Typography variant="body2" ml={0.6}>
                  Saralangan
                </Typography>
              </Button>
            </ListItem>
            <Link to={`/basket`}>
              <Button className="basket">
                <ListItem className="flex homeActions mainListItem">
                  <MdOutlineShoppingBag className="homeActionsIcon" />

                  <Typography variant="body2" ml={0.6}>
                    Savat
                  </Typography>
                  <button className="takedItems">{basketItems.length}</button>
                </ListItem>
              </Button>
            </Link>
          </List>
          <List className="homeItems">
            <ListItem className="flex homeProducts">
              <img src={star} alt="topsales" />
              <Typography variant="body2">Hafta tovarlari</Typography>
            </ListItem>
            <ListItem className="flex homeProducts">
              <img src={check} alt="checkList" />
              <Typography variant="body2">Har kuni foyda</Typography>
            </ListItem>
            <ListItem className="homeProducts">Elektronika</ListItem>
            <ListItem className="homeProducts">Maishiy texnika</ListItem>
            <ListItem className="homeProducts">Kiyim</ListItem>
            <ListItem className="homeProducts">Poyabzallar</ListItem>
            <ListItem className="homeProducts">Aksessuarlar</ListItem>
            <ListItem className="homeProducts">
              Go'zallik va parvarish{" "}
            </ListItem>
            <ListItem className="homeProducts">Salomatlik</ListItem>
            <ListItem className="homeProducts">
              Yana <FaAngleDown />
            </ListItem>
          </List>
        </HeaderPartStyle>
      </Container>
    </HeaderStyle>
  );
}

export default Header;
