import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

export interface IProduct {
  title: string;
  // description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

interface IProductItemsProps {
  label: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

export const money = (_m: number): string => {
  return _m.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

const MoneyColor = styled("span")`
  color: #fe4960;
`;

const OriginalPrice = styled("span")`
  margin-left: 5px;
  text-decoration: line-through;
  color: "#333";
  font-size: 0.8em;
`;

export function ProductItems(props: IProductItemsProps) {
  const { label, thumbnail, price, rating, stock, discountPercentage } = props;
  const discountedPrice = Math.ceil(price * ((100 - discountPercentage) / 100));
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography noWrap gutterBottom variant="h6" component="div">
            {label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <MoneyColor>฿{money(discountedPrice)}</MoneyColor>
            <OriginalPrice>฿{money(price)}</OriginalPrice>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <StarRateIcon
              fontSize="small"
              sx={{ color: "#FFC83C", verticalAlign: "middle" }}
            />{" "}
            {rating} ({stock})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

async function getProducts(limit: number = 20) {
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

export default function Products() {
  const theme = useTheme();
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [hasMore, setHasMore] = useState(
  //   useMediaQuery(theme.breakpoints.down("sm"))
  //   );
  const hasMore = useMediaQuery(theme.breakpoints.down("sm"));

  async function getMoreProducts() {
    const _products = await getProducts();
    setProducts((prev) => [...prev, ..._products]);
  }

  useEffect(() => {
    async function init() {
      setProducts(await getProducts());
    }
    init();
  }, []);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={() => {
        getMoreProducts();
      }}
      hasMore={hasMore}
      loader={
        <div style={{ textAlign: "center" }}>
          <Loading />
        </div>
      }
      // endMessage={
      //   <p style={{ textAlign: "center" }}>
      //     <b>หมดแล้วครับ</b>
      //   </p>
      // }
    >
      <Grid container spacing={1}>
        {products.length > 0 &&
          products.map((elem, index) => (
            <Grid item xs={6} sm={4} md={3} key={`product-${index}`}>
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
        {products.length > 0 && !hasMore && (
          <Grid item xs={12} textAlign="center">
            <Button
              onClick={getMoreProducts}
              variant="outlined"
              sx={{ pl: 8, pr: 8, mt: 3 }}
            >
              โหลดเพิ่มเติม
            </Button>
          </Grid>
        )}
      </Grid>
    </InfiniteScroll>
  );
}
