import { useState } from "react";
import { Menu, Switch, Transition } from '@headlessui/react'
import {logo} from '../Assets/index'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { clear as clearStorage} from '../Utils/storage'
import { FaEllipsisV } from "react-icons/fa";

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

             <div className="flex lg:hidden xl:hidden sm:flex md:flex py-3 px-[2rem] shadow-md bg-[#000116] text-textColor justify-between">
                <div className="flex justify-center items-center">
                    <a href="/" className="flex">
                        <img src={logo} alt="logo image" className='w-[2.5rem] h-[2.5rem]' />
                    </a>
                    <div className='brand-name'>Linkashare</div>
                </div>   
                <Menu as="div" className="flex z-50 text-left relative">
            <Menu.Button>
              <div>
                <FaEllipsisV className="nav-btn"/>
              </div>
            </Menu.Button>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="z-40 cursor-pointer shadow-lg absolute right-0 top-10 w-[146px] origin-top-right divide-y divide-primary rounded-md bg-[#192236] ring-1 ring-black ring-opacity-5 focus:outline-none" onClick={handleLogout} >
                <Menu.Item>
                <div>
                    <button className='pl-3 py-2 rounded-lg'>Logout</button>
                </div>                
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>         
            </div>

        </div>
    );
}

export default DashboardNavbar;