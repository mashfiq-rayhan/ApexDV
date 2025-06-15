
import { Box, Hidden, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './HeroSec.module.css';

const HeroSec = () => {
  return (
    
    <Stack sx={{justifyContent:'space-around', flexDirection: {xs: 'column', lg:'row'}, bgcolor:'#0A1D0F'}}>
        <Hidden logDown>
            <div className={styles.quote}>Get a free quote</div>
        </Hidden>
        <Stack sx={{ m: {xs: '10px 5px' , lg:'202px 150px'}}}>
            <Box sx={{ height:'56px', width:'203px'}} component="img" alt="Aota" src={`/images/Portfolio Details AOTA/Aota.svg`} />
            <Typography sx={{ fontFamily: 'Teko', fontWeight: '400', fontSize:{xs:'32px',md:'64px'}, lineHeight:{xs:'40px',md:'64px'}, color: 'white' }} variant='h1' component='h2'>We're Aliens on the eve</Typography>
            <Typography sx={{ m: '20px 0px', color:'white'}} variant='h5' component='h3'>We're Brainging creative co-working to the Metaverse.</Typography>
            <button className={styles.button2} ><Link className="" href="https://www.aliensontheave.com/"><a role="button">Explore Site</a></Link></button>
        </Stack>
        <Stack sx={{height:'100%'}}>
            <Box sx={{ height: {xs:'100%',lg:'736px'},mr:{xs:'0', lg:'100px'} }}component="img" alt="Hero" src={`/images/Portfolio Details AOTA/HeroImg.svg`} />
        </Stack>
    </Stack>

  )
}

export default HeroSec;