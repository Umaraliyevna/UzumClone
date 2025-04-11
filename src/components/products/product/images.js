const ImagesLink = [
  "https://images.uzum.uz/cmp5glhs99ouqbfrtofg/t_product_540_high.jpg",
  "https://images.uzum.uz/cjg6j2kjvf2okn6uoosg/t_product_540_high.jpg",
  "https://images.uzum.uz/cscv5odpq3ghb2qknd3g/t_product_540_high.jpg",
  "https://images.uzum.uz/cuvdgsrvgbkm5ehgvd9g/t_product_540_high.jpg",
  "https://images.uzum.uz/cuhmf86i4n324lr8d94g/t_product_540_high.jpg",
  "https://images.uzum.uz/cpokn1r5qt1gj8dbvj60/t_product_540_high.jpg",
  "https://images.uzum.uz/cunfmodht56sc95epme0/t_product_540_high.jpg",
  "https://images.uzum.uz/ctjqtrmi4n368aacu6k0/t_product_540_high.jpg",
  "https://images.uzum.uz/ctuc0jei4n324lr2olig/t_product_540_high.jpg",
  "https://images.uzum.uz/cjdpjk4jvf2trp6s3iug/t_product_540_high.jpg",
  "https://images.uzum.uz/co9drk72u18gghcnl4pg/t_product_540_high.jpg",
  "https://images.uzum.uz/csurj73vgbkpg1nnbbrg/t_product_540_high.jpg",
  "https://images.uzum.uz/ctn9e65ht56qpot91chg/t_product_540_high.jpg",
];

function getUrl() {
  const imgUlr = ImagesLink[Math.floor(Math.random() * ImagesLink.length)];
  return imgUlr;
}

export default getUrl;
