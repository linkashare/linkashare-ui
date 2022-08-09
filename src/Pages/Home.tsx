import React, { useState } from 'react'
import { Fragment } from 'react'
import {Helmet} from 'react-helmet';
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer";
import {misty, verify, rocket, world, globe} from "../Assets/index"
import { FaCoffee } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';


const Home = () => {
  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [showText, setShowText] = useState(false)
  let navigate = useNavigate();

  const handleRegister = () =>{
    navigate('/register')
  }

  const handleSubmit = () => {
    setShowText(true)
  }
  const  handleRoute = () => {
    setNewUrl(window.location.href = url)
  }
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
              <img src={misty} alt="" className='w-[15rem] h-[15rem]  lg:w-[15rem] lg:h-[15rem] top-0 left-10 absolute lg:top-0 lg:left-10 opacity-5 sm:w-[10rem] sm:h-[10rem] sm:top-10 sm:left-0' />
            </div>
            <div className='relative'>
              <img src={rocket} alt="" className='w-[10rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] absolute top-10 right-10 opacity-5 sm:w-[8rem] sm:h-[8rem] sm:top-14 sm:right-0'/>
            </div>
            <div className='font-gotham text-center text-primary lg:text-[7rem] md:text-[50px] sm:text-[50px] pt-[10rem]'>Linkashare</div>
            <div className='text-center capitalize text-[1.5rem] font-bold px-2'>Edit links . <span className='text-primary'>keep links in sync</span> . save links</div>
            <div className='w-full flex justify-center items-center lg:flex-row md:flex-row pt-4 sm:flex-col'>
            <input type="text"
                  className='lg:w-[30%] h-[3rem] rounded-lg outline-none text-dark pl-4 md:w-[50%] sm:w-[80%]'
                  required 
                  value={url}
                  placeholder="Enter a url"
                  onChange= {(e) => setUrl(e.target.value)} 
            />
            <button className='bg-primary md:mt-0 lg:mt-0 ml-3 px-4 py-3 font-bold rounded-full sm:mt-3 sm:px-8' onClick={handleSubmit}>submit</button>
            </div>
            {showText && (<div className='text-center pt-3'>Your Shortened Link is: <span><a onClick={handleRoute} target="_blank" className='cursor-pointer'>linkashare.com/usertest123</a></span></div>)}
            <div className="relative">
              <img src={rocket} alt="" className='w-[10rem] h-[10rem] absolute top-15 left-10 opacity-20 sm:w-[8rem] sm:h-[8rem] sm:top-14 sm:left-0'/>
            </div>
            <div className="relative">
              <img src={verify} alt="" className='w-[10rem] h-[10rem] absolute top-15 right-10 opacity-5'/>
            </div>
          </div>
          <div className='w-full flex md:flex-row justify-between lg:flex-row lg:justify-between pt-[4rem] lg:px-[5rem] sm:flex-col md:px-[2rem] sm:px-[2rem]'>
            <div className="w-full">
              <img src={world} alt="" className='lg:w-[30rem] lg:h-[30rem] rounded-2xl sm:w-[100%] sm:h-auto'/>
            </div>
            <div className='w-full pt-[4rem]'>
              <div className='lg:text-[2.5rem] text-center font-bold text-primary sm:text-[1.5rem]'>Access your links across various locations</div>
              <p className='pt-4 lg:px-3 lg:text-left sm:text-center sm:px-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium rem quisquam impedit at sit minima quia, quis velit tempore distinctio? Voluptates illo tempora aspernatur eius consequuntur.
                Necessitatibus doloribus eaque minima magnam, expedita et!</p>
              <div className='flex justify-center items-center pt-4'>
                  <button className='bg-primary md:mt-0 lg:mt-0 ml-3 lg:px-[5rem] py-4 font-bold rounded-full sm:mt-3 sm:px-8' onClick={handleRegister}>Get Started</button>
              </div>
            </div>
          </div>
          <div className='w-full flex md:flex-row justify-between lg:flex-row-reverse md:flex-row-reverse lg:justify-between py-[4rem] lg:px-[4rem] sm:flex-col sm:px-[2rem]'>
            <div className="w-full">
              <img src={globe} alt="" className='lg:ml-5 lg:w-[30rem] lg:h-[30rem] rounded-2xl sm:w-[100%] sm:h-auto'/>
            </div>
            <div className='w-full pt-[4rem]'>
              <div className='lg:text-[2.5rem] text-center font-bold text-primary sm:text-[1.5rem]'>Keep Links in syncronization</div>
              <p className='pt-4 lg:px-3 lg:text-left sm:text-center sm:px-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium rem quisquam impedit at sit minima quia, quis velit tempore distinctio? Voluptates illo tempora aspernatur eius consequuntur.
                Necessitatibus doloribus eaque minima magnam, expedita et!</p>
              <div className='flex justify-center items-center pt-4'>
                  <button className='bg-primary md:mt-0 lg:mt-0 ml-3 lg:px-[5rem] py-4 font-bold rounded-full sm:mt-3 sm:px-8' onClick={handleRegister}>Get Started</button>
              </div>
            </div>
          </div>
          <div className='bg-[#000] w-full px-4 py-6 mb-2 flex flex-col justify-center items-center text-textColor'>
            <div className='text-[30px] py-1 font-bold text-primary flex justify-center items-center'>Buy Us A Coffee <span className='pl-2 text-textColor'><FaCoffee /></span></div>
            <p className='text-sm'>please Support the bright minds behind this</p>
            <div>
              <button className='py-3 px-8 bg-primary mt-2 rounded-lg text-[#000]'>Support</button>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </main>
    </Fragment>
  )
}

export default Home