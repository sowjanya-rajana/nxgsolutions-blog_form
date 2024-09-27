import *  as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCardIcon from '@mui/icons-material/AddCard';
import CategoryIcon from '@mui/icons-material/Category';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BlogCategoryForm from './BlogCategoryForm';
import AddBlogForm from './AddBlogForm';
import { useParams, useLocation, useSearchParams, useNavigate, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import BlogAppBar from './BlogAppBar';
import Blog_view from './Blog_view';


const drawerWidth = 240;

function handleChange(text) {
    // if (text === 'Dashboard') {

    // }
    // else if (text === 'Category') {
    //     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    //         <Toolbar />

    //         <BlogCategoryForm />
    //     </Box>
    // }
    // else if (text === 'Blog') {
    //     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    //         <Toolbar />

    //         <AddBlogForm />
    //     </Box>
    // }
}



function LeftNavBar(props) {



    console.log("props", props);

    const { params } = useParams();
    // const { compo } = params;
    // const path = window.location.pathname



    const location = useLocation();
    const path = location.pathname;
    console.warn("params", location.pathname);
    const searchparams = new URLSearchParams(location.search);

    console.warn("params", { params });
    console.warn("searchparams", searchparams);

    let type = searchparams.get("type");
    // const [searchparams,setSearchParams]=useSearch
    console.log("params", searchparams.get("type"));
    const [Dashboard, UseDatsboard] = React.useState("");
    const [Category, useCategory] = React.useState("");
    const [Blog, useBlog] = React.useState("");
    const navigate = useNavigate();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const get_props = (data) => {
        console.log("child_props", data);
        setMobileOpen(data);
    }


    const data = [
        {
            "name": "Dashboard",
            "url": "/dashboard",
            "icon": <DashboardIcon />
        },
        {
            "name": "Category",
            "url": "/category",
            "icon": <CategoryIcon />
        },
        {
            "name": "Blog",
            "url": "/blog",
            "icon": <AddCardIcon />
        }

    ]
    const drawer = (
        <div>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }} >

                <List  >
                    {data.map((text, index) => (
                        <ListItem key={text} disablePadding className={path === text.url ? "mshover active" : "mshover"} component={Link} to={text.url} >
                            {/* <Link to={text.url} > */}
                            <ListItemButton   >
                                <ListItemIcon>

                                    {text.icon}

                                </ListItemIcon>

                                <ListItemText primary={text.name} onClick={() => (setMobileOpen(!mobileOpen))} />
                            </ListItemButton>
                            {/* </Link> */}
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>

                </List>
            </Box>
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    useEffect(() => {

    }, []);

    return (
        <>
            <Box sx={{
                display: 'flex'

                // display: { xs: 'flex', md: 'none' },

            }}>
                <CssBaseline />
                <BlogAppBar func={get_props} />
                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer

                        // className={mobileOpen ? 'nav-mobile' : 'nav-link'}
                        // variant={mobileOpen ? "temporary" : "permanent"}
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}


                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                {/* <Box component="main" sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
                    <Toolbar />
                    <div>
                        {(() => {
                            switch (value.url) {
                                case '/dashboard':
                                    return < Blog_view />
                                case '/category':
                                    return <BlogCategoryForm />
                                case '/blog':
                                    return <AddBlogForm />

                                default:
                                    return null
                            }
                        })()}
                    </div>






                </Box>*/}

            </Box>

        </>
    );
}
LeftNavBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default LeftNavBar;