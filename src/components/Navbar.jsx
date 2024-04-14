export const Navbar = (prop) => {

    return (
        <>

            <nav className="bg-white border border-none w-[99vw] h-[12.5vw] relative overflow-hidden" >
                <img src="/temp/head.svg" alt="" className="w-full absolute -top-[2vw] -z-1" />
                <img src="/temp/1logo-una.png" alt="" className="w-[40vw] mt-[2.5vw] absolute" />

                <ul className="absolute top-0 right-0 w-[45vw] h-[4vw] flex flex-row justify-evenly items-center mt-[2.3vw] ">
                    <li className="text-white text-xs lg:text-xl md:text-lg cursor-pointer  font-sans">Home</li>
                    <li className="text-white text-xs lg:text-xl md:text-lg cursor-pointer  font-sans"> About Us</li>
                    <li className="text-white text-xs lg:text-xl md:text-lg cursor-pointer  font-sans">Contacts</li>
                    <li className="text-white text-xs lg:text-xl md:text-lg cursor-pointer  font-sans">Events</li>
                    <img src="/temp/head.svg" alt="" className="w-[3vw] h-[3vw] border rounded-full " />
                </ul>

                <ul className=" w-[45vw] sm:w-[45vw] md:w-[40vw]  mr-[2vw] absolute bottom-0 right-0 flex justify-evenly ">
                    <li className="text-xs lg:text-base md:text-sm cursor-pointer text-rgba-brown font-semibold font-sans">Application</li>
                    <div className="border-l border-gray-900 h-auto "></div>
                    <li className="text-xs lg:text-base md:text-sm cursor-pointer text-rgba-brown font-semibold font-sans">Complaints</li>
                    <div className="border-l border-gray-900 h-auto"></div>
                    <li className="text-xs lg:text-base md:text-sm cursor-pointer text-rgba-brown font-semibold font-sans">Profile</li>
                </ul>
            </nav>


        </>
    )
}