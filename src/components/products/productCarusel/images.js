const ImagesLink = [
  "https://images.uzum.uz/cmp5glhs99ouqbfrtofg/t_product_540_high.jpg",
  "https://images.uzum.uz/cjg6j2kjvf2okn6uoosg/t_product_540_high.jpg",
  "https://images.uzum.uz/cuvdgsrvgbkm5ehgvd9g/t_product_540_high.jpg",
  "https://images.uzum.uz/crkkrg43t0q1s5n3vglg/t_product_540_high.jpg",
  "https://images.uzum.uz/ctvp5mui4n324lr36bkg/t_product_540_high.jpg",
  "https://images.uzum.uz/cv7b63ui4n36ls3u0e40/t_product_540_high.jpg",
  "https://images.uzum.uz/cuhmf86i4n324lr8d94g/t_product_540_high.jpg",
  "https://images.uzum.uz/cpokn1r5qt1gj8dbvj60/t_product_540_high.jpg",
  "https://images.uzum.uz/cunfmodht56sc95epme0/t_product_540_high.jpg",
  "https://images.uzum.uz/ctjqtrmi4n368aacu6k0/t_product_540_high.jpg",
  "https://images.uzum.uz/ctjqtrmi4n368aacu6k0/t_product_540_high.jpg",
  "https://images.uzum.uz/ctuc0jei4n324lr2olig/t_product_540_high.jpg",
  "https://images.uzum.uz/cjdpjk4jvf2trp6s3iug/t_product_540_high.jpg",
  "https://images.uzum.uz/co9drk72u18gghcnl4pg/t_product_540_high.jpg",
  "https://images.uzum.uz/csurj73vgbkpg1nnbbrg/t_product_540_high.jpg",
  "https://images.uzum.uz/ctn9e65ht56qpot91chg/t_product_540_high.jpg",
  "https://images.uzum.uz/cudj9pk5j42bjc4bb0d0/t_product_540_high.jpg",
  "https://images.uzum.uz/cum3jntht56sc95ebckg/t_product_540_high.jpg",
  "https://images.uzum.uz/csk670lpq3ghb2qmngug/t_product_540_high.jpg",
  "https://images.uzum.uz/ciij5tb6edfostiid5pg/t_product_540_high.jpg",
  "https://images.uzum.uz/crkkrg43t0q1s5n3vglg/t_product_540_high.jpg",
  "https://images.uzum.uz/cpokn1r5qt1gj8dbvj60/t_product_540_high.jpg",
  "https://images.uzum.uz/cpokn1r5qt1gj8dbvj60/t_product_540_high.jpg",
  "https://images.uzum.uz/crog12ijot51rkb2i6q0/t_product_540_high.jpg",
  "https://images.uzum.uz/crg4c3k2gps3jqbg1r0g/t_product_540_high.jpg",
  "https://images.uzum.uz/csi81bdpq3ghb2qm6v4g/t_product_540_high.jpg",
  "https://images.uzum.uz/cq75n1niraaj97sj5h4g/t_product_540_high.jpg",
  "https://images.uzum.uz/cpg51te0t1llbtq5ijig/t_product_540_high.jpg",
  "https://images.uzum.uz/cpq1vcr6eisq2rkct080/t_product_540_high.jpg",
  "https://images.uzum.uz/cij5ghb6edfostiiervg/t_product_540_high.jpg",
  "https://images.uzum.uz/cfivcq925kualhm88l20/t_product_540_high.jpg",
  "https://images.uzum.uz/ckajdmjk9fq1var6r7b0/t_product_540_high.jpg",
  "https://images.uzum.uz/cetu1vqvtie1lhbghe7g/t_product_540_high.jpg",
  "https://images.uzum.uz/cetu1vqvtie1lhbghe7g/t_product_540_high.jpg",
  "https://images.uzum.uz/cetu29gv1htd23aki8og/t_product_540_high.jpg",
  "https://images.uzum.uz/cc7i2nmha88ep89kqg0g/t_product_540_high.jpg",
  "https://images.uzum.uz/cc7i2nmha88ep89kqg0g/t_product_540_high.jpg",
  "https://images.uzum.uz/cfdjthqvtie1t76733k0/t_product_540_high.jpg",
  "https://images.uzum.uz/cc7i69eha88ep89kqhr0/t_product_540_high.jpg",
  "https://images.uzum.uz/cojjhtf0sttt9lm4o3b0/t_product_540_high.jpg",
  "https://images.uzum.uz/cij5ghb6edfostiiervg/t_product_540_high.jpg",
  "https://images.uzum.uz/ckajdmjk9fq1var6r7b0/t_product_540_high.jpg",
  "https://images.uzum.uz/ckajdmjk9fq1var6r7b0/t_product_540_high.jpg",
  "https://images.uzum.uz/cetu1vqvtie1lhbghe7g/t_product_540_high.jpg",
  "https://images.uzum.uz/crokh9mvip07shn5qbg0/t_product_540_high.jpg",
  "https://images.uzum.uz/csmfvatpq3ggq63c13p0/t_product_540_high.jpg",
  "https://images.uzum.uz/csmfvatpq3ggq63c13p0/t_product_540_high.jpg",
  "https://images.uzum.uz/cetu29gv1htd23aki8og/t_product_540_high.jpg",
  "https://images.uzum.uz/cc7i2nmha88ep89kqg0g/t_product_540_high.jpg",
  "https://images.uzum.uz/cfdjthqvtie1t76733k0/t_product_540_high.jpg",
];

function getUrl() {
  const imgUlr = ImagesLink[Math.floor(Math.random() * ImagesLink.length)];
  return imgUlr;
}

export default getUrl;
