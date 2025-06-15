
import { Box, Hidden, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './HeroSec.module.css';

const HeroSec = () => {
  return (
    
    <Stack sx={{justifyContent:'space-evenly', flexDirection: {xs: 'column', lg:'row'}, bgcolor:'#904F3D'}}>
        <Hidden logDown>
            <div className={styles.quote}>Get a free quote</div>
        </Hidden>
        <Stack sx={{ height:'100%' }}>
            <Box sx={{ height:'100%', m:{xs:'0', lg:'168px 0'} }} component="img" alt="Hero" src={`/images/Portfolio Details impostors/HeroImg.svg`} />
        </Stack>
        <Stack sx={{ m: {xs: '20px 5px' , lg:'202px 200px 202px 0px'} }}>
            <Box sx={{ height:'56px', width:'203px'}} component="img" alt="Aota" src={`/images/Portfolio Details impostors/impostors.svg`} />
            <Typography sx={{ fontFamily: 'Teko', fontWeight: '400', color:'white' }} variant='h1' component='h2'>What is IMPOSTORS</Typography>
            <Typography sx={{ m: '10px 0px', color:'white'}} variant='body1' component='body1'>We're Brainging creative co-working to the Metaverse.</Typography>
            <Typography sx={{ m: '10px 0px', color:'white'}} variant='body1' component='body1'>We're Brainging creative co-working to the Metaverse.</Typography>
            <Typography sx={{ m: '10px 0px', color:'white'}} variant='body1' component='body1'>We're Brainging creative co-working to the Metaverse.</Typography>
            <button className={styles.button2} ><Link className="" href="https://impostors.gg/"><a role="button">Explore Site</a></Link></button>
        </Stack>  
    </Stack>

  )
}

export default HeroSec;