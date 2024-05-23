import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/utils/Layout.jsx'
import About from './components/utils/AboutUs.jsx'
import Contacts from './components/utils/Contacts.jsx'
import LoginStu from './components/Student/LoginStu.jsx'
import Logout from './components/Student/Logout.jsx'
import GetMy from './components/Applications/GetMy.jsx'
import WriteComplaint from './components/Complaints/write.jsx'
import GetMyComplaints from './components/Complaints/Get.jsx'

import WriteApplication from './components/Applications/write.jsx'
import Register from './components/Registration/Register.jsx'
import Course from './components/Registration/Course.jsx'
import Hostel from './components/Registration/Hostel.jsx'
import Profile from './components/Student/Profile.jsx'
import Home from './components/Home/main.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },
      {
        path: "/applications",
        element: <GetMy />,
      },
      {
        path: "/writeApplication",
        element: <WriteApplication />
      },
      {
        path: "/complaints",
        element: <GetMyComplaints />,
      },
      {
        path: "/writeComplaints",
        element: <WriteComplaint />
      },
      {
        path: "/registration",
        element: <Register />,        
      },
      {
        path: "/course",
        element: <Course />
      },
      {
        path: "/hostel",
        element: <Hostel />
      },{
        path: "/profile",
        element: <Profile/>
      }
      
    ]
  },

  {

    path: "/login",
    element: <LoginStu />

  },
  {
    path: "/logout",
    element: <Logout />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
