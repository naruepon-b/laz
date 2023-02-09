import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";

import imgFlashSale from "../images/flashsale.webp";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { IProduct, ProductItems } from "../components/Products";
import Typography from "@mui/material/Typography";

async function getProducts(limit: number = 4) {
  const _res = await fetch(`https://dummyjson.com/products/?limit=${limit}`);
  const _result = await _res.json();
  const _produsts: IProduct[] = [];
  _result.products.forEach((element: any) => {
    _produsts.push({
      title: element.title,
      price: element.price,
      // description: element.description,
      rating: element.rating,
      stock: element.stock,
      thumbnail: element.thumbnail,
      discountPercentage: element.discountPercentage,
    });
  });
  return _produsts;
}

export default function FlashSale() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function init() {
      setProducts(await getProducts());
    }
    init();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Paper elevation={0} sx={{ p: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
            <img
              style={{ height: "4.8vw" }}
              alt="laz flash sale"
              src={imgFlashSale}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography variant="h5" component="h2">
              Flash Sales
            </Typography>
          </Grid>
          {products.length > 0 &&
            products.map((elem, index) => (
              <Grid item xs={6} sm={4} md={3} key={`flash-${index}`}>
                <ProductItems
                  label={elem.title}
                  price={elem.price}
                  thumbnail={elem.thumbnail}
                  rating={elem.rating}
                  stock={elem.stock}
                  discountPercentage={elem.discountPercentage}
                />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Container>
  );
}
