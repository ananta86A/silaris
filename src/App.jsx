import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@chakra-ui/react'
import TopBanner from './Component/HomePageComponent/TopBanner'
import Headers from './Component/Header/Headers'
import MidBanner from './Component/HomePageComponent/MidBanner'
import AboutUs from './Component/HomePageComponent/AboutUs'
import Specialize from './Component/HomePageComponent/Specialize'
import HeaderMenu from './Component/Header/HeaderMenu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderMenu />
      <Headers />
      <TopBanner />
      <MidBanner />
      <AboutUs />
      <Specialize />

    </>
  )
}

export default App
