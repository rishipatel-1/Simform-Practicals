import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import SignUp from '../SignUp/SignUp';

import "./Form.css"

const LogIn = () => {
  return (
    <div className='col-12 d-flex mainContainer m-0 p-0'>
      <div className='col-4 FormContainer m-2'>
         <SignUp/>
      </div>
   
      <div className='col-8 ImageContainer'>

        <iframe title="Lottie Animation" className='m-0 p-0' style={{ width: "45vw",height: "80vh",backgroundColor: " rgb(206 222 255)" }} src="https://embed.lottiefiles.com/animation/51971"></iframe>
      </div>
    </div>
  );
};

export default LogIn;






// <div className="registration-form">
// <form>
// <div className='iconMain'>
// <iframe src="https://embed.lottiefiles.com/animation/138887"></iframe>

// </div>
//     {/* <div className="form-icon">
//         <span><i className="icon icon-user"></i></span>
//     </div> */}
   
//     <div className="form-group col-12">
//         <input type="text" className="form-control item" id="username" placeholder="Username"/>
//     </div>
//     <div className="form-group">
//         <input type="text" className="form-control item" id="email" placeholder="Email"/>
//     </div>
//     <div className="form-group">
//         <input type="password" className="form-control item" id="password" placeholder="Password"/>
//     </div>
//     <div className="form-group">
//         <input type="password" className="form-control item" id="password" placeholder="Confirm Password"/>
//     </div>
    
//     <div className="form-group">
//         <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number"/>
//     </div>
//     <div className="form-group">
//     <h6 className='float-start ms-3'>Image</h6>
//         <input type="file" className="form-control item" id="username" placeholder="Image"/>
//     </div>

//     <div className="form-group">
     
//         <button type="button" className="btn btn-block create-account">Create Account</button>
//     </div>
    
// </form>
// {/* <div className="social-media">
//     <h5>Sign up with social media</h5>
//     <div className="social-icons">
//         <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
//         <a href="#"><i className="icon-social-google" title="Google"></i></a>
//         <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
//     </div>
// </div> */}

// </div>