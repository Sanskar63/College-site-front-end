import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../utils/constant';

function Course() {
  const [semester, setSemester] = useState('');
  const [password, setPassword] = useState('');
  const [courseFile, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const id = localStorage.getItem('studentId')

  const navigate = useNavigate();

  const isPresent = async (e) =>{
    e.preventDefault();
    try {
      const response = await axios.get(`${url}/registration/getRegistrationForm/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
      // console.log(response)
      
      if(!response.data.data.courseStatus){
        handleSubmit();
      }
      else{
        alert("Registration is already confirmed");
        navigate("/registration");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setLoading(true); // Set loading state to true when the form is submitted

    // Create FormData object
    const formData = new FormData();
    formData.append('currentSem', semester);
    formData.append('password', password);
    formData.append('courseFile', courseFile);

    try {
      const response = await axios.post(
        `${url}/registration/course-registration`,
        formData, // Use FormData object as request data
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
          }
        }
      );

      console.log(response);
      if (response.status === 200) {
        setLoading(false);
        alert(response.data.message)
        navigate("/registration");
        localStorage.setItem("course", response.status);
      }
    } catch (error) {
      console.log("error ------------>", error);
      setLoading(false); // Reset loading state if there is an error
    }
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <form onSubmit={isPresent} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-slate-100">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
            Select Semester
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
            <option value="4">IV</option>
            <option value="5">V</option>
            <option value="6">VI</option>
            <option value="7">VII</option>
            <option value="8">VIII</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
            Submit Your Course Proof
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 active:bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Course;
