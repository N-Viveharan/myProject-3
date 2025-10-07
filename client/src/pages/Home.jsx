import React from 'react'
import Navbars from '../components/Navbars'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Fooder from '../components/Fooder'

function Home() {
  return (
    <>
        <Navbars/>
        <Header/>
        <BlogList/>
        <Newsletter/>
        <Fooder/>
    </>
  )
}

export default Home