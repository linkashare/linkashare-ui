import React, { useState } from "react";
import AuthBanner from "../Layout/AuthBanner";
import {FaEnvelope, FaLock, FaUser} from 'react-icons/all';
import { Link } from "react-router-dom";
import Input from "../Components/Input";
import axios from 'axios';

const Register = () => {
  const [state, setState] = useState({
    username:'',
    email:'',
    password:''
  })

  const [progress, setProgress] = useState({
    error:[false, undefined],
    loading:false
  })
  return (
    <main className="min-h-screen flex bg-dark text-white">
    <AuthBanner>
      <form className="" onSubmit={(e)=>{
        e.preventDefault()
        console.log(state);
      
       
      }}>

        <Input
          type="text"
          label="Username"
          placeholder="johnDoe"
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

        <Link
          className="underline hover:decoration-double text-primary"
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
    </AuthBanner>
  </main>
  );
};

export default Register;
