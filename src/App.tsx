import './styles/App.css'
import React from 'react'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import IndexTome from './routes/Tomes'
import IndexChap from './routes/Chapitres'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tomes',
    element: <IndexTome />,
  },
  {
    path: '/chapitres/:tomeId',
    element: <IndexChap />,
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
