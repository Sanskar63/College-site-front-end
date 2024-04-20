import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/utils/Layout.jsx'
import About from './components/utils/AboutUs.jsx'
import Contacts from './components/utils/Contacts.jsx'
import LoginStu from './components/Student/LoginStu.jsx'
import GetApplication from './components/Applications/GetAll.jsx'
import Logout from './components/Student/Logout.jsx'
import GetMy from './components/Applications/GetMy.jsx'

import Register from './components/Student/Register.jsx'
import WriteApplication from './components/Applications/write.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contacts",
        element: <Contacts />
      },

      {
        path: "/get-all-applications",
        element: <GetApplication />
      },
      {
        path: "/get-my-applications",
        element: <GetMy />,
      },  
      {
        path: "/write",
        element: <WriteApplication />
      } 
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    
    path: "/login",
    element: <LoginStu />
    
  },
  {
    path:"/logout",
    element: <Logout />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
