import Axios from '../Config/axios';
import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import AuthBanner from '../Layout/AuthBanner';
import { Post } from '../Utils/request';
import {save as StorageSave} from '../Utils/storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [state, setState] = useState({
    username:'',
    password:''
  })

  const [progress, setProgress] = useState({
    error:[false, undefined],
    loading:false
  })
  const validateForm = () => {
          setProgress({
               loading:false,
               error:[true, undefined]
             })
          let isValid = true
          if(state.username == '' || state.password == ''){
            isValid = false
            console.log('err')
            toast.error('Please fill out this field', {
                position: toast.POSITION.TOP_CENTER
            });    }

          return isValid
  }
  return (
    <main className="min-h-screen flex bg-dark text-white">
    <AuthBanner heading='Login to Your Account' subHeading='Welcome Back, Continue from where you stopped' suggest={(
      <p className='absolute top-0 text-xs p-4'>
      <span className="opacity-80"> Don't Have an Account Yet? ?</span> <Link to='/register' className='text-primary transition-all underline hover:decoration-double'>Sign up</Link>
        </p>
    )}>
      <form className="" onSubmit={(e)=>{
       e.preventDefault();
       //  validate 

         setProgress({
           ...progress,
           loading:true
         })
    if(validateForm()) {
         Post('/login.php',state,(res,err)=>{
           setProgress({
               loading:false,
               error:[true, undefined]
             })
             
             // data
             console.log(res)
            if(res.data[0] == 'Success'){
              //  save
              StorageSave(state.username);
              window.location.assign('/account')
            }                 
            else if(res.data[0] == 'Mismatch'){
              toast.error('password is incorrect', {
                position: toast.POSITION.TOP_CENTER
              });  
              return false
            }
            else if(res.data[0] == 'N/A'){
              toast.error('User does not exist', {
                position: toast.POSITION.TOP_CENTER
              });  
              return false
            }

         })
  }
      }}>

        <Input
          type="username"
          label="Username"
          placeholder="praisecode"
           onChange={(e:any)=> setState({...state,username:e.target.value})}
          icon={<FaEnvelope />}
        />

        <Input
          type="password"
          label="Password"
          placeholder="*******"
           onChange={(e:any)=> setState({...state,password:e.target.value})}
          icon={<FaLock />}
        />

        <Link
          className="underline hover:decoration-double text-primary"
          to="/forgotten-password"
        >
          Forgotten Password?
        </Link>
        <div>
          <button disabled={progress.loading} className={`p-5 py-4 text-white hover:text-dark hover:bg-white transition-colors my-6 cursor-pointer w-full bg-primary disabled:pointer-events-none disabled:opacity-60 disabled:select-none`}>
            {progress.loading ?(
              <div className="">
                Please Wait ...
              </div>
            ): 'Login into Account'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </AuthBanner>
  </main>
  )
}

export default Login