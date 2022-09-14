import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { Post } from "../Utils/request";
import { clear as clearStorage, get as getStorage } from '../Utils/storage'
import { FaPlus, FaSpinner, FaTrash } from "react-icons/fa";
import DashboardNavbar from "./DashboardNavbar";
import {linkimg, star, add} from '../Assets/index'
import { ToastContainer, toast } from 'react-toastify';


const Dashboard = () => {
  let navigate = useNavigate();
  let useId = getStorage()
    const [isLoading, setLoading] = useState(true);
    const [favouritesNo , setFav] = useState(0);
  const [userInfo, setUserInfo] = useState<any>({
    dateJoined: "",
    email: "",
    username: ""
  });
  const [links, setLinks] = useState<{
    category: "",
    fullurl: "",
    isFavourite: "",
    timeAdded: "",
    title: "",
    username: ""
  }[]>([]);

  const [link, setLink] = useState({
    category: '',
    fullurl: '',
    title: '',
    username: useId
  });

  const [addFavourite, setFavourite] = useState({
      username:useId,
      title:''
  })
  const [showModal, setShowModal] = useState(false);

  const [state, setState] = useState({
    category: "",
    fullurl: "",
    isFavourite: "",
    timeAdded: "",
    title: "",
    username: ""
  });
  const [dataLength, setDatalength] = useState(0)

  const validateModal = () => {
    let isValid = true
    if ( link.title == '' || link.fullurl == '') {
      isValid = false
      alert('invalid credential')
    }

    return isValid
  }
const HandleFavourite=(_data:any)=>{
    setFavourite({...addFavourite, title:_data['title']})
    let toggle = _data['isFavourite'] =='true' ? 'false' : 'true'
    Post('/updatefavourites.php?toggle='+ toggle, addFavourite, (data, err) =>{
        if(err) return toast.error('an error occured') 
    } );
}
  let userdetails = {
    username: useId,
  };


  const handleModal =() =>{
    if (validateModal()){
    Post('/storelinkinfo.php', link, (data, err) =>{
        if(err) return toast.error('an error occured')
        setShowModal(false)
        if(dataLength === 1){
            window.location.reload()
        }
 
    } );
    }
}
    

    //DOM LOADED   
  useEffect(()=>{
    //   user info
   Post('/getuserinfo.php', userdetails, (data, err) =>{
        if(err) return toast.error('an error occured')
        setUserInfo({...userInfo, ...data['data']}) 
        setLoading(false)
    } );


   Post('/getalllinks.php', userdetails, (data, err) =>{
        if(err) return toast.error('an error occured') 
        let array = data.data.length
        setDatalength(array)
        
       if(data.data[0] !='N/A'){
        setLinks([...data['data']])
        setLoading(false)
       }
    } );

   Post('/getfavourites.php', userdetails, (data, err) =>{
        if(err) return toast.error('an error occured')
        if(data.data[0] == 'N/A'){
            setFav(0)
        }
        else{
            setFav(data.data.length)
        }
    } );


  },[links,addFavourite,link]);


  const deleteLink= (title:string)=>{
    Post('/deletelink.php',{
        username:useId,
        title
    }, (data, err)=>{

        let lastLink = data.data[0]
        if(lastLink == 'N/A'){
            links.length = 0

        }
    })
  }

  

  return (
    <main className="bg-dark min-h-screen text-white">
    {
        isLoading ? (
            <div className='p-5 text-4xl flex items-center gap-6'>
                <FaSpinner className='spinning' />
                <h3 className='text-xl'>Loading...</h3>
            </div>
        ): (
        <>
            <div>
                <DashboardNavbar/>
            </div>
            <div className="flex justify-center items-center">
                <button className='bg-primary  lg:m-12 hover:text-dark hover:bg-white  cursor-pointer lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] flex items-center justify-center text-xl fixed lg:bottom-0 lg:right-0 bottom-2 rounded-full  ease-linear transition-all duration-150' onClick={() => setShowModal(true)}><FaPlus /></button>
            </div>
            <div className="lg:px-[4rem] px-[1.5rem]">
            <div className='flex absolute w-[100px] h-[100px] lg:w-[400px] lg:h-[400px] left-[249px] top-[-50px] bg-[#4246FF] -z-50 blur-[400px] bg-blend-darken'></div>

            <div className="capitalize lg:text-[30px] text-[25px] pt-[80px] font-bold">
                welcome, <span className="font-gotham text-primarycolor">{userInfo.username || 'User'}</span>
            </div>

            <div className="w-full flex mt-8 justify-between flex-col lg:flex-row">

                <div className="flex lg:flex-row items-center pl-5 h-[130px] lg:w-[400px] lg:h-[189px] bg-secondry rounded-2xl lg:pl-[2rem] pt-2 cursor-pointer">
                    <div>
                        <img src={linkimg} alt="" className="w-[80px] lg:w-max"/>
                    </div>
                    <div className='pl-3 lg:pl-0'>
                        <div className="lg:pl-4 lg:text-[25px] lg:text-left text-xl text-center ">Total Links</div>
                        <div className="lg:pl-4 text-[40px] lg:text-left  text-primary">{links.length || '0'}</div>
                    </div>
                </div>

                <div className="flex lg:flex-row items-center pl-5 h-[130px] lg:w-[400px] lg:h-[189px] bg-secondry rounded-2xl lg:pl-[2rem] pt-2 cursor-pointer my-3 lg:my-0">
                    <div>
                        <img src={star} alt="" className="w-[80px] lg:w-max"/>
                    </div>
                    <div>
                        <div className="lg:pl-4 lg:text-[25px] lg:text-left text-xl text-center">Starred Links</div>
                        <div className="lg:pl-4 text-[40px] lg:text-left text-primary">{favouritesNo || '0'}</div>
                    </div>
                </div>

                <div className="flex lg:flex-row items-center pl-5 h-[130px] lg:w-[400px] lg:h-[189px] bg-secondry rounded-2xl lg:pl-[2rem] pt-2 cursor-pointer">
                    <div>
                        <img src={add} alt="" className="w-[80px] lg:w-max"/>
                    </div>
                    <div>
                        <a href={links.length > 0? links[links.length-1].fullurl : ''} target="_blank">
                            <div className=" ">
                                <div className="pl-4 lg:text-[25px] text-left text-xl">Last Added</div>
                                <h3 className="pl-4 text-[20px] text-primary">
                                {links.length > 0? links[links.length-1].title : '-'}
                                </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-5 pl-6 lg:text-[25px] text-[20px] text-primarycolor font-bold">
            Keep your links in sync
            </div>
    
            {showModal ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative  w-[90vw] my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg  shadow-lg relative flex flex-col bg-dark outline-none focus:outline-none">
                    <form
                        className="p-12"
                        autoComplete="false"
                        onSubmit={(e) => {
                        e.preventDefault();
                        }}
                    >
                        <Input
                        type="text"
                        label="Title"
                        placeholder="My Portfolio"
                        onChange={(e: any) =>
                            setLink({ ...link, title: e.target.value })
                        }
                        />
                        <Input
                        type="text"
                        label="Url"
                        placeholder="Enter Url"
                        onChange={(e: any) =>
                            setLink({ ...link, fullurl: e.target.value })
                        }
                        />
                        <Input
                        type="text"
                        label="Category"
                        placeholder="Enter A Category"
                        onChange={(e: any) =>
                            setLink({ ...link, category: e.target.value })
                        }
                        />
                        <div>
                        <button
                            className={`p-0 py-4 hover:text-dark hover:bg-white my-1 cursor-pointer w-full bg-primary disabled:pointer-events-none rounded-lg disabled:opacity-60 disabled:select-none ease-linear transition-all duration-150`}
                            onClick={handleModal}
                        >
                            {" "}
                            submit{" "}
                        </button>
                        <button
                            className={`p-0 py-4 hover:text-dark hover:bg-white my-1 cursor-pointer w-full bg-[red] disabled:pointer-events-none rounded-lg disabled:opacity-60 disabled:select-none ease-linear transition-all duration-150`}
                            onClick={() => setShowModal(false)}
                        >
                            {" "}
                            close{" "}
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
            ) : null}
    <div className="flex lg:flex-row flex-col w-full lg:justify-between pb-4">
        <div className="bg-secondry lg:px-12 px-3 rounded-lg lg:w-1/2">

            <div className="font-bold text-[25px] pt-5">Favourites </div>

            <div className="w-full pb-5">
                {
                    links.length > 0?(
                        <div className="">
                        {links
                            .slice(-4)
                            .map(
                            (data: {
                                title: string;
                                isFavourite:string,
                                fullurl: string | undefined;
                                timeAdded: string;
                            }) => {
                            return data.isFavourite == 'true'? (
                                <div key={data.timeAdded}>
                                <div
                                    className="py-6 px-8 my-3 flex flex-auto justify-between bg-secondrycolor rounded-2xl"
                                >
                                    <div>
                                    <div className="text-primary pb-3 text-[25px] font-bold">
                                    <a href={data.fullurl}>
                                    {data.title}
                                    </a>
                                    </div>
                                    <div className="text-sm">{data.timeAdded}</div>
                                    </div>
                        
                                <div className="flex items-center gap-3">
                                <div onClick={()=> HandleFavourite(data) } className='text-3xl cursor-pointer'>
                                        { data.isFavourite == 'true' ? <AiFillStar />: <AiOutlineStar />}
                                    </div>
                                    <button onClick={()=> deleteLink(data.title) } className='text-xl text-red-400 cursor-pointer'>
                                        <FaTrash />
                                    </button>
                                </div>
                                </div>
                                </div>
                            ):<span></span>
                            
                            }
                            )}
                        </div>
                    ):(<h2 className='lg:text-[25px] text-[20px] capitalize py-4 text-[#79839D] flex justify-center items-center'>No links added yet</h2>)
                }
            </div>
        </div>
        
        <div className="lg:ml-8 bg-secondry lg:px-12 px-3 rounded-lg lg:w-1/2 mt-3 lg:mt-0">

            <div className="font-bold text-[25px] pt-5">All Links </div>

        <div className="w-full pb-5">
            {
                links.length > 0 ?(
                    <div className="">
                    {links
                        
                        .map(
                        (data: {
                            title: string;
                            isFavourite:string,
                            fullurl: string | undefined;
                            timeAdded: string;
                        }) => {
                            return (
                                <div key={data.timeAdded}>
                                <div
                                    className="py-6 px-8 my-3 flex flex-auto justify-between bg-secondrycolor rounded-2xl"
                                >
                                    <div>
                                    <div className="text-primary pb-3 text-[25px] font-bold">
                                        <a href={data.fullurl} target="_blank">
                                            <div>
                                                {data.title}
                                            </div>
                                        </a>
                                    </div>
                                    <div className="text-sm">{data.timeAdded}</div>
                                    </div>
                        
                                    <div className="flex items-center gap-3 lg:pr-14">
                                    <div onClick={()=> HandleFavourite(data) } className='text-3xl cursor-pointer'>
                                        { data.isFavourite == 'true' ? <AiFillStar />: <AiOutlineStar />}
                                    </div>
                                    <div onClick={()=> deleteLink(data.title) } className='text-xl text-red-400 cursor-pointer'>
                                        <FaTrash />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            );
                        }
                        )}
                    </div>
                ):(<h2 className='lg:text-[25px] text-[20px] capitalize py-4 text-[#79839D] flex justify-center items-center'>No links added yet</h2>)
            }
        </div>
        </div>
    </div>
</div>
            </>
        )
    }
    <ToastContainer />

    </main>
      );
};

export default Dashboard;
