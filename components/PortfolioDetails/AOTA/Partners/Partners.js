// import React from 'react';
// import { Box, Stack, Paper, Typography, Button } from '@mui/material';

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

import React from "react";
import styles from "../../../../styles/Home.module.css";

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
    },
  ];

  return (
    <div className={styles.featuredOn}>
      <h3>AOTA Partners</h3>
      <div className="container p-5">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 ${styles.featuredOnLogo}`}>
          {featuredData.map((details, i) => {
            return (
              <div key={details.id} className={styles.featuredCard}>
                <img src={details.img} alt="" />
              </div>
            );
          })}
        </div>
        <div className={`grid grid-cols-1 md:hidden gap-2 ${styles.featuredOnMobile}`}>
          <div className="overflow-x-auto flex gap-5">
            {featuredData.map((details) => (
              <div key={details.id} className="flex-shrink-0">
                <img src={details.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
