import React from "react";
import Products from "../../components/products/Products";
import ProductCarusel from "../../components/products/productCarusel/ProductCarusel";
import HomeCarusel from "../../components/homeCarusel/HomeCarusel";

function Home() {
  return (
    <div>
      <HomeCarusel />
      <Products title="Mashhurlar" count={10} />
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
