import *  as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BlogCategoryForm from './BlogCategoryForm';
import AddBlogForm from './AddBlogForm';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


const drawerWidth = 240;



export default function LeftNavBar() {

    const params = useParams();
    const { compo } = params;
    const location = useLocation();
    const searchparams = new URLSearchParams(location.search);
    let type = searchparams.get("type");
    // const [searchparams,setSearchParams]=useSearch
    console.log("params", searchparams.get("type"));
    const [Dashboard, UseDatsboard] = React.useState("");
    const [Category, useCategory] = React.useState("");
    const [Blog, useBlog] = React.useState("");
    const [ismobile, setismobile] = React.useState(false);
    const [value, setValue] = React.useState({
        "name": "Dashboard",
        "url": "/dashboard"
    });

    const data = [
        {
            "name": "Dashboard",
            "url": "/dashboard"
        },
        {
            "name": "Category",
            "url": "/category"
        },
        {
            "name": "Blog",
            "url": "/blog"
        }

    ]

    // function handleChange(text) {
    //     if (text === 'Dashboard') {
    //         setValue('Dashboard');
    //     }
    //     else if (text === 'Category') {
    //         setValue('Category');
    //     }
    //     else if (text === 'Blog') {
    //         setValue('Blog');
    //     }
    // }
    // function handleComponent(value) {
    //     switch (value) {
    //         case 'Dashboard':
    //             return <BlogCategoryForm />;
    //         case 'Category':
    //             return <BlogCategoryForm />;
    //         case 'Blog':
    //             return <AddBlogForm />;
    //     }
    // }
    // useEffect(() => {
    //     console.log("check", value);
    // }, [])


    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }} >
                        <List>
                            {data.map((text, index) => (
                                <ListItem key={text} disablePadding className='mshover' >
                                    {/* <Link to={text.url} > */}
                                    <ListItemButton component={Link} to={text.url}>
                                        <ListItemIcon>
                                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                        </ListItemIcon>

                                        <ListItemText primary={text.name} onClick={() => setValue(text)} />
                                    </ListItemButton>
                                    {/* </Link> */}
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>

                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <div>
                        {(() => {
                            switch (value.url) {
                                case '/dashboard':
                                    return < AddBlogForm />
                                case '/category':
                                    return <BlogCategoryForm />
                                case '/blog':
                                    return <AddBlogForm />

                                default:
                                    return null
                            }
                        })()}
                    </div>






                </Box>

            </Box>

        </>
    );
}