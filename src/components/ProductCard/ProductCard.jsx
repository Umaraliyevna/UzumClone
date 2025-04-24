import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FaStar } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import PATHS from "src/routes/routePath";
import { showProductInfo } from "src/redux/sliceRedux/productInfo";
import { addToFavouriteProduct } from "src/redux/sliceRedux/favouriteProduct";

import { ProductCardStyle, ProductInfo } from "./ProductCard.style";

function ProductCard({
  id,
  image,
  title,
  reyting,
  perMonthSum,
  changedSum,
  realSum,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const handleProductClick = useCallback(() => {
    dispatch(
      showProductInfo({
        id,
        image,
        title,
        reyting,
        perMonthSum,
        changedSum,
        realSum,
        isFavorite,
      })
    );
  }, []);

  const handleFavourite = useCallback(() => {
    setIsFavorite(!isFavorite);
    dispatch(addToFavouriteProduct(id));
  }, [isFavorite]);

  return (
    <ProductCardStyle>
      <IconButton onClick={handleFavourite} className="productHeartButton">
        {!isFavorite ? (
          <FavoriteBorderIcon className="productHeart" />
        ) : (
          <FavoriteIcon className="activeHeart" />
        )}
      </IconButton>
      <Link
        className="productLink"
        to={`${PATHS.productInfo}/${id}`}
        onClick={handleProductClick}
      >
        <Box>
          <img src={image} alt={title} />
          <Typography variant="body2" className="productText">
            Super narx
          </Typography>
        </Box>

        <ProductInfo>
          <Typography variant="body2" className="productInfoDescription">
            {title}
          </Typography>

          <Stack direction="row" alignItems="center" mb={1}>
            <FaStar id="productStar" />
            <Typography variant="body2" color="rgba(0, 0, 0, 0.51)" ml={0.5}>
              {reyting} (10 sharhlar)
            </Typography>
          </Stack>

          <Typography className="permonthSumma" mb={2}>
            {perMonthSum?.toLocaleString("fi-FI")} so'm oyiga
          </Typography>

          <Box className="price-bag-container">
            <Box>
              <Typography className="changedSumma">
                {changedSum?.toLocaleString("fi-FI")}
              </Typography>
              <Typography className="realSumma">
                {realSum?.toLocaleString("fi-FI")}
              </Typography>
            </Box>
            <IoBagAddOutline className="bag" />
          </Box>
        </ProductInfo>
      </Link>
    </ProductCardStyle>
  );
}

export default ProductCard;
