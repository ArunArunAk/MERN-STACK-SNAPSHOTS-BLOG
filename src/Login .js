import React ,{useEffect}from 'react';
import './Login.css'; // Import your CSS file for styling
import { ErrorMessage, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify


const Login = () => {

  const isUserLoggedIn = () => {
    const userDetails = localStorage.getItem('userDetails');
    return userDetails !== null;
  };
  
 
  const navigate=useNavigate()
  useEffect(() => {
    if (isUserLoggedIn()) {
      navigate('/'); // Redirect to homepage if already logged in
    }
  }, [navigate]);





  const validate = (values) => {
    const errors = {};

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

    return errors;
  };

  const logindetail={
    email:"arunarun2gs@gmail.com",
    name:"Arun G"
  }

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Submitting login form:', values);
    if (values.email === logindetail.email ) {
      localStorage.setItem('userDetails', JSON.stringify(logindetail));

      toast.success('Login successfully!', {
        position: 'top-right', 
        
      });
      navigate('/');
    } else {
      toast.error('Invalid email or password!', {
        position: 'top-right', 
       
      });
    }


    setSubmitting(false); // Reset submitting state after simulated submission
    resetForm();

    // navigate('/')
    // toast.success("login  successfully!", {
    //   position: "top-right", // Customizable position
    //   autoClose: 30000, // Automatically close after 3 seconds
    //   hideProgressBar: true, // Optionally hide the progress bar
    // });

  };

  return (
    <div className="container">
      <div className="row">
       

        <div className="col-md-6 logins  " style={{marginTop:100}}>
          <h3 className="text-center heading text-primary">Login</h3>

          <Formik
            initialValues={{ email: '', password: '' }}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ handleChange, errors, touched, handleBlur, handleSubmit, isSubmitting ,values}) => (
              <form className="loginform" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
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

                {/* Additional Login Functionality (Optional) */}
                {/* <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>
                <br /> */}

                <button className="btn btn-primary" type="submit" disabled={errors.length > 0 || isSubmitting}>
                  Login
                </button>
                <p className="text-center mt-3" >
                  Don't have an account?{' '}
                  <Link to="/register">
                  <a  className="text-primary">
                    Register Here
                  </a></Link>
                  
                </p>
              </form>
            )}
          </Formik>

          {/* Forgot Password Link (Optional) */}
          {/* <a href="#" className="text-muted">Forgot Password?</a> */}
        </div>
        <div className="col-md-6 logins" style={{marginTop:100}}>
          {/* Brand and Logo (Adjust based on your design) */}
          <h1 className="text-center head1 text-primary">SnapStories</h1>
          <h3 className="head2 text-primary">Latest Blog</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
