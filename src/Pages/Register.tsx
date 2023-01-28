import React, { useState } from "react";
import AuthBanner from "../Layout/AuthBanner";
import {FaEnvelope, FaLock, FaUser} from 'react-icons/all';
import { Link, useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import {Post} from '../Utils/request';
import { save as StorageSave } from '../Utils/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from 'react-helmet';

const Register = () => {
  const [state, setState] = useState({
    username:'',
    email:'',
    password:'',
    confirmpassword:'',
  })

  const [progress, setProgress] = useState({
    error:[false, undefined],
    loading:false
  })
  const validatePassword = () => {
      setProgress({
        loading:false,
        error:[true, undefined]
      })
      let isValid = true
      if (state.password !== '' && state.confirmpassword !== ''){
        if(state.password.length < 6){
          isValid = false
            toast.error('password is weak', {
                position: toast.POSITION.TOP_CENTER
            }); 
        }
        else if (state.password !== state.confirmpassword) {
          isValid = false
            toast.error('password does not match', {
                position: toast.POSITION.TOP_CENTER
            });  
        }

      }
      return isValid
    }
    const validateForm = () => {
          setProgress({
               loading:false,
               error:[true, undefined]
             })
          let isValid = true
          if(state.username == '' || state.email == '' || state.password == '' || state.confirmpassword == ''){
            isValid = false
            toast.error('Please fill out this field', {
                position: toast.POSITION.TOP_CENTER
            });   
           }

          return isValid
  }
  return (
    <main className="min-h-screen flex bg-dark text-white">
      <Helmet>
        <title>Linkashare | register</title>
        <meta name='robots' content='index'/>
      </Helmet>
    <AuthBanner subHeading='Welcome, Keep your links in sync'>
      <form className="" autoComplete="false" onSubmit={(e)=>{
        e.preventDefault();
        //  validate 
          setProgress({
            ...progress,
            loading:true
          })
        if(validatePassword() && validateForm()) {
          Post('/signup.php',state,(res,err)=>{
            setProgress({
                loading:false,
                error:[true, undefined]
              })
               
                 // data
                 if(res.data[0] == 'Success'){
                  //  save
              setProgress({
                loading:true,
                error:[true, undefined]
              })
                  StorageSave(state.username);
                  window.location.assign('/account')
                 }
                 else if(res.data[0] == 'Exists'){
                  toast.error('Account already exists', {
                    position: toast.POSITION.TOP_CENTER
                  });  
                  return false
                 }
          })
        }
      }}>

        <Input
          type="text"
          label="Username"
          placeholder="Praisecode"
           onChange={(e:any)=> setState({...state,username:e.target.value})}
          icon={<FaUser />}
        />
        <Input
          type="email"
          label="E-mail"
          placeholder="example@mail.com"
           onChange={(e:any)=> setState({...state,email:e.target.value})}
          icon={<FaEnvelope />}
        />

        <Input
          type="password"
          label="Password"
          placeholder="*******"
           onChange={(e:any)=> setState({...state,password:e.target.value})}
          icon={<FaLock />}
        />

        <Input
          type="password"
          label="confirm password"
          placeholder="*******"
           onChange={(e:any)=> setState({...state,confirmpassword:e.target.value})}
          icon={<FaLock />}
        />

        <Link
          className="underline hover:decoration-double text-primarycolor"
          to="/forgotten-password"
        >
          Forgotten Password?
        </Link>
        <div>
          <button disabled={progress.loading} className={`p-5 py-4 hover:text-dark hover:bg-white transition-colors my-6 cursor-pointer w-full bg-primary disabled:pointer-events-none disabled:opacity-60 disabled:select-none`}>
            {progress.loading ?(
              <div className="">
                Please Wait ...
              </div>
            ): 'Create an Account'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </AuthBanner>
  </main>
  );
};

export default Register;
