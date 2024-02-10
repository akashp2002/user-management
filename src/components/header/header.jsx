import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
function Header() {
  return (
    <div >
        <div className='container'>
            <div className='header-img'>
                <img className='logo' src={logo} alt='logo'/>
            </div>
            <div className='navigation'>
              <Link
              style={{ textDecoration: 'none'}}
              to='/'>
              <h3 className='nav_header'>Home</h3>
              </Link>
              <Link
              style={{ textDecoration: 'none'}}
              to='/user-management'>
                <h3 className='nav_header'>Users</h3>
              </Link>
                <h3 className='nav_header'>Contact Us</h3>
                <h3 className='nav_header'>About Us</h3>
            </div>
        </div>
    </div>
  )
}

export default Header