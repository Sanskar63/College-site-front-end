import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hostel() {

  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Handle form submission logic here
    const formData = new FormData();
    formData.append('password', password);
    formData.append('hostelFile', file);

    try {
      const response = await axios.post("http://localhost:8000/api/v1/registration/hostel-registration",
        formData,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      console.log(response);
      if (response.status === 200) {
        navigate("/registration");
        localStorage.setItem("course", response.status);
      }

    } catch (error) {
      console.log("error ------------>", error)
    } finally {
      setLoading(false); // Reset loading state after request completion
    }
  };




  return (
    <div className="max-w-md mx-auto my-10">

      <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-slate-100">

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
        {/* <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 active:bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"  
          >
            Submit
          </button>
        </div> */}

        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 active:bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : '' // Disable button styles when loading
              }`}
            type="submit"
            disabled={loading} // Disable button based on loading state
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

    </div>
  );
}
export default Hostel
