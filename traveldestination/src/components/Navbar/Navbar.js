import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<nav>
    <Link to="/">Home Page</Link>
    {/* <Link to="/tourDetails"> Tour Details</Link> */}
</nav>
  )
}

export default Navbar