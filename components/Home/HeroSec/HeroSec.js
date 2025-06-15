import { Box, Grid, Hidden, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './HeroSec.module.css';
import HeroImg from '../../../public/images/LandingPage/HeroSec/HeroSec.svg';



const HeroSec = () => {
  return (
    <div className="container p-5">
    <Grid container spacing={2} >
      <div className={styles.green_abstract_right}></div>
      <div className={styles.green_abstract_left}></div>
      <Grid item xs={12} md={6} lg={6} sx={{ m: {xs: '10px 5px' ,lg:'150px 0px'}, maxWidth:'900px'}}>
         <Typography sx={{ fontFamily: 'Teko', fontWeight: '400', fontSize:{xs:'32px',md:'64px'}, lineHeight:{xs:'40px',md:'64px'} }} variant='h1' component='h1'>A 360 Degree Solution for your NFT Business.</Typography>
         <Typography sx={{ m: '20px 0 10px 0', maxWidth:"500px", fontFamily: 'Rubik', fontWeight: '400', fontSize:'18px', lineHeight:'28px'}} variant='h5' component='h5'>ApexDv is a software design and engineering partner that helps you build successful tech products.</Typography>
         <Stack spacing={5} direction='row' sx={{width:{xs:'300px',sm:'100%'} }}>
           <button className={styles.button1}> <a href="#contactUs"> Get Started </a></button>
           <button className={styles.button2} >
            <Link className="" href="/portfolio">
              <a role="button">View Our Portfolio</a>
            </Link>
          </button>
        </Stack>
        <Typography sx={{ color: '#BDBDBF', mt: '100px' }}>Trusted By</Typography>
        <Stack sx={{ flexDirection: { xs: 'row', md: 'row' }, overflow: { xs: 'hidden', sm: 'visible' } }}>
          <Box sx={{ m: '25px 20px', opacity: 0.5 }} component="img" alt="coinzoom" src="/images/LandingPage/HeroSecLogo/coinzoom.svg" />
          <Box sx={{ m: '25px 20px', opacity: 0.5 }} component="img" alt="coinzoom" src="/images/LandingPage/HeroSecLogo/luna.svg" />
          <Box sx={{ m: '25px 20px', opacity: 0.5 }} component="img" alt="coinzoom" src="/images/LandingPage/HeroSecLogo/blocknative.svg" />
          <Box sx={{ m: '25px 20px', opacity: 0.5 }} component="img" alt="coinzoom" src="/images/LandingPage/HeroSecLogo/enjin.svg" />
        </Stack>
      </Grid> 
      <Hidden lgDown>
      <Grid item xs={12} md={6} lg={6} sx={{ m: {xs: '10px 5px' ,lg:'150px 0px'}}} >
        <Image src={HeroImg} alt='Hero Section Image' />
      </Grid>
      </Hidden>
    </Grid>
    </div>
  )
}

export default HeroSec;