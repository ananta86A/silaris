import React from 'react'
import Contact from '../../Pages/Contact'

import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Headers from '../Header/Headers'
import Footers from '../footer/Footers'
import AboutUs from '../../Pages/AboutUs'
import Destop from '../../Pages/Destop'
import FAQs from '../../Pages/FAQs'
import TermsAndConditions from '../../Pages/TermsAndConditions'
import PrivacyPolicy from '../../Pages/PrivacyPolicy'
import Partners from '../../Pages/Partners'
import Disclaimer from '../../Pages/Disclaimer'
const AllRoutes = () => {
    return (
        <>
            <Headers />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<Contact />} />
                <Route path='aboutus' element={<AboutUs />} />
                <Route path='destop' element={<Destop />} />
                <Route path='faq' element={<FAQs />} />
                <Route path='trema&cond' element={<TermsAndConditions />} />
                <Route path='privacypolicy' element={<PrivacyPolicy />} />
                <Route path='partners' element={<Partners />} />
                <Route path='disclaimer' element={<Disclaimer />} />
            </Routes>
            <Footers />
        </>

    )
}

export default AllRoutes