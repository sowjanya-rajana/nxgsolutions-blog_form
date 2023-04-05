import React from 'react'
import AppBarAddBlog from '../Components/AppBarAddBlog'
import LeftBar from '../Components/LeftBar'
import LeftNavBar from '../Components/LeftNavBar'
import Blog_view from '../Components/Blog_view'
import { Grid } from '@mui/material'

function DashboardScreen() {
    return (
        <>
        <div>
            <Grid container>
       
            <AppBarAddBlog />
            {/* <LeftBar /> */}
            <Grid item xs={4} sm={4} md={4} lg={4}>
            <LeftNavBar /></Grid>
            
            <Grid item xs={8} sm={8} md={8} lg={9}>
            <Blog_view/></Grid>
            </Grid>
        </div>
       
        </>
    )
}

export default DashboardScreen