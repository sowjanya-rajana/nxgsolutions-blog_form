import React from "react";
import AppBarAddBlog from "../Components/AppBarAddBlog";
import LeftBar from "../Components/LeftBar";
import LeftNavBar from "../Components/LeftNavBar";
import BlogCategoryForm from "../Components/BlogCategoryForm";

import Blog_view from "../Components/Blog_view";
import { Box, Grid, Toolbar } from "@mui/material";


function DashboardScreen() {
    return (
      <>
        <div>
           <Box  sx={{display : 'flex' }}>
            {/* <AppBarAddBlog /> */}
            {/* <LeftBar /> */}
            <LeftNavBar />
            {/* <BlogCategoryForm /> */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Toolbar />
       </Box>

            </Box>
        </div>
        </>
    )

//     <>
     
   
//        <AppBarAddBlog />
//        {/* <LeftBar /> */}

//        <LeftNavBar />
// {/* <Grid item xs={10} sm={10} md={10} lg={10}> */}
//        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//          <Toolbar />
//          <Blog_view />
//        </Box>
     
  
//  </>
// );
}

export default DashboardScreen;
