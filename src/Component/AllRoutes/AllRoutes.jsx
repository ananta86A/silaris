import React from 'react'
import Contact from '../../Pages/Contact'

import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Headers from '../Header/Headers'
import Footers from '../footer/Footers'
import AboutUs from '../../Pages/AboutUs'
const AllRoutes = () => {
    return (
        <>
            <Headers />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<Contact />} />
                <Route path='aboutus' element={<AboutUs />} />
            </Routes>
            <Footers />
        </>

    )
}

export default AllRoutes