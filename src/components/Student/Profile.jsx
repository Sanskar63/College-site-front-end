import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { url } from '../utils/constant';
import {jwtDecode} from 'jwt-decode'
import toast from 'react-hot-toast';

function Profile() {
  const accessToken = localStorage.getItem('accessToken');
  const student = localStorage.getItem('studentId');
  const navigate = useNavigate();
  useEffect(()=>{
    if(!student){
      navigate('/login');
    }

    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000; // Current time in seconds
  
      // Check if the token is expired
      if (decodedToken.exp < currentTime) {
        // Token is expired
        localStorage.removeItem('accessToken'); // Optionally clear the token
        navigate('/login'); // Redirect to login
      }
    } else {
      // No access token found
      navigate('/login');
    }
  }, [student, accessToken, navigate]);
  
  
  // console.log('--------->',student)
  const [name, setName] = useState('');
  const [rollNum, setRollNum] = useState('');
  const [email, setEmail] = useState('');
  const [hostel, setHostel] = useState('');
  const [course, setCourse] = useState('');
  const [currentSem, setCurrentSem] = useState('');
  const [hostelName, setHostelName] = useState('');
  const [bed, setBed] = useState('');
  const [room, setRoom] = useState('');
  const [imageUrl, setImageUrl] = useState('');


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
        setName(data.fullName);
        setEmail(data.email);
        setRollNum(data.rollno);
        setImageUrl(data.image);
        setCurrentSem(data.currentSem)
      }
    } catch (error) {
      // console.log('======>>>', error)
      // toast.error('Some Error In Fetching Data')
      navigate('/login')
    }
  }

  const getHostelInfo = async (student) => {
    try {
      const response = await axios.get(`${url}/hostel/getHostelInformation/${student}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        const data = response.data.data;
        // console.log(data);
        setBed(data.bed);
        setHostelName(data.hostel);
        setRoom(data.room);
      }
    } catch (error) {
      console.log('======>>>', error)
    }
  }


  const getRegistrationInfo = async (student) => {
    try {
      const response = await axios.get(`${url}/registration/getRegistrationForm/${student}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        const data = response.data.data;
        // console.log(data);
        setHostel(data.hostelStatus);
        setCourse(data.courseStatus);
      }
    } catch (error) {
      console.log('======>>>', error)
    }
  }

  getInfo(student);
  getHostelInfo(student);
  getRegistrationInfo(student);


  return (
    <div className='flex flex-row items-center justify-center bg-gray-200'>

      <div className='flex flex-col w-[60%] rounded-lg shadow-2xl my-[5%] bg-white'>

        <div className='flex flex-col justify-center items-center rounded-lg bg-rgba-brown my-[5%] py-[5%]'>
          {/* profile image and roll num */}
          <img src={`${imageUrl}`} className='w-[15vw] h-[15vw] rounded-full' />
          <span className='text-3xl font-bold'>{name}</span>
          <p>{rollNum}</p>
        </div>


        <div className='flex flex-col px-[5%]'>
          {/* Details second level */}
          <span className='my-2 text-gray-600'>Current Semester: {currentSem}</span>
          <span className='my-2 text-gray-600'>Email: {email}</span>
          <span className='my-2 text-gray-600'>Hostel: {hostel ? 'Registered' : 'Not Registered'}</span>
          <span className='my-2 text-gray-600'>Course: {course ? 'Registered' : 'Not Registered'}</span>
        </div>

        <div className='flex flex-col px-[5%] mb-[5%]'>
          {/* Hostel details */}
          <h1 className='my-2 font-semibold text-xl'>Hostel Information</h1>
          <span className='my-2 text-gray-600'>Hostel Name: {hostelName}</span>
          <span className='my-2 text-gray-600'>Room: {room}</span>
          <span className='my-2 text-gray-600'>Bed: {bed}</span>
        </div>

      </div>
    </div>
  )
}

export default Profile
