import { useState } from "react";
import { Menu, Switch, Transition } from '@headlessui/react'
import {logo} from '../Assets/index'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [enabled, setEnabled] = useState(false)
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
    const handleRegister = () => {
        navigate('/register')
    }
    return ( 
        <div className='w-full fixed'>
            {/* For pc view */}
            <div className="hidden lg:flex xl:flex sm:hidden md:hidden py-6 px-[2rem] shadow-lg bg-[#000116] text-textColor justify-between">
                <div>
                    <a href="/" className="flex">
                        <img src={logo} alt="logo image" className='w-[2rem] h-[2rem]' />
                        <div className='brand-name'>Linkashare</div>
                    </a>
                </div>
                <div className="flex">
                    {/* <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                            enabled ? 'bg-blue-600' : 'bg-textColor'
                        } relative inline-flex h-6 w-11 items-center rounded-full mt-2 mr-2`}
                        >
                        <span
                            className={`${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-black`}
                        />
                    </Switch> */}
                    <button className='bg-primary mr-4 text-sm px-7 rounded-lg' onClick={handleRegister}>Register</button>
                    <button className='px-3 text-sm' onClick={handleLogin}>Login</button>
                </div>
            </div>

            {/* for smaller devices */}

            <div className="flex lg:hidden xl:hidden sm:flex md:flex py-3 px-[2rem] shadow-md bg-dark text-textColor justify-between">
                <div>
                    <a href="/" className="flex">
                        <img src={logo} alt="logo image" className='w-[2.5rem] h-[2.5rem]' />
                    </a>
                </div>   
                <Menu as="div" className="flex z-50 text-left relative">
            <Menu.Button>
              <div>
                <GiHamburgerMenu className="nav-btn"/>
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
              <Menu.Items className="z-40  shadow-lg absolute right-0 top-10 w-56 origin-top-right divide-y divide-primary rounded-md bg-[#272727] ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                    <a href="/register" className="text-sm group flex w-full items-center rounded-md px-[20px] py-[15px]">Create An Account</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/login" className="text-sm group flex w-full items-center rounded-md px-[20px] py-[15px]">Login</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/about" className="text-sm group flex w-full items-center rounded-md px-[20px] py-[15px]">About Us</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/github" className="text-sm group flex w-full items-center rounded-md px-[20px] py-[15px]">Github</a>
                </Menu.Item>

              </Menu.Items>
            </Transition>
          </Menu>         
            </div>

        </div>
     );
}
 
export default Navbar;