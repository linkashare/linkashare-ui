import { useState } from "react";
import {logo} from '../Assets/index'
import { useNavigate } from "react-router-dom";
import { clear as clearStorage} from '../Utils/storage'

const DashboardNavbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        clearStorage()
        navigate("/");
    };
    return ( 
        <div className='w-full fixed'>
            {/* For pc view */}
            <div className="hidden lg:flex xl:flex sm:hidden md:hidden py-3 px-[2rem] shadow-lg bg-[#000116] text-textColor justify-between">
                <div>
                    <a href="/" className="flex">
                        <img src={logo} alt="logo image" className='w-[2rem] h-[2rem]' />
                        <div className='brand-name'>Linkashare</div>
                    </a>
                </div>
                <div>
                    <button className='bg-primary mr-4 px-5 py-2 rounded-lg' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar;