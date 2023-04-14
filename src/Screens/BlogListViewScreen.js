import React from "react";
import AppBarAddBlog from "../Components/AppBarAddBlog";
import LeftBar from "../Components/LeftBar";
import LeftNavBar from "../Components/LeftNavBar";
import BlogCategoryForm from "../Components/BlogCategoryForm";

import BlogListView from "../Components/BlogListView";
import { Box, Grid, Toolbar } from "@mui/material";
import AddBlogForm from "../Components/AddBlogForm";

const drawerWidth = 240;

function BlogListViewScreen() {
    return (
        <>
            <div>
                <Box sx={{ display: 'flex' }}>
                    {/* <AppBarAddBlog /> */}
                    {/* <LeftBar /> */}
                    <LeftNavBar />
                    {/* <BlogCategoryForm /> */}
                    <Box component="main" sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
                        <Toolbar />
                        {/* <div>
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
      </div> */}
                        < BlogListView />






                    </Box>

                </Box>


            </div >
        </>
    )
}

export default BlogListViewScreen