import * as React from 'react';
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

export default function LeftNavBar() {
    const [Dashboard, UseDatsboard] = React.useState("");
    const [Category, useCategory] = React.useState("");
    const [Blog, useBlog] = React.useState("");

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
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {['Dashboard', 'Category', 'Blog'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                        </ListItemIcon>
                                        <ListItemText primary={text} onClick={handleChange(text)} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>

                        </List>
                    </Box>
                </Drawer>
                {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />

                    <BlogCategoryForm />
                    {/* <AddBlogForm /> */}
                {/* </Box> */}

            </Box>

        </>
    );
}