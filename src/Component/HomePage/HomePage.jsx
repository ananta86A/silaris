import React from 'react'
import Headers from '../Header/Headers'
import MidBanner from '../HomePageComponent/MidBanner'
import AboutUs from '../HomePageComponent/AboutUs'
import Specialize from '../HomePageComponent/Specialize'

import TopBanner from "../HomePageComponent/TopBanner";
import Footers from '../footer/Footers'
// import HeaderMenu from '../Header/HeaderMenu'
const HomePage = () => {
    return (
        <div>
            {/* <HeaderMenu /> */}
            {/* <Headers /> */}
            <TopBanner />
            <MidBanner />
            <AboutUs />
            <Specialize />
            {/* <Footers /> */}

        </div>
    )
}

export default HomePage