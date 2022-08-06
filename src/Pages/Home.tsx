// import React, { useState } from 'react'
import { Fragment } from 'react'
import {Helmet} from 'react-helmet';
import Navbar from "../Components/Navbar"
import {logo} from "../Assets/index"

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Link-A-share | Home</title>
      </Helmet>
        <main id="home" className=''>
          <header>
            <Navbar />
          </header>
          <div className="flex bg-dark text-textColor h-screen pt-[6rem] flex-col">
            <div className='font-gotham text-center text-primary lg:text-[7rem] md:text-5 sm:text-5'>Linkashare</div>
            <p className='text-center'>Get your url shorten</p>

          </div>
        </main>
    </Fragment>
  )
}

export default Home