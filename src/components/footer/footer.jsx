import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter,faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
function Footer() {
  return (
    <div>
      <div className='footer_container'>
       <h2 className='footer_header'>Business Center</h2>
        <div className='socialmedia_container'>
        <FontAwesomeIcon icon={faInstagram} color='white' />
        <FontAwesomeIcon icon={faWhatsapp} color='green' />
        <FontAwesomeIcon icon={faTwitter} color='lightblue' />
        <FontAwesomeIcon icon={faFacebook} color='blue' />

        </div>
       <p className='footer_para'>Copyright @2024 All rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer