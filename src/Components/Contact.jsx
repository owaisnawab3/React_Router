import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <div>Contact</div>
    <Link to="/">Home</Link><br/>
    <Link to="/about">About</Link>
    </>
  )
}

export default Contact