import axios from 'axios';
import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import AuthBanner from '../Layout/AuthBanner';




const Login = () => {
    const [state, setState] = useState({
    email:'',
    password:''
  })
  return (
    <main className="min-h-screen flex">
    <AuthBanner>
      <form className="" onSubmit={(e)=>{
        e.preventDefault()
        console.log(state);
      
        axios.post('https://linkashapii.herokuapp.com/login.php',state)
        .then(res=>{
          console.log(res)
        })
        .catch(err=>{
          console.error(err)
        })
      }}>

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
  )
}

export default Login