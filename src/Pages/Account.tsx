import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import {FaEnvelope, FaLock, FaUser} from 'react-icons/all';
import { Link, useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import {Helmet} from 'react-helmet';

const Account = () => {
    const [username, setUsername] = useState('')
    const [showForm, setShowForm] = useState(false)
    const params = useParams()


    let useId = params.userid;

    let details = {
    "username": useId,
    }
    const [state, setState] = useState({
    "username": useId,
    title: "",
    fullurl: "",
    category: ""
    })

    fetch("https://linkashapii.herokuapp.com/getuserinfo.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    })
    .then(res=>res.json())
    .then((data)=>{setUsername(data.username)})
    .catch((err)=>{console.log(err)});

    useEffect(() =>{
        console.log(details)
    fetch("https://linkashapii.herokuapp.com/getalllinks.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(details)
    })
    .then(res=>res.json())
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)});
    }, [])

    const handleform = () =>{
        setShowForm(true)
    }
    
    return(
    <Fragment>
      <Helmet>
        <title>Link-A-share | dashboard</title>
      </Helmet>
        <main className='bg-dark text-textColor'>
            <div className='flex flex-row pt-4 px-[2rem] justify-between'>
                <div className='capitalize text-[30px]'>welcome, <span className='font-gotham text-primary'>{username}</span></div>
                <div>
                    <button className='bg-primary px-[2rem] py-2 rounded-lg' >logout</button>
                </div>
            </div>
            <div className='mt-8 px-9 justify-between flex flex-row'>
                <div className='h-[10rem] w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2 cursor-pointer'>
                    <div className='pl-4 text-[25px]'>Total Links</div>
                    <div className='pl-4 text-[40px] text-primary'>0</div>
                </div>
                <div className='h-[10rem] w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2 cursor-pointer'>
                    <div className='pl-4 text-[25px] capitalize'>most visited</div>
                    <div className='pl-4 pt-4 text-[20px] text-primary'>my github</div>
                </div>
                <div className='h-[10rem] w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2 cursor-pointer'>
                    <div className='pl-4 text-[25px]'>Starred Links</div>
                    <div className='pl-4 text-[40px] text-primary'>0</div>
                </div>
                <div className='h-[10rem] w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2'>
                    <div className='pl-4 text-[25px]'>Total Links</div>
                    <div className='pl-4 text-[40px] text-primary'>0</div>
                </div>
            </div>
            <div className='py-3 pl-6 text-[30px]'>Keep your links in sync</div>
            <div className='flex flex-row justify-between px-8 py-1'>
                <div>All Links</div>
                <div>
                    <button className='text-[30px] hover:text-primary' onClick={handleform}>+</button>
                </div>
            </div>

            {showForm && (<div className='md:w-1/2 flex items-center'>
                <div>
                    <form className=" p-5" autoComplete="false" onSubmit={(e)=>{
                        e.preventDefault()
                        console.log(state)

                        fetch("https://linkashapii.herokuapp.com/storelinkinfo.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(state)
                    })
                    .then(res=>res.json())
                    .then((data)=>{console.log(data)})
                    .catch((err)=>{console.log(err)});

                      }}>
                    <Input
                        type="text"
                        label="title"
                        placeholder="My Portfolio"
                        onChange={(e:any)=> setState({...state,title:e.target.value})}
                        icon={<FaUser />}
                    />
                    <Input
                        type="text"
                        label="url"
                        placeholder="Enter Url"
                        onChange={(e:any)=> setState({...state,fullurl:e.target.value})}
                        icon={<FaUser />}
                    />
                    <Input
                        type="text"
                        label="Category"
                        placeholder="Enter A Category"
                        onChange={(e:any)=> setState({...state,category:e.target.value})}
                        icon={<FaUser />}
                    />
                    <div>
              <button className={`p-5 py-4 hover:text-dark hover:bg-white transition-colors my-6 cursor-pointer w-full bg-primary disabled:pointer-events-none disabled:opacity-60 disabled:select-none`}> submit </button>
                    </div>
                    </form>
                </div>
            </div>)}
            
        </main>
    </Fragment>
    )
}


export default Account;