// import React from 'react';
// import { Box, Stack, Paper, Typography, Button } from '@mui/material';
// import styles from './Partners.module.css';

// const Partners = () => {

//     const brands1 = ['GivePower', 'OneTree', 'Bike', 'Brangerine'];
//   return (
//     <Stack sx={{ justifyContent: 'space-around', alignItems: 'center', p: '50px 100px 50px 100px', backgroundColor: '#FAFAFA' }}>
//         <div className={styles.green_abstract_right} ></div>
//         <div className={styles.green_abstract_left} ></div>
//         <Typography sx={{p: '30px', fontFamily: 'Rubik', fontWeight: '1000', color:'#1CAF83' }} variant='h2' component='h2'>AOTA Partners</Typography>
//         <Stack sx={{ justifyContent: 'space-around', flexDirection: { xs: 'column', md: 'row' } }}>
//             {brands1.map(brand => <Box key={brand} sx={{p: '30px', m: '0 40px'}}  component="img" alt="coinzoom" src={`/images/Portfolio Details AOTA/${brand}.svg`} />)}
//         </Stack>
//     </Stack>
//   )
// }

// export default Partners;




import { Grid } from "@mui/material";
import React from "react";
import styles from "./Partners.module.css";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const Partners = () => {
  const featuredData = [
    {
      id: 1,
      img: "/images/Portfolio Details AOTA/GivePower.svg",
    },
    {
      id: 2,
      img: "/images/Portfolio Details AOTA/OneTree.svg",
    },
    {
      id: 3,
      img: "/images/Portfolio Details AOTA/Bike.svg",
    },
    {
      id: 4,
      img: "/images/Portfolio Details AOTA/Brangerine.svg",
    }
  ];

  return (
    <div className={styles.featuredOn}>
      <h3>AOTA Partners</h3>
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
              spaceBetween={20}
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

export default Partners;
