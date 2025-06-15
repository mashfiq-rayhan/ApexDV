import { Grid } from "@mui/material";
import React from "react";
import styles from "./FeaturedOn.module.css";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedOn = () => {
  const featuredData = [
    {
      id: 1,
      img: "/images/LandingPage/FeaturedOn/Paritex.svg",
    },
    {
      id: 2,
      img: "/images/LandingPage/FeaturedOn/Aota.svg",
    },
    {
      id: 3,
      img: "/images/LandingPage/FeaturedOn/CoinZoom.svg",
    },
    {
      id: 4,
      img: "/images/LandingPage/FeaturedOn/Luna.svg",
    },
    {
      id: 5,
      img: "/images/LandingPage/FeaturedOn/Blocknative.svg",
    },
    {
      id: 6,
      img: "/images/LandingPage/FeaturedOn/Enjin.svg",
    },
  ];

  return (
    <div className={styles.featuredOn}>
      <h3>Our work is featured on</h3>
      <div className="container p-5">
        <Grid container spacing={2} className={styles.featuredOnMain}>
          <Grid item xs={12} md={12} lg={12} className={styles.featuredOnLogo}>
            {featuredData.map((details, i) => {
              return (
                <div className={styles.featuredCard}>
                  <img src={details.img} alt="" />
                </div>
              );
            })}
          </Grid>
        </Grid>
        <Grid container spacing={2} className={styles.featuredOnMobileMain}>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            className={styles.featuredOnMobile}
          >
            <Swiper
              className="clientReview"
              spaceBetween={30}              
              slidesPerView={1}
              grabCursor={true}
              keyboard={{
                enabled: true,
              }}
              scrollbar={{ draggable: true }}
              autoplay={true}
              speed={100}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            >
              {featuredData.map((details) => (
                <SwiperSlide className={styles.swiperSlide}>
                  <img src={details.img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FeaturedOn;
