import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import './nav.css'
import { FiLogIn } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi"; // Import logout icon

const Nav = ({search,setSearch}) => {

  const navigate = useNavigate();

  const isUserLoggedIn = () => {
    const userDetails = localStorage.getItem('userDetails');
    return userDetails !== null;
  };

  const getUserName = () => {
    const userDetails = localStorage.getItem('userDetails');
    return userDetails ? JSON.parse(userDetails).name : '';
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('userDetails'); // Clear user details from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div >  {/* Bootstrap class for container (optional) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand text-primary"   to="/"> <h1 style={{fontWeight:800}}>SnapStories</h1></Link>

        



        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


         
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Right-alignment using `ms-auto` */}
 
            {/* ----------serch bar-------- */}
        <form className='searchform'  style={{marginRight:"70px"}} onSubmit={(e)=>e.preventDefault()}>
          <input className='ml-5 p-3 ' type="text"
          placeholder='search pots..'
           name='search'
           value={search} 
           onChange={(e)=>setSearch(e.target.value)}
            style={{width:300},{height:30},{marginTop:10}}
           />
         </form>

            <li className="nav-item">
              <Link to="/ " className="nav-link active font-weight-bold text-black" style={{ 'font-weight': 800 }}>Home</Link>
            </li>
          

         {isUserLoggedIn()?(
      <li className="nav-item">
        <Link to="/Newpost" className="nav-link text-black" style={{ 'font-weight': 800 }}>Post</Link>
       </li>
         ):null}

           

            <li className="nav-item">
              <Link to="/About" className="nav-link font-weight-bold text-black" style={{ 'font-weight': 800 }}>About</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link font-weight-bold text-black" style={{ 'font-weight': 800 }}>Contact</Link>
            </li>

            
            <li className="nav-item">
              <Link to="/TasktTwo" className="nav-link text-black" style={{ 'font-weight': 800 }}>Menus</Link>
            </li>

            <li className="nav-item">
              <Link to="/Apitest" className="nav-link text-black  " style={{ 'font-weight': 800 }}>Blogs-Details</Link>
            </li>

          
           
          {!isUserLoggedIn() ? (
              <li className="nav-item loginbtn">
                <Link to="/login" className="nav-link text-primary">
                  <FiLogIn /> Login
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <span className="nav-link text-primary">
                    <FaCircleUser /> Hi, {getUserName()}
                  </span>
                </li>
                <li className="nav-item loginbtn">
                  <span className="nav-link text-primary" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                    <FiLogOut /> Logout
                  </span>
                </li>
              </>
            )}  




          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
