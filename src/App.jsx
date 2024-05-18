import React from 'react'
import Navbar from './Components/Header'
import { Route, Routes } from 'react-router'


const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Navbar />}/>
      </Routes>

  )
}

export default App