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
  return (
    <main className="min-h-screen flex">
      <AuthBanner>
        <form className="" onSubmit={(e)=>{
          e.preventDefault()
          console.log(state);
          axios.post('https://link-a-share.herokuapp.com/signup.php',state)
          .then(res=>{
            console.log(res)
          })
          .catch(err=>{
            console.error(err)
          })
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
            <button className="p-5 py-4 text-white hover:bg-dark transition-colors my-6 w-full bg-primary">
              Create an Account
            </button>
          </div>
        </form>
      </AuthBanner>
    </main>
  );
};

export default Register;
