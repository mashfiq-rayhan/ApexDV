

import React from 'react';
import { Box, Stack, Paper, Typography, Button } from '@mui/material';

const WorkedOn = () => {

    const brands1 = ['Roblox', 'Farcry2', 'Trover', 'Gears', 'Birds'];
    const brands2 = ['Squad', 'Amazon', 'Enjin', 'Pixar'];
  return (
    <Stack sx={{ justifyContent: 'space-around', alignItems: 'center', p: '50px 100px 50px 100px', backgroundColor: '#2F4DB6' }}>
        <Typography sx={{p: '30px', fontFamily: 'Rubik', fontWeight: '1000', color:'white' }} variant='h2' component='h2'>Have Worked On</Typography>
        <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            {brands1.map(brand => <Box key={brand} sx={{p: '30px'}}  component="img" alt={`${brand}`} src={`/images/Portfolio Details impostors/${brand}.svg`} />)}
        </Stack>
        <Stack sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            {brands2.map(brand => <Box key={brand} sx={{p: '30px'}}  component="img" alt={`${brand}`} src={`/images/Portfolio Details impostors/${brand}.svg`} />)}
        </Stack>
        
    </Stack>
  )
}

export default WorkedOn;