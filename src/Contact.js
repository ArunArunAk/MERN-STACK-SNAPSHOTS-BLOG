import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mb-4 text-primary">Contact Us</h1>
          <p className='text-dark'>
            If you have any questions, comments, or just want to get in touch, please fill out the form below. We'd love to hear from you!
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="text-dark">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-dark">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="text-dark">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
