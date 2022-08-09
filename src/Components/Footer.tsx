import { FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {

    return(
        <div className="w-full bg-dark ">

            <div className="grid lg:grid-cols-3 gap-4 p-[4rem] md:grid-cols-2 sm:grid-cols-2 sm:gap-6 text-textColor capitalize">

                <div className="flex flex-col">
                    <a href='/'>home</a>
                    <a>about us</a>
                    <a>privacy policies</a>
                </div>

                <div className="flex flex-col">
                    <a>Developers</a>
                    <a>Contact us</a>
                    <a>lincense</a>
                </div>

                <div className="flex flex-col">
                    <a>terms & agreement</a>
                    <a>support us</a>
                </div>

            </div>

            <div className="w-full lg:px-[8rem] md:px-[8rem] sm:px-[2rem]">
                <div className="border-[1px] border-textColor border-solid w-[80] mb-2"></div>
                <div className="flex px-2 justify-between py-3 text-textColor">
                    <div className='flex flex-row'>
                        <a className='text-lg'><FaFacebook/></a>
                        <a className='pl-2'><FaTwitter/></a>
                        <a className='pl-2'><FaGithub/></a>
                    </div>
                    <div className="">&copy; 2022 Linkashare</div>
                </div>
            </div>            
        </div>
    );

}

export default Footer; 