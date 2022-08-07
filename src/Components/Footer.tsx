
const Footer = () => {

    return(
        <div className="w-full bg-dark ">

            <div className="flex flex-row p-[4rem] justify-between text-textColor capitalize">

                <div className="flex flex-col">
                    <a>home</a>
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

            <div className="w-full px-[8rem]">
                <div className="border-[1px] border-textColor border-solid w-[80] mb-2"></div>
                <div className="flex px-2 justify-between py-3 text-textColor">
                    <div>social icons</div>
                    <div className="">&copy; 2022 Linkashare</div>
                </div>
            </div>            
        </div>
    );

}

export default Footer; 