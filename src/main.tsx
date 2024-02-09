import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import UserPage from './pages/UserPage'
import Layout from './components/layout/Layout'


const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage/>,
      errorElement: <div>404 NOT FOUND</div>
  },
  {
    path: '/users',
    element: <UserPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
