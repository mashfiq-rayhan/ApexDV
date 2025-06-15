
import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Hidden, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';


const drawerWidth = 300;
const navItems = [
    {
        name: 'Home',
        href: "/"
    },
    {
        name: 'Services',
        href: "/services"
    },
    {
        name: 'Portfolio',
        href: "/portfolio"
    },
    {
        name: 'About Us',
        href: "/about-us"
    },
    {
        name: 'Contact Us',
        href: "/contact"
    },
    // {
    //     name: 'Shop',
    //     href: ""
    // }, 
    // {
    //     name: 'Careers',
    //     href: ""
    // }, 
    // {
    //     name: 'Blog',
    //     href: "/blog"
    // }
];

export default function DrawerAppBar(props) {
    const router = useRouter();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Stack sx={{ m: '20px' }} direction="row" justifyContent={'space-between'}>
                <Link href={'/'} sx={{ height: '233' }}>
                    <a>
                        <Box component="img" sx={{ height: '233', width: '350', maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 } }} alt="ApexDv" src="/images/Navigation/brandLogo.svg" />
                    </a>
                </Link>
                <IconButton>
                    <CloseIcon fontSize='large' onClick={handleDrawerToggle} />
                </IconButton>
            </Stack>
            <Divider sx={{ mt: '10px' }} />
            <List sx={{ mt: '10px' }}>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{}}>
                            <Link href={item.href}><a><Typography variant='h6' component='body1' sx={{ m: '2px 0 2px 10px', color: router.asPath === item.href ? "#1CAF83" : 'black' }}>{item.name}</Typography></a></Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{ m: '10px 0 10px 25px', width: '80%' }} />
            <Typography variant='h6' component='body1' sx={{ m: '10px 0 10px 25px' }} >info@apexdv.com</Typography>
            <Button variant="outlined" size="large" startIcon={<PhoneIcon />} sx={{ color: '#1CAF83', borderRadius: '20px', m: 2 }} color="success">+1203-892-6285</Button>
            <Divider sx={{ m: '10px 0 10px 25px', width: '80%' }} />
            <Stack sx={{ m: '10px 0 10px 15px', justifyContent: 'flex-start', alignItems: 'flex-end', flexDirection: 'row' }}>
                <a href="https://www.facebook.com/apexdvltd"><Box sx={{ m: '16px', height:'30px', width:'30px' }} component="img" alt="facebook" src="/images/LandingPage/Foot/facebook.svg" /></a>
                <a href="https://twitter.com/apexdv_nft"> <Box sx={{ m: '16px', height:'30px', width:'30px' }} component="img" alt="twitter" src="/images/LandingPage/Foot/twitter.svg" /></a>
                <a href="https://www.linkedin.com/company/apexdv/ "> <Box sx={{ m: '16px', height:'30px', width:'30px' }} component="img" alt="linkedin" src="/images/LandingPage/Foot/linkedin.svg" /></a>
                <a href=" https://www.instagram.com/accounts/login/?next=/apexdv.nft/"><Box sx={{ m: '16px', height:'30px', width:'30px' }} component="img" alt="instagram" src="/images/LandingPage/Foot/instagram.svg" /></a>
            </Stack>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', p: "0px" }}>
            <AppBar elevation={0} component="nav" position="static" sx={{ background: 'white', height: '120px', color: 'black', justifyContent: 'center', boxShadow: '0px 4px 29px rgba(0, 0, 0, 0.05)', p: "0px" }}>
                <div className='container'>
                    <Hidden lgDown>
                        <Box className={styles.ellipse11} component='img' alt="ApexDv" src="/images/Navigation/Ellipse 11.svg" ></Box>
                        <Box className={styles.ellipse12} component='img' alt="ApexDv" src="/images/Navigation/Ellipse 12.svg" ></Box>
                        <Box className={styles.ellipse13} component='img' alt="ApexDv" src="/images/Navigation/Ellipse 13.svg" ></Box>
                    </Hidden>
                    <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', m: { xs: '0 33% 0 0 ', sm: '0 40% 0 0', lg: '0 10px' } }} >
                        <IconButton size='large' color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { lg: 'none' }, ml: '24px' }} >
                            <MenuIcon fontSize='large' />
                        </IconButton>
                        <Link href={'/'} sx={{ flexGrow: 1 }}>
                            <a>
                                <Box component="img" sx={{ height: '233', width: '350', maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 }, ml: { lg: '0px' } }} alt="ApexDv" src="/images/Navigation/brandLogo.svg" />
                            </a>
                        </Link>
                        <Box sx={{ display: { xs: 'none', lg: 'block' }, ml: { md: '40px' } }}>
                            {navItems.map((item) => (
                                <Link href={item.href}><a><Typography variant='h6' component='body1' sx={{ m: 2, color: router.asPath === item.href ? "#1CAF83" : 'black' }}>{item.name}</Typography></a></Link>
                            ))}
                            <Button variant="outlined" size="large" startIcon={<PhoneIcon sx={{ color: '#1CAF83' }} />} sx={{ color: '#1CAF83', borderRadius: '20px', m: 2 }} color="success">+1203-892-6285</Button>
                        </Box>
                    </Toolbar>
                </div>
            </AppBar>
            <Box component="nav">
                <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}
                    sx={{ display: { xs: 'block', lg: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }} >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

