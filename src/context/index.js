import { createContext } from "react";

export const AppContext = createContext({
  basket_product: [],
  addBasketProduct: () => {},
  removeBasketProduct: () => {},
});
