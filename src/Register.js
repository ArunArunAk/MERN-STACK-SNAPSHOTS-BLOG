
import React, { useState } from 'react';
import './Register.css'; // Import your CSS file for styling
import { ErrorMessage, Formik } from 'formik';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
import api from "./postsapi";
import axios from 'axios'; // Import axios for making API requests



const Register = () => {

  const [userdetails, Setuserdetails] = useState([]);

  const navigate=useNavigate()
  const validate = (values) => {
    const errors = {};

    // Name validation
    if (!values.name) {
      errors.name = 'Name is required.';
    }

    // Email validation
    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Invalid email format.';
    }

    // Password validation
    if (!values.password) {
      errors.password = 'Password is required.';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    // Confirm password validation
    if (!values.confirmpassword) {
      errors.confirmpassword = 'Confirm password is required.';
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = 'Passwords must match.';
    }

    return errors;
  };


  const handleSubmit = async (values, { setSubmitting,resetForm  }) => {
    console.log('Submitting form:', values);
   
    setSubmitting(false); // Reset submitting state after simulated submission

    resetForm();
    navigate('/login')
    toast.success("Register successfully! Please login.", {
      position: "top-right", // Customizable position
      
    });

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{marginTop:100}}>
          <h1 className="text-center head1 text-primary ">SnapStories</h1>
          <h3 className="head2 text-primary ">Latest Blog</h3>
        </div>

        <div className="col-md-6">
          <h3 className="text-center heading text-primary ">Register Now</h3>

          <Formik
            initialValues={{ name: '', email: '', password: '', confirmpassword: '', phone: '' }}
           validate={validate}
            onSubmit={handleSubmit}
          >
            {({ handleChange, errors, touched, handleBlur, handleSubmit, isSubmitting,values }) => (
              <form className="registerform" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={values.name} // Use handleChange to update values
                  onChange={handleChange}
                  onBlur={handleBlur} // Call handleBlur on blur for field-level validation
                />
                {errors.name && touched.name && <div className=" text-danger">{errors.name}</div>}
                <br />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* {errors.email && touched.email && <div className="text-danger">{errors.email}</div>} */}
                {/* or */}
                <ErrorMessage  className="text-danger" name='email'/>

                <br />

                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='phone'
                />
                <br />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}
                <br />

                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirmpassword"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmpassword && touched.confirmpassword && (
                  <div className="text-danger">{errors.confirmpassword}</div>
                )}
                <br />

                <button className='btn btn-primary' type="submit" disabled={errors.length > 0 || isSubmitting}>
                  Register 
                </button>
                <p className="text-center mt-3">
                  Don't have an account?{' '}
                  <Link to="/login">
                  <a  className="text-primary">
                    Login Here
                  </a></Link>
                  
                </p>
              </form>
            )}
              </Formik>
              </div>


              </div>
              
              </div>
            )}

            export default Register