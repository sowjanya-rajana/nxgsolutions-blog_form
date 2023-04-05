import React from 'react'
import AppBarAddBlog from '../Components/AppBarAddBlog'
import LeftBar from '../Components/LeftBar'
import LeftNavBar from '../Components/LeftNavBar'

function DashboardScreen() {
    return (
        <div>
            <AppBarAddBlog />
            {/* <LeftBar /> */}
            <LeftNavBar />

        </div>
    )
}

export default DashboardScreen