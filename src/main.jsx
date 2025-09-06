import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import router from './Routes/Router'
import AuthProvider from './Context/AuthContext'
// import AuthProvider from './Context/AuthContext'
// import AuthProvider from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
