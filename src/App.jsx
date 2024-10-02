import React from 'react'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile'
import About from './pages/About'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Header from './components/Header'

export default function  () {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path='/sign-out' element={<SignOut />} />
      </Routes>
      
    </BrowserRouter>
  )
}
