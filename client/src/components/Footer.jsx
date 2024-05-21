import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>      <footer>
    <Link to="/terms-of-service">Terms of Service</Link>
    <Link to="/privacy-policy" className='privacy'>Privacy Policy</Link>
  </footer></div>
  )
}

export default Footer