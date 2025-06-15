
import React from 'react'
import { Box, Stack, Grid, Typography, Button } from '@mui/material';

const ProjectView = () => {

    const dataView = [['projectDone','1300+','Project Done'],['HappyClients','10505+','Happy Clients'],['Trophy','17+','Award Winner']];
  return (
    <Grid container sx={{ background: '#222429',justifyContent: 'space-around' }}>
        {dataView.map(data => (
            <Stack item sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
                <Box sx={{ height: '64px', width: '64px', background: '#FFFFFF', borderRadius: '6px', m: { xs: '25px', lg: '106px 0px' } }}>
                    <Box sx={{ m: '16px' }} component="img" alt="projectDone" src={`/images/LandingPage/ProjectView/${data[0]}.svg`} />
                </Box>
                <Box>
                    <Typography sx={{ color: 'white', fontSize: '50px', fontFamily: 'Teko', fontWeight: '400', mt: { xs: '15px', lg: '80px' }, ml: { xs: '25px', lg: '30px' } }}>{data[1]}</Typography>
                    <Typography sx={{ color: 'white', fontSize: '25px', fontFamily: 'Teko', ml: { xs: '25px', lg: '30px' } }}>{data[2]}</Typography>
                </Box>
            </Stack>
        ))}
    </Grid>
  )
}

export default ProjectView;

{/* <Stack item sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box sx={{ height: '64px', width: '64px', background: '#FFFFFF', borderRadius: '6px', m: { xs: '25px',lg:'106px 0px'} }}>
                <Box sx={{ m:'16px'}} component="img" alt="projectDone" src="/images/LandingPage/ProjectView/projectDone.svg" />
            </Box>
            <Box>
                <Typography sx={{ color: 'white', fontSize: '50px', fontFamily: 'Teko', fontWeight: '400', mt:{xs:'15px', lg:'80px'}, ml: {xs:'25px', lg:'30px'} }}>1300+</Typography>
                <Typography sx={{ color: 'white', fontSize: '25px', fontFamily: 'Teko', ml:{xs:'25px', lg:'30px'} }}>Project Done</Typography>
            </Box>
        </Stack>
        <Stack item sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box sx={{ height: '64px', width: '64px', background: '#FFFFFF', borderRadius: '6px', m: { xs: '25px',lg:'106px 0px'} }}>
                <Box sx={{ m:'16px'}} component="img" alt="projectDone" src="/images/LandingPage/ProjectView/HappyClients.svg" />
            </Box>
            <Box>
                <Typography sx={{ color: 'white', fontSize: '50px', fontFamily: 'Teko', fontWeight: '400', mt:{xs:'15px', lg:'80px'}, ml: {xs:'25px', lg:'30px'} }}>10505+</Typography>
                <Typography sx={{ color: 'white', fontSize: '25px', fontFamily: 'Teko', ml:{xs:'25px', lg:'30px'} }}>Happy Clients</Typography>
            </Box>
        </Stack>
        <Stack item sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box sx={{ height: '64px', width: '64px', background: '#FFFFFF', borderRadius: '6px', m: { xs: '25px',lg:'106px 0px'} }}>
                <Box sx={{ m:'16px'}} component="img" alt="projectDone" src="/images/LandingPage/ProjectView/Trophy.svg" />
            </Box>
            <Box>
                <Typography sx={{ color: 'white', fontSize: '50px', fontFamily: 'Teko', fontWeight: '400', mt:{xs:'15px', lg:'80px'}, ml: {xs:'25px', lg:'30px'} }}>17+</Typography>
                <Typography sx={{ color: 'white', fontSize: '25px', fontFamily: 'Teko', ml:{xs:'25px', lg:'30px'} }}>Award Winner</Typography>
            </Box>
        </Stack> */}