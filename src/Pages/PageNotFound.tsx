import Navbar from "../Components/Navbar";
import { errorImg } from "../Assets/index";
import {Helmet} from 'react-helmet';
import { useNavigate } from "react-router-dom";
const PageNotFound = () =>{
    let navigate = useNavigate();
    const handleHome = () => {
        navigate('/')
    }
    return(
        <div className="">
            <Helmet>
                <title>Link-A-share | 404</title>
            </Helmet>
            <header>
                <Navbar />
            </header>
            <div className="flex text-center bg-dark lg:text-left text-textColor h-screen
                pt-[6rem] lg:flex-row lg:justify-between  md:pl-0 
                md:flex md:justify-center md:items-center md:flex-col md:text-center
                sm:flex sm:flex-col sm:text-center
                md:pt-0 sm:pt-[9rem]">
                <div className="lg:pl-[3rem]">
                    <div className="text-[3rem] font-gotham text-primary">Oops!</div>
                    <p className="lg:w-[80%] py-2">We could not find that page. Please go back to the home page</p>
                    <button onClick={handleHome} className="bg-primary px-5 py-3 mt-3 rounded-full">Back To Homepage</button>
                </div>
                <div className="hidden lg:flex xl:flex pt-9 md:hidden sm:hidden">
                    <img src={errorImg} alt="page not found" />
                </div>
            </div>
        </div>
    )
}
export default PageNotFound;