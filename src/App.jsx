import { useState } from 'react'

import './styles/App.css'

import Home from './routes/Home'
import IndexTome from './routes/Tomes'
import IndexChap from './routes/Chapitres'
import {createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
    {
      path:"/Tomes",
      element: <IndexTome />,
  },
  {
    path:"/Chapitres/:tome_id",
    element: <IndexChap />,
}

])

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
