import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import {FaStar, FaUser} from 'react-icons/all';
import Input from "../Components/Input";
import {Helmet} from 'react-helmet';
import {get as StorageGet} from '../Utils/storage'
import Dashboard from '../Components/Dashboard';



const Redirect = ()=>{
    window.location.assign('/login')
    return(
        null
    )
}


const Account = () => {
    let useId = StorageGet()
    return(
      <Fragment>
        {
              useId ? <Dashboard /> : <Redirect />
        }
    </Fragment>
    )
}


export default Account;