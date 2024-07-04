import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white py-4 mt-5">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 >SnapStories </h5>
            <p>
              This is a blog about various topics ranging from technology to lifestyle.
              Stay tuned for more updates and posts.
            </p>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>
              Email: SnapStories@blogwebsite.com
            </p>
            <p>
              Phone: +123 456 7890
            </p>
            <div>
              <a href="https://www.facebook.com" className="text-white me-2">
              <FaFacebook />            
               </a>
              <a href="https://www.twitter.com" className="text-white me-2">
       <FaInstagramSquare/>              </a>
              <a href="https://www.instagram.com" className="text-white">
             <FaTwitterSquare/>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">© 2024 Blog Website. All rights reserved to Fullstack Developer  <span className='text-primary'>Arun G</span>.</p>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footer