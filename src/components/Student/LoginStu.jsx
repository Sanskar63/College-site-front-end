import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { url } from '../utils/constant';

function LoginStu() {

    const navigate = useNavigate();
    const refEmail = React.useRef();
    const refPhone = React.useRef();

    //States don't update this fast thus using ureRef

    function getData(e) {
        e.preventDefault();

        const email = refEmail.current.value;
        const password = refPhone.current.value;
        
        // console.log(email, password);

        callBackend(email, password);
    }

    const callBackend = async (email, password) => {
        try {
            const response = await axios.post(`${url}/v1/regis/login`, {
                email: email,
                password: password
            })
            if (response.status === 200) {
                // console.log(response.data.data,"---------->", response.status)
                const accessToken = response.data.data.accessToken;
                const refreshToken = response.data.data.refreshToken;
                const studentId = response.data.data.student._id;
                
                // console.log('id is -=======->',response.data.data.student._id)
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('studentId', studentId);

                
                navigate("/");
            }
           
        } catch (error) {
            alert("INVALID CREDENTIALS")
        }
    }



    return (
        <div>

            <section className="bg-gray-300">

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="flex flex-col justify-evenly items-center mb-6 text-[4vw] md:text-[3vw] lg:text-[2vw] font-semibold text-gray-950">
                        <img className="w-[6vw] mr-2" src="/temp/IIITLogo.png" alt="logo" />
                        <span>Indian Instutute of Information technology</span><span>Saloh, Una</span>
                    </div>


                    <div className="w-full bg-rgba-brown rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Log in to your account
                            </h1>


                            <form className="space-y-4 md:space-y-6" onSubmit={getData}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="text" name="email" id="email" ref={refEmail} className="bg-gray-50 border focus:outline-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-500 " placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>

                                    <input type="password" name="password" ref={refPhone} id="password" placeholder="••••••••" className="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-gray-600 placeholder-gray-400 " required="" />
                                </div>

                                <button type="submit" className="w-full text-white active:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-600 hover:bg-gray-700 ">Login</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LoginStu;
