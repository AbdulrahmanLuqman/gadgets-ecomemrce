// import {useState} from 'react'

import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"

import LandingPage from "./views/LandingPage"

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </main>
  )
}

export default App