import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/header';
import Home from '../components/home/home'
import Footer from '../components/footer/footer';
import UserManagement from '../components/userManagement/userManagement'


function UserRoute() {
  return (
    <Router>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/user-management" element={<UserManagement/>}/>
            </Routes>
        <Footer/>
    </Router>
   
  )
}

export default UserRoute