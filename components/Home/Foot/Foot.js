import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';


const Foot = () => {
    return (
        <div className="container p-5">
            <Stack sx={{ justifyContent: 'space-between', mt: '20px', flexDirection: { xs: 'column', md: 'row', } }}>
                <Stack sx={{ justifyContent: 'space-between' }} >
                    <Typography sx={{ color: '#49BF9C' }} variant='body1'>Like what you see?</Typography>
                    <Typography sx={{ color: '#1CAF83', fontFamily: 'Teko' }} variant='h2'>Say Hello</Typography>
                    <Divider sx={{ m: '20px 0', bgcolor: '#49BF9C', borderBottomWidth: { xs: '3px', lg: '5px' }, width: { xs: '100%', md: '300px', lg: '400px' } }} />
                    {/* <Stack sx={{ flexDirection:'row', width:{xs:'250px',sm:'400px'}, alignSelf:{xs:'center', sm:'flex-start'}}}>
                <Typography sx={{color:'#49BF9C', mt:'20px', mr: {xs:'10px', lg: '40px'}, fontSize:{xs:'15px'} }} variant='body1'>USA</Typography>
                <Typography sx={{color:'#49BF9C', mt:'20px', mr: {xs:'10px', lg: '40px'}, fontSize:{xs:'15px'} }} variant='body1'>BD Office</Typography>
                <Typography sx={{color:'#49BF9C', mt:'20px', mr: {xs:'10px', lg: '40px'}, fontSize:{xs:'15px'} }} variant='body1'>info@apexdv.com</Typography>
            </Stack> */}
                </Stack>
                <Stack sx={{ pr: { xs: '0px', lg: '10px' }, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }}>
                    <a href="https://www.facebook.com/apexdvltd">
                        <Box sx={{ m: '16px', height: { xs: '30px', sm: '50px' }, width: { xs: '30px', sm: '50px' } }} component="img" alt="facebook" src="/images/LandingPage/Foot/facebook.svg" />
                    </a>
                    <a href="https://twitter.com/apexdv_nft"> <Box sx={{ m: '16px', height: { xs: '30px', sm: '50px' }, width: { xs: '30px', sm: '50px' } }} component="img" alt="twitter" src="/images/LandingPage/Foot/twitter.svg" /></a>
                    <a href="https://www.linkedin.com/company/apexdv/ "> <Box sx={{ m: '16px', height: { xs: '30px', sm: '50px' }, width: { xs: '30px', sm: '50px' } }} component="img" alt="linkedin" src="/images/LandingPage/Foot/linkedin.svg" /></a>
                    <a href=" https://www.instagram.com/accounts/login/?next=/apexdv.nft/">
                        <Box sx={{ m: '16px', height: { xs: '30px', sm: '50px' }, width: { xs: '30px', sm: '50px' } }} component="img" alt="instagram" src="/images/LandingPage/Foot/instagram.svg" />
                    </a>
                </Stack>
            </Stack>
        </div>
    )
}

export default Foot;