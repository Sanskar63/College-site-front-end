import React from 'react'
import Cards from './Cards'

const Contacts = () => {
    return (
        <div>

            <Cards imag={["IIITLogo.png", "IIITLogo.png", "IIITLogo.png"]} para={["This is Director", "This is Registrar", "This is Warden"]} />

            <div className='flex justify-evenly'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[2vw] w-[96vw]">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Contacts
