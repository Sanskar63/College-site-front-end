import React from 'react'

const Dropdown = () => {
    return (

        <div className="m-0 p-0 flex flex-col ">
            <span onClick={() => { setToggle(!toggle) }} className="text-white lg:text-xl md:text-lg sm:text-sm cursor-pointer font-bold font-sans relative bg-gray-500">
                Services
            </span>
            {toggle ? (
                <div className="flex flex-col justify-evenly absolute top-[2vw] border border-none rounded-md p-[1vw]">
                    <span className="lg:text-xl md:text-lg sm:text-sm font-medium text-gray-700  cursor-pointer pb-1">Registration</span>
                    <hr />
                    <span className="lg:text-xl md:text-lg sm:text-sm font-medium text-gray-700  cursor-pointer pt-1 pb-1">Application</span>
                    <hr />
                    <span className="lg:text-xl md:text-lg sm:text-sm font-medium text-gray-700  cursor-pointer pb-1">Complaints</span>
                </div>
            ) : ""}
        </div>

    )
}

export default Dropdown
