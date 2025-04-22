import ProductInfo from "../pages/ProductInfo/ProductInfo";
import Home from "../pages/Home/Home";
import Basket from "../pages/basket/Basket";
import PATHS from "./routePath";

export const PUBLIC_ROUTES = [
  {
    key: "ProductInfo",
    element: <ProductInfo />,
    path: `${PATHS.productInfo}/:id`,
  },
  {
    key: "Home",
    element: <Home />,
    path: PATHS.home,
  },
  {
    key: "Basket",
    element: <Basket />,
    path: PATHS.basket,
  },
];
