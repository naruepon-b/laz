import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ads1 from "../images/adsBanner/egiftcard.jpg";
import ads2 from "../images/adsBanner/city.jpg";
import ads3 from "../images/adsBanner/icbc.png";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar/Avatar";
import FlagIcon from "@mui/icons-material/Flag";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import blueGrey from "@mui/material/colors/blueGrey";

const adsBanner = [ads1, ads2, ads3];
const support = [
  "ศูนย์ช่วยเหลือ",
  "การสั่งซื้อสินค้า",
  "การส่งสินค้า",
  "นโยบายของสินค้าต่างประเทศ",
  "การคืนสินค้า",
  "ติดต่อเรา",
];
const others = [
  "ประเภท",
  "เกี่ยวกับลาซาด้า",
  "ร่วมงานกับเรา",
  "ข้อตกลงและเงื่อนไข",
  "นโยบายความเป็นส่วนตัว",
  "ข่าวประชาสัมพันธ์",
  "ความปลอดภัยกับลาซาด้า",
  "สินค้ายอดนิยม",
];

export default function Footer() {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Box>
        <Container maxWidth="lg">
          <hr />
          <Grid container spacing={1} sx={{ pt: 2 }}>
            {adsBanner.map((elem, index) => (
              <Grid item sm={6} md={4} key={`ads-${index}`}>
                <img alt="ads" src={elem} style={{ width: "100%" }} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={1} sx={{ pt: 2, pb: 2 }}>
            <Grid item sm={6} md={4} lg={3}>
              ศูนย์ดูแลลูกค้า
              {support.map((elem, index) => (
                <Button
                  key={`support-${index}`}
                  size="small"
                  sx={{ display: "block", pb: 0, pt: 0 }}
                >
                  {elem}
                </Button>
              ))}
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              ลาซาด้า
              {others.map((elem, index) => (
                <Button
                  key={`other-${index}`}
                  size="small"
                  sx={{ display: "block", pb: 0, pt: 0 }}
                >
                  {elem}
                </Button>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={6}>
              Download App
              <Skeleton
                variant="rounded"
                width="100%"
                sx={{ minHeight: 200 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#fff", pt: 2, pb: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              วิธีการชำระเงิน
              <Stack spacing={1} direction="row">
                {Array(4)
                  .fill(0)
                  .map((_t, index) => (
                    <Skeleton
                      key={`payment-${index}`}
                      variant="rounded"
                      width={100}
                      height={60}
                      sx={{ display: "inline-block" }}
                    />
                  ))}
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              Delivery Services
              <Stack spacing={1}>
                {Array(3)
                  .fill(0)
                  .map((_t, index) => (
                    <Stack key={`drow-${index}`} spacing={1} direction="row">
                      {Array(4)
                        .fill(0)
                        .map((_t, index) => (
                          <Skeleton
                            key={`delivery-${index}`}
                            variant="rounded"
                            width={100}
                            height={60}
                            sx={{ display: "inline-block" }}
                          />
                        ))}
                    </Stack>
                  ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ pt: 2, pb: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            {Array(4)
              .fill(0)
              .map((_t, index) => (
                <Grid key={`text-${index}`} item xs={12} sm={6} md={3}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque eaque sit exercitationem neque nostrum voluptatum error
                  fuga dignissimos, esse obcaecati possimus similique sequi
                  commodi impedit quasi voluptatem quibusdam! Cupiditate error
                  eum accusamus dicta quo. Doloremque, necessitatibus
                  consectetur sit libero deleniti deserunt perferendis tempora
                  provident quae. Corrupti unde cumque et omnis, praesentium
                  aliquam voluptates at porro sapiente vel dolores magnam
                  molestiae obcaecati labore voluptas optio veritatis earum
                  tenetur maiores, pariatur maxime ducimus voluptatibus! Nisi
                  veniam provident hic fugit quam officia ea.
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#fff", pt: 4, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} md={5}>
              Laz Southeast Asia
              <Stack spacing={1} direction="row">
                {Array(6)
                  .fill(0)
                  .map((_t, index) => (
                    <Avatar
                      key={`flag-${index}`}
                      sx={{ border: `2px solid ${blueGrey[400]}` }}
                    >
                      <FlagIcon />
                    </Avatar>
                  ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              Follow Us
              <Stack spacing={1} direction="row">
                {Array(6)
                  .fill(0)
                  .map((_t, index) => (
                    <Avatar
                      key={`social-${index}`}
                      sx={{
                        border: `2px solid ${blueGrey[400]}`,
                        width: 28,
                        height: 28,
                      }}
                    >
                      <EmojiEmotionsIcon />
                    </Avatar>
                  ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={2}>
              &copy; Laz {new Date().getFullYear()}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
