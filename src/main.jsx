import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/AboutUs.jsx'
import Contacts from './components/Contacts.jsx'
import Login from './components/Login.jsx'
import GetAll from './components/Applications/GetAll.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "get-all-applications",
        element: <GetAll />
      },
      
    ]
  },
  {
    
    path: "login",
    element: <Login />
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
