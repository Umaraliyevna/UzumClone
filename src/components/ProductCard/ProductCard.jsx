import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import PATHS from "src/routes/routePath";
import { ProductCardStyle, ProductInfo } from "./ProductCard.style";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { showProductInfo } from "src/redux/sliceRedux/productInfo";

function ProductCard({
  id,
  image,
  title,
  reyting,
  perMonthSum,
  changedSum,
  realSum,
}) {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(
      showProductInfo({
        id,
        image,
        title,
        reyting,
        perMonthSum,
        changedSum,
        realSum,
      })
    );
  };

  const handleFavourite = useCallback(() => {
    console.log("fdjsnjkfn");
  }, []);

  return (
    <ProductCardStyle>
      <IconButton>
        <CiHeart className="productHeart" onClick={handleFavourite} />
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
            {perMonthSum.toLocaleString("fi-FI")} so'm oyiga
          </Typography>

          <Box className="price-bag-container">
            <Box>
              <Typography className="changedSumma">
                {changedSum.toLocaleString("fi-FI")}
              </Typography>
              <Typography className="realSumma">
                {realSum.toLocaleString("fi-FI")}
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
