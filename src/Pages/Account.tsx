import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import {FaStar, FaUser} from 'react-icons/all';
import Input from "../Components/Input";
import {Helmet} from 'react-helmet';

const Account = () => {
    const [username, setUsername] = useState("")
    const [links, setLinks] = useState<any>([])
    const [totalLinks, setTotalLinks] = useState(0)
    const [showModal, setShowModal] = useState(false);
    const [lastLink, setLastLink] = useState<any>({})
    const params = useParams()
    let useId = params.userid;
    let navigate = useNavigate();

    const handleLogout = () => {
        navigate('/')
    }

    let userdetails = {
        "username": useId,
    }
    const [state, setState] = useState({
        "username": useId,
        title: "",
        fullurl: "",
        category: ""
    })
let details = {
    "username": useId,
    "title": "",
    "fullurl": "",
    "category": ""
}
    fetch("https://linkashapii.herokuapp.com/getuserinfo.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userdetails)
    })
    .then(res=>res.json())
    .then((data)=>{setUsername(data.username)})
    .catch((err)=>{console.log(err)});

    useEffect(() =>{

        fetch("https://linkashapii.herokuapp.com/getalllinks.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            let lastdata = data[data.length - 1]
            setLastLink(lastdata)
            console.log(lastdata)
            setTotalLinks(data.length)
            setLinks(data)
        })
        .catch((err)=>{console.log(err)});
    }, [''])

    const handleModal =() =>{
                    fetch("https://linkashapii.herokuapp.com/storelinkinfo.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(state)
                    })
                    .then(res=>res.json())
                    .then(()=>{
                        setTotalLinks(totalLinks + 1)
                        setShowModal(false)
                    })
                    .catch((err)=>{console.log(err)});
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
                    <button className='bg-primary px-[2rem] py-2 rounded-lg' onClick={handleLogout}>logout</button>
                </div>
            </div>
            <div className='mt-8 px-9 justify-between flex flex-row'>
                <div className='h-[10rem] w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2 cursor-pointer'>
                    <div className='pl-4 text-[25px]'>Total Links</div>
                    <div className='pl-4 text-[40px] text-primary'>{totalLinks}</div>
                </div>
                <div className='h-[10rem] w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2 cursor-pointer'>
                    <div className='pl-4 text-[25px] capitalize'>most visited</div>
                    <div className='pl-4 pt-4 text-[20px] text-primary'>my github</div>
                </div>
                <div className='h-[10rem] w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2 cursor-pointer'>
                    <div className='pl-4 text-[25px]'>Starred Links</div>
                    <div className='pl-4 text-[40px] text-primary'>0</div>
                </div>
                <div>
                <a href={lastLink.fullurl} target='_blank'>
                    <div className='h-[10rem] w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2'>
                        <div className='pl-4 text-[25px]'>Last Added</div>
                        <div className='pl-4 text-[20px] text-primary'>{lastLink.title}</div>
                    </div>
                </a>
                </div>

            </div>
            <div className='py-3 pl-6 text-[30px] text-primary'>Keep your links in sync</div>
                {/* <div>
                    <button className='p-0 py-4 hover:text-dark hover:bg-white transition-colors my-1 cursor-pointer w-full bg-primary disabled:pointer-events-none rounded-lg disabled:opacity-60 disabled:select-none ease-linear transition-all duration-150' onClick={() => setShowModal(true)}>Add New Link</button>
                </div> */}
            <div className='flex flex-row justify-between px-8 py-1'>
                <div>Recently Added</div>
                <div>
                    <button className='text-[30px] hover:text-primary ease-linear transition-all duration-150' onClick={() => setShowModal(true)}>+</button>
                </div>
            </div>

            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-dark outline-none focus:outline-none">
                            <form className=" p-5" autoComplete="false" onSubmit={(e)=>{
                                e.preventDefault();
                            }}>
                                <Input
                                    type="text"
                                    label="title"
                                    placeholder="My Portfolio"
                                    onChange={(e:any)=> setState({...state,title:e.target.value})}
                                
                                />
                                <Input
                                    type="text"
                                    label="url"
                                    placeholder="Enter Url"
                                    onChange={(e:any)=> setState({...state,fullurl:e.target.value})}
                                
                                />
                                <Input
                                    type="text"
                                    label="Category"
                                    placeholder="Enter A Category"
                                    onChange={(e:any)=> setState({...state,category:e.target.value})}
                                
                                />
                            <div>
                                <button className={`p-0 py-4 hover:text-dark hover:bg-white transition-colors my-1 cursor-pointer w-full bg-primary disabled:pointer-events-none rounded-lg disabled:opacity-60 disabled:select-none ease-linear transition-all duration-150`} onClick={handleModal}> submit </button>
                                <button className={`p-0 py-4 hover:text-dark hover:bg-white transition-colors my-1 cursor-pointer w-full bg-[red] disabled:pointer-events-none rounded-lg disabled:opacity-60 disabled:select-none ease-linear transition-all duration-150`} onClick={() => setShowModal(false)}> close </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            <div className='w-full px-8 pb-5'>
                {links.slice(-3).map((data: { title: string ; fullurl: string | undefined; timeAdded: string | number | boolean }) => {
                return (
                    <div key={data.title}>
                            <a href={data.fullurl} target='_blank' className='py-6 px-8 my-3 flex flex-auto justify-between bg-[#1F1F1F] rounded-2xl'>
                                <div>
                                    <div className='text-primary pb-3 text-[25px] font-bold'>
                                        {data.title}
                                    </div>
                                    <div className='text-sm'>
                                        {data.timeAdded}
                                    </div>
                                </div>

                                <div>
                                    <FaStar />
                                </div>
                            </a>
                    </div>
                )}
                )}
            </div>

            <div className='flex flex-row justify-between px-8 py-1'>
                <div>All Links</div>
                <div>
                    <button className='text-[30px] hover:text-primary ease-linear transition-all duration-150' onClick={() => setShowModal(true)}>+</button>
                </div>
            </div>
            

            <div className='w-full px-8 pb-5'>
                {links.map((data: { title: string | number; fullurl: string | undefined; timeAdded: string | number ; }) => {
                return (
                    <div key={data.title}>
                            <a href={data.fullurl} target='_blank' className='py-6 px-8 my-3 flex flex-auto justify-between bg-[#1F1F1F] rounded-2xl'>
                                <div>
                                    <div className='text-primary pb-3 text-[25px] font-bold'>
                                        {data.title}
                                    </div>
                                    <div className='text-sm'>
                                        {data.timeAdded}
                                    </div>
                                </div>

                                <div>
                                    <FaStar />
                                </div>
                            </a>
                    </div>
                )}
                )}
            </div>
        </main>
    </Fragment>
    )
}


export default Account;