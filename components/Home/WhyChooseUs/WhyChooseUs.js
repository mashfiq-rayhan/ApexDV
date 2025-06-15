
import React from 'react'
import { Paper, Typography, Box, Stack, Hidden } from '@mui/material';

const styles = {
    paperContainer: {
        height: { xs: '1200px', lg: '649px' },
        backgroundImage: `url(${'/images/LandingPage/WhyChooseUs/background.png'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
};


const WhyChooseUs = () => {

    const dataRow1 = [
        {
            alpha: 'A',
            num: 'Strength 01',
            details: 'ApexDv is committed to helping its clients reach their goals, to customizing as per their needs, to providing an innovative environment, and to making a difference.'
        },
        {
            alpha: 'B',
            num: 'Strength 02',
            details: 'Our strong sense of identification with client projects means that we are constantly striving to provide solutions, even for issues they aren’t yet aware of.'
        },
    ]
    const dataRow2 = [
        {
            alpha: 'C',
            num: 'Strength 03',
            details: 'Our approach is distinctly innovative. We constantly seek new ways to increase client visibility and brand value. We also look to get the most out of advances in digitalisation, and embrace client technology platforms.'
        },
        {
            alpha: 'D',
            num: 'Strength 04',
            details: 'We specially select teams for every project, to ensure each project gets the attention of the people who have the most relevant technical skills, languages and knowledge. '
        },
    ]
    return (
        <Paper style={styles.paperContainer} sx={{ mt: '60px', }}>
            <Typography sx={{ p: '60px 50px', color: 'white', textAlign: 'center', fontFamily: 'Teko', fontWeight: '400', fontSize:{xs:'32px',sm:'64px'}, lineHeight:{xs:'40px',sm:'64px'} }} variant='h2'>Why Choose Us?</Typography>
            <Stack sx={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, mb:'10px' }}>
                {dataRow1.map(dataObj =>(
                    <Stack sx={{ flexDirection: { xs: 'column', lg: 'row', justifyContent: 'center', alignItems: 'center' } }}>
                        <Stack sx={{ height: '188px', width: '159px', backgroundColor: 'white', borderRadius: '10px', mb: {xs:'10px', lg:'40px'}, alignItems: 'center' }}>
                            <Box sx={{ m: '16px' }} component="img" alt="Trophy" src="/images/LandingPage/WhyChooseUs/trophy.svg" />
                            <Box sx={{ height: '64px', width: '137px', backgroundColor: '#1CAF83' }}><Typography sx={{ color: 'white', m: '13px 46px' }} variant='h4'>30%</Typography></Box>
                        </Stack>
                        <Stack sx={{ m: {xs:'10px 10px',md:'20px 20px'}, width: '300px', display: "flex", justifyContent: { xs: 'center', lg: "space-evenly" }, alignItems: { xs: 'center', lg: 'flex-start' } }}>
                            <Box sx={{ height: '60px', width: '60px', border: 2, borderColor: '#1CAF83', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ color: 'white', fontFamily: 'Teko', fontWeight: '400', fontSize: '32px', lineHeight: '40px' }} variant='h5'>{dataObj.alpha}</Typography>
                            </Box>
                            <Typography sx={{ color: 'white', fontFamily: 'Teko', fontWeight: '400', fontSize: '32px', lineHeight: '40px', m: {xs:'5px',md:'17px 0'} }} variant='h4'>{dataObj.num}</Typography>
                            <Typography sx={{ color: 'white', fontFamily: 'Rubik', fontWeight: '400', textAlign:{xs:'center', lg:'left'} }} variant='body1'>{dataObj.details}</Typography>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
            <Stack sx={{ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, mb: {xs:'20px', lg:'40px'} }}>
            {dataRow2.map(dataObj =>(
                    <Stack sx={{ flexDirection: { xs: 'column', lg: 'row', justifyContent: 'center', alignItems: 'center' } }}>
                        <Stack sx={{ height: '188px', width: '159px', backgroundColor: 'white', borderRadius: '10px', mb: {xs:'10px', lg:'40px'}, alignItems: 'center' }}>
                            <Box sx={{ m: '16px' }} component="img" alt="Trophy" src="/images/LandingPage/WhyChooseUs/trophy.svg" />
                            <Box sx={{ height: '64px', width: '137px', backgroundColor: '#1CAF83' }}><Typography sx={{ color: 'white', m: '13px 46px' }} variant='h4'>30%</Typography></Box>
                        </Stack>
                        <Stack sx={{ m: {xs:'10px 10px',md:'20px 20px'}, width: '300px', display: "flex", justifyContent: { xs: 'center', lg: "space-evenly" }, alignItems: { xs: 'center', lg: 'flex-start' } }}>
                            <Box sx={{ height: '60px', width: '60px', border: 2, borderColor: '#1CAF83', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Typography sx={{ color: 'white', fontFamily: 'Teko', fontWeight: '400', fontSize: '32px', lineHeight: '40px' }} variant='h5'>{dataObj.alpha}</Typography>
                            </Box>
                            <Typography sx={{ color: 'white', fontFamily: 'Teko', fontWeight: '400', fontSize: '32px', lineHeight: '40px', m: {xs:'5px',md:'17px 0'} }} variant='h4'>{dataObj.num}</Typography>
                            <Typography sx={{ color: 'white', fontFamily: 'Rubik', fontWeight: '400', textAlign:{xs:'center', lg:'left'} }} variant='body1'>{dataObj.details}</Typography>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Paper>
    )
}

export default WhyChooseUs;