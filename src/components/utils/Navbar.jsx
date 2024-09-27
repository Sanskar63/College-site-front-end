import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import Toggle from "./hamburge/ham";
import {url} from "../utils/constant.jsx"
import { jwtDecode } from "jwt-decode";

export const Navbar = () => {
    const student = localStorage.getItem('studentId');
    const accessToken = localStorage.getItem('accessToken');
    const [imageUrl, setImageUrl] = useState('../../public/temp/pp.jpg');

    const getInfo = async (student) => {
        try {
            const response = await axios.get(`${url}/regis/getStudent/${student}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                const data = response.data.data;
                // console.log(data);
                setImageUrl(data.image);
            }
        } catch (error) {
            // console.log('======>>>', error);
            setImageUrl('../../public/temp/pp.jpg');
        }
    }

    if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000; // Current time in seconds

        if(decodedToken.exp > currentTime){
            // token not expired
            getInfo(student);
        }
    }

    const [showNav, setShowNav] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowWidth = window.innerWidth;

        if (scrollPosition > windowWidth / 8) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>

            <nav className="bg-white w-[100%] h-[18.5vw] sm:h-[14vw] relative sm:overflow-hidden border-b-2 border-rgba-dark-brown " >
                {/* it is cut svg will be block upto sm and then hidden */}
                <img src="/temp/head.svg" alt="" className="w-[100%] absolute hidden sm:block -top-[2vw] -z-1" />
                <img src="/temp/1logo-una.png" alt="" className="w-[48%] mt-[2.5vw] ml-[2%] hidden sm:block" />

                {/* now is navbar for small width devices */}
                <div className="h-[30vw] relative block sm:hidden">
                    <div className="w-[100%] h-[40%] sm:hidden absolute top-0 right-0 overflow-visible flex justify-center items-center bg-rgba-brown">
                        <div className="w-[70%] mt-[7vw] bg-white border border-none rounded-lg">
                            <img src="/temp/1logo-una.png" alt="" className="w-[98%] ml-[2%] block sm:hidden " />
                        </div>
                    </div>

                    <div className="absolute top-0 right-0" >
                        <Toggle />
                    </div>
                </div>

                <ul className="hidden sm:absolute top-0 right-0 w-[45vw] sm:w-[50vw] h-[4vw] sm:flex flex-row justify-evenly items-center sm:mt-[2.3vw] overflow-visible">
                    <Link to="/" className="text-black sm:text-white text-xs lg:text-xl md:text-base cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream">Home</Link>

                    <Link to="/announcement" className="text-black sm:text-white text-xs lg:text-xl md:text-base cursor-pointer hover:text-rgba-dark-brown active:text-rgba-cream font-sans">Announcements</Link>

                    <Link to="/contacts" className="text-black sm:text-white text-xs lg:text-xl md:text-base cursor-pointer hover:text-rgba-dark-brown active:text-rgba-cream font-sans">Contacts</Link>

                    <Link to="/registration" className="text-black sm:text-white text-xs lg:text-xl md:text-base cursor-pointer hover:text-rgba-dark-brown active:text-rgba-cream font-sans">Register</Link>

                    <Link to="/profile">
                        <img src={`${imageUrl}`} alt="" className={`w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw]  rounded-full cursor-pointer`} />
                    </Link>

                </ul>

                <ul className="sm:w-[45vw] md:w-[40vw] pb-[1%] mr-[2vw] hidden sm:absolute bottom-0 right-0 sm:flex justify-evenly ">
                    <Link to="/applications" className="text-xs lg:text-base md:text-sm cursor-pointer text-rgba-brown font-semibold font-sans hover:text-rgba-dark-brown active:text-rgba-cream">Application</Link>
                    <div className="border-l border-gray-900 h-auto "></div>
                    <Link to="/complaints" className="text-xs lg:text-base md:text-sm cursor-pointer text-rgba-brown font-semibold font-sans hover:text-rgba-dark-brown active:text-rgba-cream">Complaints</Link>
                </ul>
            </nav>

            {showNav && (
                <div className='w-[100%] hidden sm:flex pl-5 md:pr-5 fixed top-0 left-0 z-50 gap-2'>
                    <div className="w-[100%] h-[4vw] bg-white shadow-md fixed top-0 left-0"/>
                    <img className='w-[8%] lg:w-[7%] bg-white shadow-md rounded-full p-1 z-50' src="/temp/IIITLogo.png" alt="" />
                    {/* <span className="text-black z-50 font-bold text-xs lg:text-xl">Indian Institute of Information Technology Una</span> */}

                    <div>
                        <ul className="hidden sm:absolute top-0 right-0 w-[45vw] sm:w-[50vw] h-[4vw] sm:flex flex-row justify-evenly items-center overflow-visible">
                            <Link to="/" className="text-rgba-dark-brown text-xs lg:text-xl md:text-base font-semibold cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream">Home</Link>

                            <Link to="/announcement" className="text-rgba-dark-brown text-xs lg:text-xl md:text-base font-semibold cursor-pointer hover:text-rgba-dark-brown active:text-rgba-cream font-sans">Announcements</Link>

                            <Link to="/contacts" className="text-rgba-dark-brown text-xs lg:text-xl md:text-base font-semibold cursor-pointer hover:text-rgba-dark-brown active:text-rgba-cream font-sans">Contacts</Link>

                            <Link to="/registration" className="text-rgba-dark-brown text-xs lg:text-xl md:text-base font-semibold cursor-pointer hover:text-rgba-dark-brown active:text-rgba-cream font-sans">Register</Link>

                            <Link to="/profile">
                                <img src={`${imageUrl}`} alt="" className={`w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] shadow-lg rounded-full cursor-pointer`} />
                            </Link>

                        </ul>
                    </div>                        
                </div>
            )}


        </>
    )
}