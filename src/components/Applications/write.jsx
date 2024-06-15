import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { url } from '../utils/constant';

function WriteApplication() {
    const navigate = useNavigate();

    const accessToken = localStorage.getItem('accessToken');
    const [content, setContent] = useState("");
    const [to, setTo] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(()=>{
    //     console.log(to)
    // })

    function handleApplication(e){
        e.preventDefault();

        const fetchData = async () => {
            try {
                const response = await axios.post(
                    `${url}/application/write`,
                    {
                        content: content,
                        password: password,
                        to: to
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }
                );
                console.log(response.status);
                if(response.status === 200){
                    navigate("/applications")
                } else{
                    console.log("problem occured in sending the application to backend from frontend");
                }
                // Update the state variable with the response data
                // setMyApplications(response.data.data.myApplications);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        console.log('THIS IS MESSAGE TO',to)
        fetchData();

    }

    return (
        <div className='w-[100%] h-[50vw] flex justify-center items-center bg-gray-200'>

            <div className=" min-w-md lg:w-[30%] mx-auto p-5 bg-white shadow-lg rounded-lg">
                <form className="space-y-4" onSubmit={handleApplication}>

                    <div className='w-[100%]'>
                    <label htmlFor="to" className="block text-sm md:text-base font-medium text-gray-500">To</label>
                        <select name="to" id="to" onChange={(e)=>(setTo(e.target.value))}
                            className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="" >Select Department</option>
                            <option value="Dept_1">Department 1</option>
                            <option value="Dept_2">Department 2</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm md:text-base font-medium text-gray-500">Content</label>

                        <textarea id="content" name="content" rows="5" onChange={(e)=>(setContent(e.target.value))} className="mt-1 block w-full px-3 py-2  bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter content"></textarea>
                    </div>



                    <div>
                        <label htmlFor="password" className="block text-sm md:text-base font-medium text-gray-500">Password</label>
                        <input type="password" id="password" name="password" onChange={(e)=>(setPassword(e.target.value))}  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default WriteApplication
