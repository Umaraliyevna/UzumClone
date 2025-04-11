import "./App.css";
import "./components/main.css";
import { Routes, Route } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Page_404 from "./pages/Page_404/Page_404";
import { Public_routes } from "./routes/index";
import { useState } from "react";
import Hero from "./components/home/Hero";
import { AppContext } from "./context";

function App() {
  const [basket_product, setBasket_product] = useState([]);
  const [savedProductCount, setSavedProductCount] = useState(0);
  const [amountProduct, setAmountProduct] = useState(1);

  const handle_product = (id) => {
    setBasket_product((prev) => [...prev, id]);
  };

  const countSaved = () => {
    setSavedProductCount(savedProductCount + 1);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          basket_product,
          handle_product,
          savedProductCount,
          countSaved,
          amountProduct,
          setAmountProduct,
        }}
      >
        <Header />
        <Hero />
        <Routes>
          {Public_routes.map(({ key, element, path }) => {
            return <Route key={key} element={element} path={path} />;
          })}
          <Route element={<Page_404 />} path="*" />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
