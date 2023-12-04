import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastProvider } from './context/ToastContext'
import router from './routes/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
        <RouterProvider router={router} />
    </ToastProvider>
  </React.StrictMode>,
)
