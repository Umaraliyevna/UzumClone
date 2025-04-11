import ProductInfo from "../pages/product_info/ProductInfo";
import Home from "../pages/home/home";
import Basket from "../pages/basket/basket";
const id = location.search.split("=")[1];
export const Public_routes = [
  {
    key: "ProductInfo",
    element: <ProductInfo />,
    path: `/product-info/:${id}`,
  },
  {
    key: "Home",
    element: <Home />,
    path: "/",
  },
  {
    key: "Basket",
    element: <Basket />,
    path: "/basket",
  },
];
