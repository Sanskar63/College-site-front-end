import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Course() {
  const [semester, setSemester] = useState('');
  const [password, setPassword] = useState('');
  const [courseFile, setFile] = useState(null);
  const accessToken = localStorage.getItem('accessToken');
  
  const navigate = useNavigate();

    

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create FormData object
    const formData = new FormData();
    formData.append('currentSem', semester);
    formData.append('password', password);
    formData.append('courseFile', courseFile);
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/registration/course-registration",
        formData, // Use FormData object as request data
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
          }
        }
      );
  
      console.log(response);
      if(response.status===200){
        navigate("/registration");
        localStorage.setItem("course", response.status);
      }
    } catch (error) {
      console.log("error ------------>", error)
    }
  };
  

  return (
    <div className="max-w-md mx-auto my-10">

      <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-slate-100">


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
            <option value="3">IV</option>
            <option value="3">V</option>
            <option value="3">VI</option>
            <option value="3">VII</option>
            <option value="3">VIII</option>
            {/* Add more options for Semesters 4 through 8 */}
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
            onChange={(e) => {setFile(e.target.files[0]), console.log(e.target.files[0])}}
            
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
          >
            Submit
          </button>

        </div>

      </form>

    </div>
  );
}

export default Course;
