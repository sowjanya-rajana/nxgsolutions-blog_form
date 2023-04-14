import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LeftNavBar from './LeftNavBar';




function AppBarAddBlog(props) {
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        props.func(!mobileOpen);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="xl">
                <Toolbar  >
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <IconButton
                        size="large"
                        aria-label="open draawer"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, }}
                        // onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                        {/* {mobileOpen ? <LeftNavBar /> : ""} */}
                    </IconButton>

                    <Box sx={{ flexGrow: 0 }}>

                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />


                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        // component="a"
                        // href="/"
                        sx={{
                            mr: 10,
                            marginLeft: 10,
                            display: { xs: 'flex', md: 'flex' },
                            // fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}
                    >
                        NXG ECOMMERCE
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
                    {/* <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 10,
                            marginLeft: 5,
                            display: { xs: 'none', md: 'flex' },
                            // fontFamily: 'monospace',
                            fontWeight: 300,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            fontSize: 12,
                            // flexGrow: 1,
                        }}
                    >
                        Back to manage
                        Store
                    </Typography>



                    {/* </Box> */}
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}



                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppBarAddBlog;