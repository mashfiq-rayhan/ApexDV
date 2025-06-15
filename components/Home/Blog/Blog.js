import React from 'react'
import { Paper, Typography, Card, CardContent, CardHeader, CardMedia, Stack, Link } from '@mui/material';

const Blog = () => {
  return (
    <Paper sx={{m:'5px', width: '98%'}}>
        <Typography sx={{ textAlign:'center', mt: '60px', color: '#1CAF83'}} variant='h4'>___BLOG___</Typography>
        <Typography sx={{ textAlign:'center', mt: '36px', fontFamily:'Teko'}} variant='h2'>Read stories, tips, and our opinions on everything</Typography>
        <Typography sx={{ textAlign:'center', mt: '16px '}} variant='h6'>Get updated with the latest trends in technology and know how your business can benefit from these technologies.</Typography>
        <Stack sx={{p: { xs:'10px' ,lg:'80px'}, justifyContent: 'center', flexDirection: { xs: 'column', lg: 'row' }}}>
            <Card sx={{height: '40%', width:{xs:'100%', lg:'35%'},bgcolor: '#E9E9EA'}}>
                <CardMedia sx={{m:'12px',height:'70%', width:'95%', justifyContent:'center', alignItems:'center'}} component="img" image="/images/LandingPage/Blog/big.svg" />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h4" sx={{m: '10px', fontFamily: 'Teko'}}>A Beginner’s Guide on NFT and NFT Marketplace</Typography>
                    <Typography gutterBottom variant="body1" component="body1" sx={{m: '10px', fontFamily: 'Rubik'}}>
                    What Is An NFT?
An NFT, or non-fungible token, is a type of digital certificate that helps authenticate and establish the ownership of any given virtual asset. This is made possible with the help of blockchain technology. 
 <Typography component={Link} to="/" sx={{color: '#1CAF83', cursor: "pointer"}}>Read More</Typography>
                    </Typography>
                </CardContent>
            </Card>
            <Stack sx={{justifyContent: 'space-evenly', flexDirection: {xs: 'column', sm: 'row', lg: 'column'}, mt:{xs:'10px', lg:'0'}, ml:{xs:'0', lg:'20px'}}}>
                <Card sx={{height: {xs:'45%', lg: '264px'}, width:{ xs:'100%', sm:'50%', lg:'610px'},bgcolor: '#E9E9EA', }}>
                    <Stack sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
                        <CardMedia sx={{m:'17px',height:'40%px', width:'90%'}} component="img" image="/images/LandingPage/Blog/sm1.svg" />
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{ fontFamily: 'Teko'}}> Simple Guide to the Top 10 NFT Marketplaces</Typography>
                            <Typography variant="body1" component="body1" sx={{m: '10px', fontFamily: 'Rubik'}}>
                            While the majority of NFT marketplaces available in the industry are built on the Ethereum blockchain, the platforms mentioned below are built across other Layer-1 blockchains. <Typography component={Link} to="/" sx={{color: '#1CAF83', cursor: "pointer"}}>Read More</Typography>
                            </Typography>
                        </CardContent>
                    </Stack>
                </Card>
                <Card sx={{height: {xs:'45%', lg: '264px'}, width:{ xs:'100%', sm:'50%', lg:'610px'},bgcolor: '#E9E9EA', mt: {xs:'5px', sm:'0'}}}>
                    <Stack sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
                        <CardMedia sx={{m:'17px',height:'40%px', width:'90%'}} component="img" image="/images/LandingPage/Blog/sm1.svg" />
                        <CardContent>
                            <Typography variant="h5" component="h5" sx={{ fontFamily: 'Teko'}}>How to Make Money with NFTs</Typography>
                            <Typography variant="body1" component="body1" sx={{m: '10px', fontFamily: 'Rubik'}}>Because an NFT’s value isn’t static, you can earn by buying an NFT and selling it for profit when it appreciates. Flipping NFTs is a common earning method: Buy low, sell high. A close eye on the market. <Typography component={Link} to="/" sx={{color: '#1CAF83', cursor: "pointer"}}>Read More</Typography>
                            </Typography>
                        </CardContent>
                    </Stack>
                </Card>
            </Stack>
        </Stack>
    </Paper>
  )
}

export default Blog