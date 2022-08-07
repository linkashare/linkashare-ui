import React, { useState } from 'react'
import { Fragment } from 'react'
import {Helmet} from 'react-helmet';
import Navbar from "../Components/Navbar"
import {misty, verify, rocket, world} from "../Assets/index"

const Home = () => {
  const [url, setUrl] = useState('');

  return (
    <Fragment>
      <Helmet>
        <title>Link-A-share | Home</title>
      </Helmet>
        <main id="home" className=''>
          <header>
            <Navbar />
          </header>
          <div className="flex bg-dark text-textColor h-screen flex-col">
            <div className='relative'>
              <img src={misty} alt="" className='w-[15rem] h-[15rem] absolute top-0 left-10 opacity-5'/>
            </div>
            <div className='relative'>
              <img src={rocket} alt="" className='w-[10rem] h-[10rem] absolute top-10 right-10 opacity-5'/>
            </div>
            <div className='font-gotham text-center text-primary lg:text-[7rem] md:text-5 sm:text-5 pt-[10rem]'>Linkashare</div>
            <div className='text-center capitalize text-[1.5rem] font-bold'>Edit links . <span className='text-primary'>keep links in sync</span> . save links</div>
            <div className='w-full flex justify-center items-center pt-4'>
            <input type="text"
                  className='w-[30%] h-[3rem] rounded-lg outline-none text-dark pl-4'
                  required 
                  value={url}
                  placeholder="Enter a url"
                  onChange= {(e) => setUrl(e.target.value)} 
            />
            <button className='bg-primary ml-3 px-4 py-3 font-bold rounded-full'>submit</button>
            </div>
            <div className="relative">
              <img src={rocket} alt="" className='w-[10rem] h-[10rem] absolute top-15 left-10 opacity-20'/>
            </div>
            <div className="relative">
              <img src={verify} alt="" className='w-[10rem] h-[10rem] absolute top-15 right-10 opacity-5'/>
            </div>
          </div>
          <div className='flex justify-between pt-[4rem] px-[5rem]'>
            <div className="">
              <img src={world} alt="" className='w-[30rem] h-[30rem] rounded-2xl'/>
            </div>
            <div className='w-[50%] pt-[4rem]'>
              <div className='text-[2.5rem] text-center font-bold text-primary'>Access your links across various locations</div>
              <p className='pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium rem quisquam impedit at sit minima quia, quis velit tempore distinctio? Voluptates illo tempora aspernatur eius consequuntur.
                Necessitatibus doloribus eaque minima magnam, expedita et!</p>
            </div>
          </div>
          <div className='flex justify-between pt-[4rem] px-[5rem] flex-row-reverse pb-3'>
            <div className="">
              <img src={world} alt="" className='w-[30rem] h-[30rem] rounded-2xl'/>
            </div>
            <div className='w-[50%] pt-[4rem]'>
              <div className='text-[2.5rem] text-center font-bold text-primary'>Keep Links in syncronization</div>
              <p className='pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium rem quisquam impedit at sit minima quia, quis velit tempore distinctio? Voluptates illo tempora aspernatur eius consequuntur.
                Necessitatibus doloribus eaque minima magnam, expedita et!</p>
            </div>
          </div>
        </main>
    </Fragment>
  )
}

export default Home