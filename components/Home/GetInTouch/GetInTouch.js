import React, { useState } from 'react';
import { Paper, Typography, TextField, Stack, Button, Box } from '@mui/material';
import styles from './GetInTouch.module.css'

const GetInTouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {

  }

  return (
    <Paper sx={{ bgcolor: '#FAFAFA', p: {xs:'5px 5px',lg:'60px 100px'} }} id="getInTouch">
      <Paper sx={{ p: {xs:'5px 5px',lg:'80px 100px'} }}>
        <Stack sx={{ justifyContent: 'space-around', flexDirection: {xs: 'column', lg:'row'} }}>
          <Stack sx={{ alignItems: 'center', width: {xs:'100%',lg:'505px' }}}>
            <Typography sx={{ fontFamily: 'Teko' }} variant='h4' component='h4'>Get In Touch</Typography>
            <Typography sx={{ fontFamily: 'Teko' }} variant='body1' component='hbody1'>We are here for you. How can we help you?</Typography>
            <TextField sx={{ m: '27px 0px', width: {xs:'80%', lg:'100%'} }} id="name" label="Full Name*" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />
            <TextField sx={{ m: '27px 0px', width: {xs:'80%', lg:'100%'} }} id="email" label="E-mail" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField sx={{ m: '27px 0px', width: {xs:'80%', lg:'100%'} }} id="Subject" label="Subject" variant="outlined" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <TextField sx={{ m: '27px 0px', width: {xs:'80%', lg:'100%'} }} id="Message" label="Message" variant="outlined" value={msg} onChange={(e) => setMsg(e.target.value)} multiline rows={4} />
            <Button className={styles.btn} sx={{ height: '56px', m: '27px 0 0 0', bgcolor: '#1CAF83', ':hover': { bgcolor: '#49BF9C' }, width: {xs:'80%', lg:'100%'} }} variant='contained' onSubmit={handleSubmit} >Submit</Button>
          </Stack>
          <Stack>
            <Paper>
              <Box sx={{ p: {xs:'5px 0px',lg:'50px 0px'}, height: '390px', width: {xs:'100%',lg:'505px'} }} component="img" alt="Chatting" src="/images/LandingPage/GetInTouch/chatting.svg" />
              <Stack sx={{ m: '10px', alignItems: 'center', flexDirection: 'row' }}>
                <Paper sx={{ height: '48px', width: '48px', borderRadius: '10px' }}>
                  <Box sx={{ height: '28px', width: '28px', m: '10px' }} component="img" alt="checkin" src="/images/LandingPage/GetInTouch/checkin.svg" />
                </Paper>
                <Typography ml={'20px'} variant='body1'>71-75 Shelton Street,Covent Garden, London, United Kingdom, WC2H 9JQ</Typography>
              </Stack>
              <Stack sx={{ m: '10px', alignItems: 'center', flexDirection:'row' }}>
                <Paper sx={{ height: '48px', width: '48px', borderRadius: '10px' }}>
                  <Box sx={{ height: '28px', width: '28px', m: '10px' }} component="img" alt="checkin" src="/images/LandingPage/GetInTouch/phone.svg" />
                </Paper>
                <Typography ml={'20px'} variant='body1'>+447361608597</Typography>
              </Stack>
              <Stack sx={{ m: '10px', alignItems: 'center', flexDirection:'row' }}>
                <Paper sx={{ height: '48px', width: '48px', borderRadius: '10px' }}>
                  <Box sx={{ height: '28px', width: '28px', m: '10px' }} component="img" alt="checkin" src="/images/LandingPage/GetInTouch/address.svg" />
                </Paper>
                <Typography ml={'20px'} variant='body1'>info@apexdv.com</Typography>
              </Stack>
              <Stack sx={{ pr: '121px', alignItems: 'center', bgcolor:'#E9E9EA', flexDirection: 'row'  }}>
                <Box sx={{ m: '16px', height: '25px', width: '25px' }} component="img" alt="facebook" src="/images/LandingPage/Foot/facebook.svg" />
                <Box sx={{ m: '16px', height: '25px', width: '25px' }} component="img" alt="twitter" src="/images/LandingPage/Foot/twitter.svg" />
                <Box sx={{ m: '16px', height: '25px', width: '25px' }} component="img" alt="linkedin" src="/images/LandingPage/Foot/linkedin.svg" />
                <Box sx={{ m: '16px', height: '25px', width: '25px' }} component="img" alt="instagram" src="/images/LandingPage/Foot/instagram.svg" />
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </Paper>
    </Paper>
  )
}

export default GetInTouch;