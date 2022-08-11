import React, { useState } from "react";
import AuthBanner from "../Layout/AuthBanner";
import {FaEnvelope, FaLock, FaUser} from 'react-icons/all';
import { Link, useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import axios from 'axios';
import Axios from "../Config/axios";

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
  let navigate = useNavigate();
  return (
    <main className="min-h-screen flex bg-dark text-white">
    <AuthBanner>
      <form className="" autoComplete="false" onSubmit={(e)=>{
        e.preventDefault()
        setProgress({
          ...progress,
          loading:true
        })
      const validatePassword = () => {
          let isValid = true
          if (state.password !== '' && state.confirmpassword !== ''){
            if (state.password !== state.confirmpassword) {
              isValid = false
              alert('Passwords does not match')
            }
          }
          return isValid
        }

      const validateForm = () => {
        let isValid = true
        if ( state.username == '' || state.password =='') {
          isValid = false
          alert('invalid credentials')
        }
        else if (state.password.length < 6){
          isValid = false
          alert('password is not  strong')
        }

        return isValid
      }
    if(validatePassword() && validateForm()) {
      fetch("https://linkashapii.herokuapp.com/signup.php", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(state)
      })
      .then(res=>res.json())
      .then((data)=>{
        console.log(data)
          setProgress({
            loading:false,
            error:[false,undefined]
          })
          if(data[0] == 'Success'){
            alert('Signed Up Successfully')
            navigate('/account/' + state.username)

          }
      })
      .catch((err)=>{
          setProgress({
            loading:false,
            error:[true, err.message]
          })
      });

    }
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

        <Input
          type="password"
          label="confirm password"
          placeholder="*******"
           onChange={(e:any)=> setState({...state,confirmpassword:e.target.value})}
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
