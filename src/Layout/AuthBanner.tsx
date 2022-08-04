import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Components/Input'
import {FaEnvelope, FaLock, FaUser} from 'react-icons/all';


const AuthBanner = () => {
  return (
    <Fragment>
    <div className=" w-1/2 flex items-center">
        <p className='absolute top-0 text-xs p-4'>
      <span className="opacity-80"> Have an account ?</span> <Link to='/signin' className='text-primary transition-all underline hover:decoration-double'>Sign in</Link>
        </p>
        {/*  */}


    <div className="p-12">
    <div className="py-1">
        <h1 className='text-5xl'>Create new account.</h1>
        <p className='text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    <div className="">

    <Input type='text' label='Username' placeholder='johnDoe' icon={<FaUser />} />
   
    <Input type='email' label='E-mail' placeholder='example@mail.com' icon={<FaEnvelope />} />

    <Input type='password' label='Password' placeholder='*******' icon={<FaLock />} />

    <Link className='underline hover:decoration-double text-primary' to='/forgotten-password'>Forgotten Password?</Link>
    <div>
    <button className='p-5 py-4 text-white hover:bg-dark transition-colors my-6 w-full bg-primary'>Create an Account</button>
      </div>
    </div>

    </div>


    </div>
       <div className="bg-primary w-1/2 min-h-full"></div>
    </Fragment>
  )
}

export default AuthBanner