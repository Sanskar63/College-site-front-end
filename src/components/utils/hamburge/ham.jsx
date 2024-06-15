import React, { useState } from 'react';
import styles from './ham.module.css';
import { Link } from 'react-router-dom';

function Toggle() {
    const [isChecked, setIsChecked] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleCheckboxChange = () => {
        setToggle(!toggle);
        setIsChecked(!isChecked);
    };

    return (
        <div className='relative'>
            <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                className={`${styles.checkbox}`}
                onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox" className={`${styles.toggle}`}>
                <div className={`${styles.bars} ${styles.bar1}`} />
                <div className={`${styles.bars} ${styles.bar2}`} />
                <div className={`${styles.bars} ${styles.bar3}`} />
            </label>


            {toggle ?
                <div className='absolute top-0 right-0 w-[40vw] h-screen bg-rgba-brown border-2 border-black pt-[12vw] flex flex-col z-10'>
                    <div className='w-full h-0.5 bg-white'></div>
                    <Link to="/" onClick={handleCheckboxChange} className="text-black cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream pl-2 ">Home</Link>
                    <div className='w-full h-0.5 bg-white'></div>

                    <Link to="/announcement" onClick={handleCheckboxChange} className="text-black cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream pl-2 ">Announcements</Link>
                    <div className='w-full h-0.5 bg-white'></div>

                    <Link to="/contacts" onClick={handleCheckboxChange} className="text-black cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream pl-2 ">Contacts</Link>
                    <div className='w-full h-0.5 bg-white'></div>

                    <Link to="/registration" onClick={handleCheckboxChange} className="text-black cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream pl-2 ">Register</Link>
                    <div className='w-full h-0.5 bg-white'></div>

                    <Link to="/applications" onClick={handleCheckboxChange} className="ttext-black cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream pl-2 ">Application</Link>
                    <div className='w-full h-0.5 bg-white'></div>

                    <div className="border-l border-gray-900 h-auto "></div>
                    <Link to="/complaints" onClick={handleCheckboxChange} className="ttext-black cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream pl-2 ">Complaints</Link>
                    <div className='w-full h-0.5 bg-white'></div>

                    <Link to="/profile" onClick={handleCheckboxChange} className="ttext-black cursor-pointer hover:text-rgba-dark-brown font-sans active:text-rgba-cream pl-2 ">Profile</Link>
                    <div className='w-full h-0.5 bg-white'></div>



                </div> : ""}

        </div>
    );
}

export default Toggle;
