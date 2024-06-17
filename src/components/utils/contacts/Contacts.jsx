import React from 'react'
import Cards from './Cards'
import TeachCard from './card'

const Contacts = () => {

    const info = [
        {
            name: "Dr. A.N Gill",
            email: "drgill@iiitu.ac.in",
            desig: "Registrar"
        },
        {
            name: "Dr. Ashwini Kumar Malviya",
            email: "ashwinikm@iiitu.ac.in",
            desig: "Dean"
        },
        {
            name: "Mr. Divyansh Thakur",
            email: "divyansh@iiitu.ac.in",
            desig: "Warden"
        },
        {
            name: "Dr. Vikram Kumar",
            email: "vikram@iiitu.ac.in",
            desig: "Head School of Electronics"
        },
        {
            name: "Dr. Ankur Kumar",
            email: "ankurkmar@iiitu.ac.in",
            desig: "Head School of Computing"
        }
    ]

    return (
        <div className='my-2'>

            {/* <Cards img={"Director-iiitu.png"} email="director@iiitu.ac.in" ph="975257901"  /> */}

            <div className='w-[100%] mt-[2vw] flex flex-col items-center' >
                <div className='bg-rgba-dark-brown h-[34vw] sm:h-[21vw] w-[96vw] rounded-lg pt-[1vw] flex justify-center'>

                    <div className='w-[94vw] h-[29vw] sm:h-[17vw] flex items-center rounded-lg bg-rgba-cream'>

                        <div className='w-[20vw] h-[20vw] sm:w-[13.5vw] sm:h-[13.5vw] flex items-center justify-center bg-rgba-dark-brown rounded-full ml-[1vw]'>
                            <img src='/temp/Director-iiitu.png' alt="" className='w-[18vw] h-[18vw] sm:w-[12vw] sm:h-[12vw] border-2 border-white rounded-full bg-rgba-brown' />
                        </div>

                        <div className='pl-[5%] h-[75%] sm:h-[95%] w-[75%] relative'>
                            <span className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl border-b-4 border-b-rgba-dark-brown'>
                                Prof. Manish Gaur
                            </span>
                            <p className='pt-[2%] text-xs md:text-sm lg:text-lg'>
                                <span>Director</span>
                                <br />
                                <span>Indian Institute of Information Technology, Una H.P. - 177 209</span>
                                <br />
                                <span>Contact: 97525-7901</span>
                                <br />
                                Email: director@iiitu.ac.in
                            </p>
                            {/* Now div for links for social media */}
                        </div>
                    </div>

                </div>
            </div >


            <div className='flex justify-evenly'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[2vw] w-[96vw]">
                    <span className='text-2xl md:text-4xl font-bold border-b-4 border-b-black'>Some Important Contacts </span>
                    {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-[2%]">
                        <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Designation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Institute/University
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email Id
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Proff. Satendra Kumar
                                </th>
                                <td className="px-6 py-4">
                                    Proffessor
                                </td>
                                <td className="px-6 py-4">
                                    Indian Institute of Information Technology Una
                                </td>
                                <td className="px-6 py-4">
                                    satendrakumar@gmail.com
                                </td>

                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Proff. Satendra Kumar
                                </th>
                                <td className="px-6 py-4">
                                    Proffessor
                                </td>
                                <td className="px-6 py-4">
                                    Indian Institute of Information Technology Una
                                </td>
                                <td className="px-6 py-4">
                                    satendrakumar@gmail.com
                                </td>

                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Proff. Satendra Kumar
                                </th>
                                <td className="px-6 py-4">
                                    Proffessor
                                </td>
                                <td className="px-6 py-4">
                                    Indian Institute of Information Technology Una
                                </td>
                                <td className="px-6 py-4">
                                    satendrakumar@gmail.com
                                </td>

                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Proff. Satendra Kumar
                                </th>
                                <td className="px-6 py-4">
                                    Proffessor
                                </td>
                                <td className="px-6 py-4">
                                    Indian Institute of Information Technology Una
                                </td>
                                <td className="px-6 py-4">
                                    satendrakumar@gmail.com
                                </td>

                            </tr>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Proff. Satendra Kumar
                                </th>
                                <td className="px-6 py-4">
                                    Proffessor
                                </td>
                                <td className="px-6 py-4">
                                    Indian Institute of Information Technology Una
                                </td>
                                <td className="px-6 py-4">
                                    satendrakumar@gmail.com
                                </td>

                            </tr>
                        </tbody>
                    </table> */}
                    <div className='' >
                        <div className='w-[100%] flex flex-wrap justify-center items-center pt-5'>

                            {
                                info.map((e, index) => (
                                    <TeachCard desig={e.desig} name={e.name} email={e.email} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contacts
