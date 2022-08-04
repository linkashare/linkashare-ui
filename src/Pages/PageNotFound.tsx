import Navbar from "../Components/Navbar";
import { errorImg } from "../Assets/index";
import { useNavigate } from "react-router-dom";
const PageNotFound = () =>{
    let navigate = useNavigate();
    const handleHome = () => {
        navigate('/')
    }
    return(
        <div className="">
            <header>
                <Navbar />
            </header>
            <div className="flex bg-dark text-textColor h-screen pt-[4rem] flex-row justify-between">
                <div className="pl-[3rem] pt-[9rem]">
                    <div className="text-[3rem] font-gotham text-primary">Oops!</div>
                    <p className="w-[80%] py-2">We could not find that page. Please go back to the home page</p>
                    <button onClick={handleHome} className="bg-primary px-5 py-3 mt-3 rounded-full">Back To Homepage</button>
                </div>
                <div className="pt-9">
                    <img src={errorImg} alt="page not found" />
                </div>
            </div>
        </div>
    )
}
export default PageNotFound;