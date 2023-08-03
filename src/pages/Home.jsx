import React from 'react'
import Bannrer from '../components/banner/Bannrer'
import BannerBottom from '../components/banner/BannerBottom'
import Advertise from '../components/advertise/Advertise'
import Newarrivals from '../components/newarrivals/Newarrivals'
import Advertisment from '../components/advertisment/Advertisment'
import Bestseller from '../components/bestseller/Bestseller'
import SpecilOffer from '../components/specil-offer/SpecilOffer'

const Home = () => {
  return (
   <>
    <Bannrer />
    <BannerBottom/>
    <Advertise />
    <Newarrivals/>
    <Bestseller/>
    <Advertisment/>
    <SpecilOffer/>
   </>
  )
}

export default Home