import React from 'react'
import { Link } from 'react-router-dom'

const Miising = () => {
  return (
    <div className="container mt-5">  {/* Container with margin-top for spacing */}
    <div className="row justify-content-center">  {/* Center content horizontally */}
      <div className="col-md-6">  {/* Responsive column for content */}
        <h1 className="display-1">404</h1>
        <p className="lead">Page Not Found</p>
        <p>The page you requested could not be found. It may be unavailable or have a different URL.</p>

        <Link to="/Home"><a  className="btn btn-primary"> Go Back Home</a></Link>
        
      </div>
    </div>
  </div>  )
}

export default Miising