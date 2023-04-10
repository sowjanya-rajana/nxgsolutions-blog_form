import React from 'react'
import AppBarAddBlog from '../Components/AppBarAddBlog'
import LeftBar from '../Components/LeftBar'
import LeftNavBar from '../Components/LeftNavBar'
import BlogCategoryForm from '../Components/BlogCategoryForm'


function DashboardScreen() {
    return (
        <div>
            <AppBarAddBlog />
            {/* <LeftBar /> */}
            <LeftNavBar value="true" />
            {/* <BlogCategoryForm /> */}

        </div>
    )
}

export default DashboardScreen