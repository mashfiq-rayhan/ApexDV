import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './ViewDesign.module.css';




const ViewDesign = () => {
  return (
    <Stack sx={{justifyContent:'space-around', flexDirection: {xs: 'column', lg:'row'}}}>
        <div className={styles.green_abstract_right} ></div>
        <div className={styles.green_abstract_left} ></div>
        <Stack sx={{ m: {xs: '10px 5px' , lg:'202px 150px'}}}>
            <Typography sx={{ fontFamily: 'Teko', fontWeight: '400' }} variant='h2' component='h2'>Impostors Responsive Design</Typography>
            <Typography sx={{ m: '20px 0px'}} variant='h5' component='h3'>We're Brainging creative co-working to the Metaverse.</Typography>
            <button className={styles.button2} ><Link className="" href="https://impostors.gg/"><a role="button">Explore Site</a></Link></button>
        </Stack>
        <Stack sx={{height:'100%'}}>
            <Box sx={{ height: {xs:'100%',lg:'736px'},ml:{xs:'0', lg:'100px'}, p:'40px' }}component="img" alt="impostors" src={`/images/Portfolio Details impostors/impostorsWeb.svg`} />
        </Stack>
        
    </Stack>
  )
}

export default ViewDesign;