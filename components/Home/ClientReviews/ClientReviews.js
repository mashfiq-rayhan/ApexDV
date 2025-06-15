import StarIcon from '@mui/icons-material/Star';
import { Avatar, CardHeader, IconButton, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './ClientReviews.module.css';

const ClientReviews = () => {
    const data = [
        {
            id: 1,
            clientName: "ARIEL RABEL",
            dejignation: "DRECTOR",
            review: "Was looking for expert team to develop Apexdv Clone for my real estate business . After going through the demo i was very happy to select Web Development India. They delivered the complex solution in 1 month time and i am very happy with there services ."
        },
        {
            id: 2,
            clientName: "JACOB FLORES",
            dejignation: "DRECTOR",
            review: "I am blessed to work with web development UK team and very excited with the launch of my new software product . All the best to the team for the wounderfull job they have accomplished."
        },
        {
            id: 3,
            clientName: "MICHAEL",
            dejignation: "DRECTOR",
            review: "We have been working with Blockchain Development UK for last 2 years and found there services impeccable. They delivered what was promised and on time. We can recommend them."
        },
        {
            id: 4,
            clientName: "NORMIN NAK",
            dejignation: "DRECTOR",
            review: "I was worried reading some of the reviews here, but I trusted the company to help me develop a real estate website. My contact Mark was very accessible on the phone and they produced some good work. I will keep working with them on enhancements and I hope everything goes well."
        },
        {
            id: 4,
            clientName: "PETER",
            dejignation: "DRECTOR",
            review: "It has been a pleasure working with web development agency. I really appreciate your dedication and creativity in your work.thanks guys !!"
        },
    ]
    const [rating, setRating] = useState(5);
    const stars = [1, 2, 3, 4, 5];

    let star5 = stars.map(star => (
        <IconButton className={styles.iconIcon}  >
            <StarIcon className={styles.iconBtn} fontSize='medium' sx={{ color: "white" }} />
        </IconButton>
    ))
    return (
        <Paper sx={{ height: '40%', width: '100%', p: '20px', boxShadow: 'none', m: '60px 0' }}>
            <Typography sx={{ textAlign: 'center', m: '60px 0px', fontFamily: "Teko", fontSize: "64px", fontWeight: "400" }} variant='h2' className={styles.title}>What our clients say about our work</Typography>
            <div className="container-fluid">
                <div className='clientSlider' >
                    <Swiper
                        className="clientReview"
                        spaceBetween={10}
                        // modules={[Scrollbar]}
                        slidesPerView={1}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        // scrollbar={{ draggable: true }}
                        autoplay={true}
                        speed={1000}
                        breakpoints={{
                            // when window width is >= 640px
                            320: {
                              width: 300,
                              slidesPerView: "auto",
                              spaceBetween: 10,

                            },
                            // 425: {
                            //     width: 420,
                            //     slidesPerView: 1,
                            //     spaceBetween: 10,
                            //   },
                            // when window width is >= 768px
                           640: {
                              slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // when window width is >= 768px
                            1024: {
                                // width: 1024,
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                            // when window width is >= 768px
                            1440: {
                                // width: 1440,
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                              // when window width is >= 768px
                            2000: {
                                // width: 2000,
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                          }}
                    >

                        {data.map((item) => (
                            <SwiperSlide className={styles.swiperSlide}>
                                <div className={styles.card}>
                                    {star5}
                                    <div className={styles.container}>
                                        <h4>{item.review}</h4>
                                    </div>
                                    <CardHeader avatar={<Avatar> R </Avatar>} title={item.clientName} subheader={item.dejignation} />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </Paper>
    )
}

export default ClientReviews;




// {/* <Stack sx={{ justifyContent:'space-evenly', flexDirection: { xs: 'column', md: 'row' }, maxWidth: {xs: '400px', sm: '100%', lg: '100%'} }}>
//               <Card sx={{ height: '20%', width: {xs:'97%', sm:'100%'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'40px 40px'}, m: {xs: '5px 5px',lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}
//                   <CardContent >
//                       <Typography variant="h5" color="text.secondary">
//                           They have a lot of concern for their customers and the end product.
//                           We have good communication and a good relationship between my team and theirs.
//                           We're very happy with them as a partner
//                       </Typography>
//                   </CardContent>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>
//               <Card sx={{ height: '20%', width: {xs:'97%', sm:'100%'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'40px 40px'}, m: {xs: '5px 5px', lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}

//                   <CardContent >
//                       <Typography variant="h5" color="text.secondary">
//                           They have a lot of concern for their customers and the end product.
//                           We have good communication and a good relationship between my team and theirs.
//                           We're very happy with them as a partner
//                       </Typography>
//                   </CardContent>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>


//         </Stack> */}


// {/* <Container width={'100%'}>
//         <Stack direction="row" width={'100%'}>
//             <Box className={styles.imageWrapper}>
//             <Box className={styles.image}> 
//             <Card sx={{ height: '100%', maxWidth: {xs:'350px', sm:'400px', md:'600px', lg:'900px'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'40px 40px'}, m: {xs: '5px 5px', lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}
//                       <CardActionArea sx={{width:'100%', maxWidth:'100%', display:'block'}}>  
//                       <Typography variant="h5" color="text.secondary" >
//                         They have a lot of concern for their customers and the end product.
//                           We have good communication and a good relationship between my team and theirs.
//                           We're very happy with them as a partner
//                       </Typography>
//                   </CardActionArea>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>
//             </Box>
//             <Box className={styles.image}> 
//             <Card sx={{ height: '100%', maxWidth: {xs:'350px', sm:'400px', md:'600px', lg:'900px'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'40px 40px'}, m: {xs: '5px 5px', lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}
//                       <CardActionArea sx={{width:'100%', maxWidth:'100%', display:'block'}}>  
//                       <Typography variant="h5" color="text.secondary" >
//                         They have a lot of concern for their customers and the end product.
//                           We have good communication and a good relationship between my team and theirs.
//                           We're very happy with them as a partner
//                       </Typography>
//                   </CardActionArea>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>
//             </Box>
//             <Box className={styles.image}> 
//             <Card sx={{ height: '100%', maxWidth: {xs:'350px', sm:'400px', md:'600px', lg:'900px'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'40px 40px'}, m: {xs: '5px 5px', lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}
//                       <CardActionArea sx={{width:'100%', maxWidth:'100%', display:'block'}}>  
//                       <Typography variant="h5" color="text.secondary" >
//                         They have a lot of concern for their customers and the end product.
//                           We have good communication and a good relationship between my team and theirs.
//                           We're very happy with them as a partner
//                       </Typography>
//                   </CardActionArea>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>
//             </Box>
//             </Box>
//         </Stack>
//     </Container> */}


// {/* <div className="container-fluid">
//         <div className="row">
//         <div id='imgWrappper' className={styles.imageWrapper}>
//             <div className={styles.image}> 
//             <Card sx={{ height: '20%', maxWidth: {xs:'350px', sm:'400px', md:'600px', lg:'900px'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'20px 30px'}, m: {xs: '5px 5px', lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}
//                       <CardContent>
//                         <Typography variant="h5" color="text.secondary" >
//                             They have a lot of concern for their customers and the end product.
//                         </Typography>
//                       </CardContent>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>
//             </div>
//             <div className={styles.image}> 
//             <Card sx={{ height: '20%', maxWidth: {xs:'350px', sm:'400px', md:'600px', lg:'900px'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'20px 30px'}, m: {xs: '5px 5px', lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}
//                       <CardContent>
//                         <Typography variant="h5" color="text.secondary" >
//                             They have a lot of concern for their customers and the end product.
//                         </Typography>
//                       </CardContent>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>
//             </div>
//             <div className={styles.image}> 
//             <Card sx={{ height: '20%', maxWidth: {xs:'350px', sm:'400px', md:'600px', lg:'900px'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'20px 30px'}, m: {xs: '5px 5px', lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}
//                       <CardContent>
//                         <Typography variant="h5" color="text.secondary" >
//                             They have a lot of concern for their customers and the end product.
//                         </Typography>
//                       </CardContent>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>
//             </div>
//             <div className={styles.image}> 
//             <Card sx={{ height: '20%', maxWidth: {xs:'350px', sm:'400px', md:'600px', lg:'900px'}, backgroundColor: '#FAFAFA', p: {xs:'10px 5px',lg:'20px 30px'}, m: {xs: '5px 5px', lg:'10px'} }}>
//                       {stars.map(star => (
//                         <IconButton className={styles.iconBtn} size='large' sx={{m: '10px 7px', bgcolor:'#1CAF83', "&:hover": {bgcolor: '#1CAF83'}}}>
//                             <StarIcon fontSize='medium' sx={{ color:"white" }}/>
//                         </IconButton>
//                       ))}
//                       <CardContent>
//                         <Typography variant="h5" color="text.secondary" >
//                             They have a lot of concern for their customers and the end product.
//                         </Typography>
//                       </CardContent>
//                   <CardHeader avatar={ <Avatar> R </Avatar> } title="kawsar Ahmed" subheader="CEO of ApexDv" />
//               </Card>
//             </div>



//          </div>
//          </div> 
//     </div>  */}



{/* <Stack sx={{m:'50px'}}>
          <div className="container-fluid">
              <div className="row">
                  <div id='imgWrappper' className={styles.imageWrapper}>
                      <div className={styles.image}>
                          <Card sx={{ height: '20%', maxWidth: { xs: '350px', sm: '400px', md: '600px', lg: '900px' }, backgroundColor: '#FAFAFA', p: { xs: '10px 5px', lg: '20px 30px' }, m: { xs: '5px 0px', lg: '10px' } }}>
                              {stars.map(star => (
                                  <IconButton className={styles.iconBtn} size='large' sx={{ m: '10px 7px', bgcolor: '#1CAF83', "&:hover": { bgcolor: '#1CAF83' } }}>
                                      <StarIcon fontSize='medium' sx={{ color: "white" }} />
                                  </IconButton>
                              ))}
                              <CardContent>
                                  <Typography variant="h5" color="text.secondary"  >
                                      They have a lot of concern for their customers and the end product. They have a lot of concern for their customers and the end product.
                                  </Typography>
                              </CardContent>
                              <CardHeader avatar={<Avatar> R </Avatar>} title="kawsar Ahmed" subheader="CEO of ApexDv" />
                          </Card>
                      </div>
                      <div className={styles.image}>
                          <Card sx={{ height: '20%', maxWidth: { xs: '350px', sm: '400px', md: '600px', lg: '900px' }, backgroundColor: '#FAFAFA', p: { xs: '10px 5px', lg: '20px 30px' }, m: { xs: '5px 5px', lg: '10px' } }}>
                              {stars.map(star => (
                                  <IconButton className={styles.iconBtn} size='large' sx={{ m: '10px 7px', bgcolor: '#1CAF83', "&:hover": { bgcolor: '#1CAF83' } }}>
                                      <StarIcon fontSize='medium' sx={{ color: "white" }} />
                                  </IconButton>
                              ))}
                              <CardContent>
                                  <Typography variant="h5" color="text.secondary" >
                                      They have a lot of concern for their customers and the end product.
                                  </Typography>
                              </CardContent>
                              <CardHeader avatar={<Avatar> R </Avatar>} title="kawsar Ahmed" subheader="CEO of ApexDv" />
                          </Card>
                      </div>
                      <div className={styles.image}>
                          <Card sx={{ height: '20%', maxWidth: { xs: '350px', sm: '400px', md: '600px', lg: '900px' }, backgroundColor: '#FAFAFA', p: { xs: '10px 5px', lg: '20px 30px' }, m: { xs: '5px 5px', lg: '10px' } }}>
                              {stars.map(star => (
                                  <IconButton className={styles.iconBtn} size='large' sx={{ m: '10px 7px', bgcolor: '#1CAF83', "&:hover": { bgcolor: '#1CAF83' } }}>
                                      <StarIcon fontSize='medium' sx={{ color: "white" }} />
                                  </IconButton>
                              ))}
                              <CardContent>
                                  <Typography variant="h5" color="text.secondary" >
                                      They have a lot of concern for their customers and the end product.
                                  </Typography>
                              </CardContent>
                              <CardHeader avatar={<Avatar> R </Avatar>} title="kawsar Ahmed" subheader="CEO of ApexDv" />
                          </Card>
                      </div>
                      <div className={styles.image}>
                          <Card sx={{ height: '20%', maxWidth: { xs: '350px', sm: '400px', md: '600px', lg: '900px' }, backgroundColor: '#FAFAFA', p: { xs: '10px 5px', lg: '20px 30px' }, m: { xs: '5px 5px', lg: '10px' } }}>
                              {stars.map(star => (
                                  <IconButton className={styles.iconBtn} size='large' sx={{ m: '10px 7px', bgcolor: '#1CAF83', "&:hover": { bgcolor: '#1CAF83' } }}>
                                      <StarIcon fontSize='medium' sx={{ color: "white" }} />
                                  </IconButton>
                              ))}
                              <CardContent>
                                  <Typography variant="h5" color="text.secondary" >
                                      They have a lot of concern for their customers and the end product.
                                  </Typography>
                              </CardContent>
                              <CardHeader avatar={<Avatar> R </Avatar>} title="kawsar Ahmed" subheader="CEO of ApexDv" />
                          </Card>
                      </div>
                  </div>
              </div>
          </div> 
          </Stack> */}