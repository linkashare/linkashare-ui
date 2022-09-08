import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { Post } from "../Utils/request";
import { clear as clearStorage, get as getStorage } from '../Utils/storage'
import { FaPlus, FaSpinner, FaTrash } from "react-icons/fa";

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
    username: useId,
    title: "",
    fullurl: "",
    category: "",
  });


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
        if(err) return console.log('an error occured') 
    } );
}
  // logout
  const handleLogout = () => {
    clearStorage()
    navigate("/");
  };

  let userdetails = {
    username: useId,
  };


  const handleModal =() =>{
    if (validateModal()){
    Post('/storelinkinfo.php', link, (data, err) =>{
        if(err) return console.log('an error occured')
        setShowModal(false)
    } );
    }
}
    

    //DOM LOADED   
  useEffect(()=>{
    //   user info
   Post('/getuserinfo.php', userdetails, (data, err) =>{
        if(err) return console.log('an error occured')
        setUserInfo({...userInfo, ...data['data']}) 
        setLoading(false)
    } );

   

   Post('/getalllinks.php', userdetails, (data, err) =>{
        if(err) return console.log('an error occured') 
       if(data.data[0] !='N/A'){
        setLinks([...data['data']])
        setLoading(false)
       }
    } );

   Post('/getfavourites.php', userdetails, (data, err) =>{
        if(err) return console.log('an error occured')
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
        // console.log(data)
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
          
        <button className='bg-primary  lg:m-12 hover:text-dark hover:bg-white  cursor-pointer lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] flex items-center justify-center text-xl fixed lg:bottom-0 lg:right-0 bottom-2 right-[50%] rounded-full  ease-linear transition-all duration-150' onClick={() => setShowModal(true)}><FaPlus /></button>
 
        <div className="flex flex-row pt-4 px-[2rem] justify-between">
        <div className="capitalize text-[30px]">
            welcome, <span className="font-gotham text-primary">{userInfo.username || 'User'}</span>
        </div>
    <div>
        <button
        className="bg-primary px-[2rem] py-2 rounded-lg"
        onClick={handleLogout}
        >
        Logout
        </button>
    </div>
    </div>
    <div className="w-full flex mt-8 px-3 lg:px-12 justify-between ">
    <div className="lg:h-[10rem] lg:w-[15rem] w-max bg-[#1F1F1F] rounded-2xl lg:pl-2 pt-2 cursor-pointer px-5">
        <div className="lg:pl-4 lg:text-[25px] lg:text-left text-xl text-center ">Total Links</div>
        <div className="lg:pl-4 text-[40px] lg:text-left text-center text-primary">{links.length || '0'}</div>
    </div>
   
    <div className="lg:h-[10rem] lg:w-[15rem] bg-[#1F1F1F] rounded-2xl px-5 lg:pl-2 pt-2 w-1/3 mx-3">
        <div className="lg:pl-4 lg:text-[25px] lg:text-left text-xl text-center">Starred Links</div>
        <div className="lg:pl-4 text-[40px] lg:text-left text-center text-primary">{favouritesNo || '0'}</div>
    </div>

    <div className="w-1/3 lg:h-[10rem] lg:w-[15rem] bg-[#1F1F1F] rounded-2xl pl-2 pt-2 px-5">
        
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
    <div className="py-3 pl-6 lg:text-[30px] text-[20px] text-primary">
    Keep your links in sync
    </div>
    
    <div className="flex flex-row justify-between text-4xl font-bold px-8 py-3">
    <div>Favourites </div>

    </div>
    
    {showModal ? (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  w-[75vw] my-6 mx-auto max-w-3xl">
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
    
    <div className="w-full lg:px-14 sm:px-8 pb-5">
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
                <a
                    target="_blank"
                    className="py-6 px-8 my-3 flex flex-auto justify-between bg-[#1F1F1F] rounded-2xl"
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
                    <div onClick={()=> deleteLink(data.title) } className='text-xl text-red-400 cursor-pointer'>
                        <FaTrash />
                    </div>
                   </div>
                </a>
                </div>
               ):<span></span>
               
             }
             )}
        </div>
      ):(<h2 className='text-2xl py-4'>No links added yet</h2>)
  }
    </div>
    
    <div className="flex flex-row justify-between text-4xl font-bold px-8 py-3">
    <div>All Links</div>
    {/* <div>
        <button
        className="text-[30px] hover:text-primary ease-linear transition-all duration-150"
        onClick={() => setShowModal(true)}
        >
        +
        </button>
    </div> */}
    </div>
    
    <div className="w-full lg:px-14 sm:px-8 pb-5">
  {
      links.length > 0?(
        <div className="">
        {links
            
             .map(
             (data: {
                 title: string;
                 isFavourite:string,
                 fullurl: string | undefined;
                 timeAdded: string | number | boolean;
             }) => {
                 return (
                     <div key={data.title}>
                     <a
                         target="_blank"
                         className="py-6 px-8 my-3 flex flex-auto justify-between bg-[#1F1F1F] rounded-2xl"
                     >
                         <div>
                         <div className="text-primary pb-3 text-[25px] font-bold">
                            <a href={data.fullurl}>
                            {data.title}
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
                     </a>
                     </div>
                 );
             }
             )}
        </div>
      ):(<h2 className='text-2xl py-4'>No links added yet</h2>)
  }
    </div>

            </>
        )
    }
    </main>
      );
};

export default Dashboard;
