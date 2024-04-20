import { Link } from "react-router-dom"

export const Navbar = (prop) => {

    return (
        <>

            <nav className="bg-white border border-none w-[100%] h-[18.5vw] mb-4 sm:h-[12.5vw] relative overflow-hidden" >
                <img src="/temp/head.svg" alt="" className="w-[100%] absolute hidden sm:block -top-[2vw] -z-1" />
                <img src="/temp/1logo-una.png" alt="" className="w-[48%] mt-[2.5vw] ml-[2%] hidden sm:block" />

                <div className="h-[73%] relative block sm:hidden">
                    <div className="w-[100%] h-[50%] sm:hidden absolute top-0 right-0 overflow-visible flex justify-center items-center bg-rgba-brown">
                        <div className="w-[55%] mt-[7vw] bg-white border border-none rounded-lg">
                            <img src="/temp/1logo-una.png" alt="" className="w-[98%] ml-[2%] block sm:hidden " />
                        </div>
                    </div>

                    <div className="bg-gray-300 absolute top-[2vw] left-[1vw] w-[5%] h-[30%]" ></div>
                </div>

                <ul className="hidden sm:absolute top-0 right-0 w-[45vw] sm:w-[50vw] h-[4vw] sm:flex flex-row justify-evenly items-center sm:mt-[2.3vw] ">
                    <Link to="/" className="text-black sm:text-white text-xs lg:text-2xl md:text-base sm:text-base cursor-pointer  font-sans">Home</Link>
                    <Link to="/about" className="text-black sm:text-white text-xs lg:text-2xl md:text-base sm:text-base cursor-pointer  font-sans"> About Us</Link>
                    <Link to="/contacts" className="text-black sm:text-white text-xs lg:text-2xl md:text-base sm:text-base cursor-pointer  font-sans">Contacts</Link>
                    <li className="text-black sm:text-white text-xs lg:text-2xl md:text-base sm:text-base cursor-pointer  font-sans">Events</li>
                    <img src="/temp/IIITLogo.png" alt="" className="w-[3vw] h-[3vw] border border-black rounded-full " />
                </ul>

                <ul className="sm:w-[45vw] md:w-[40vw]  mr-[2vw] hidden sm:absolute bottom-0 right-0 sm:flex justify-evenly ">
                    <Link to="/get-my-applications" className="text-xs lg:text-base md:text-sm cursor-pointer text-rgba-brown font-semibold font-sans">Application</Link>
                    <div className="border-l border-gray-900 h-auto "></div>
                    <li className="text-xs lg:text-base md:text-sm cursor-pointer text-rgba-brown font-semibold font-sans">Complaints</li>
                    <div className="border-l border-gray-900 h-auto"></div>
                    <li className="text-xs lg:text-base md:text-sm cursor-pointer text-rgba-brown font-semibold font-sans">Profile</li>
                </ul>
            </nav>


        </>
    )
}