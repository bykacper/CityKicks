import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { productsLoader } from './assets/data/products'
import Home from './routes/home'
import Shop from './routes/shop'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/shop/:brand',
    element: <Shop />,
  },
  {
    path: '/shop/:brand/:model',
    element: <Shop />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
