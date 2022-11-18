import { useState } from 'react'
import { Fragment } from 'react'
import {Helmet} from 'react-helmet';
import Navbar from "../Components/Navbar"
import {linklogo, rocket} from "../Assets/index"
import { FaCoffee } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [newUrl, setNewUrl] = useState('');
  const [showText, setShowText] = useState(false)
  const [state, setState] = useState({
    url:'',
  })
  const [progress, setProgress] = useState({
    error:[false, undefined],
    loading:false
  })
  const validateForm = () => {
    let isValid = true
    if(state.url == ''){
      isValid = false
      toast.error('Please fill out this field', {
          position: toast.POSITION.TOP_CENTER
      });    }

    return isValid
  }
  const handleSubmit = () => {
    setProgress({
      ...progress,
      loading:true
    })
    if(validateForm()) {
      setShowText(true)
      fetch("https://linkashapii.herokuapp.com/shortenlink.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
      })
      .then(res=>res.json())
      .then((data)=>{setNewUrl(data[0])})
      .catch((error)=>{
        if(error.message == 'Failed to fetch'){
          toast.error('Turn on your internet connection', {
              position: toast.POSITION.TOP_CENTER
          });
        }
      });
           setProgress({
               loading:false,
               error:[true, undefined]
             })

    }
  }
  return (
    <Fragment>
      <Helmet>
        <title>Link-A-share | Home</title>
      </Helmet>
        <main id="home" className=''>
          <header>
            <Navbar />
          </header>
        

        <div className=" flex flex-col-reverse md:flex-row bg-dark justify-around  items-center text-textColor min-h-screen">

      <div className=''>
    <img src={rocket} alt="" className="absolute top-[10%] w-[150px]  left-[30%] opacity-10"/>
    <img src={linklogo} alt="" className="lg:max-w-[400px] lg:flex hidden"/>
      </div>


    {/* right side  */}

    <div className="px-5  md:translate-y-[-20%]">
   <div className=" text-center md:text-left pt-[2rem]">
      <h1 className="font-gotham text-5xl py-4">Linkashare</h1>
     <p className='capitalize text-xl font-bold py-2'>Edit links . <span className='text-primarycolor'>keep links in sync</span> . save links</p> 
   </div>

    <div className='w-full flex lg:flex-row md:flex-row pt-4 sm:flex-col lg:justify-start justify-center items-center'>
      <input type="text"
            className='lg:w-[100%] h-[3rem] rounded-lg outline-none bg-[#3E41DD] text-textColor pl-4 w-[80%]'
            required 
            placeholder="Enter a url"
            onChange={(e:any)=> setState({...state,url:e.target.value})}

      />
      <div className="flex justify-center items-center">
        <button className='bg-primarycolor lg:mt-0 mt-[1.5rem] text-[#000] lg:relative lg:right-[100px] placeholder:text-[#fff] py-2 px-5 font-bold rounded-lg z-50' type="submit"  onClick={handleSubmit}>submit</button>  
      </div>
    </div> 
     {showText && (<div className='pt-3 text-center lg:text-left'>Your Shortened Link is: {progress.loading ?(
  <span className="">
    Please Wait ...
  </span>
):<span><a href={newUrl} target="_blank" className='cursor-pointer hover:text-primarycolor'>{newUrl}</a></span>}</div>)}

<ToastContainer />
    </div>
        </div>
        <div className='bg-[#000]  w-full px-2  py-4 lg:px-[6rem] flex flex-row justify-between items-center text-textColor'>
<div className='lg:text-[30px] text-[20px] py-1 px-3 font-bold text-primary flex justify-center items-center'>Buy Us A Coffee <span className='lg:pl-2 text-textColor'><FaCoffee /></span></div>

  <button className='lg:py-3 lg:px-8 py-2 px-3 mx-3 bg-primary font-bold mt-2 rounded-lg text-[#000]'>Support</button>
</div>

        </main>
    </Fragment>
  )
}

export default Home

