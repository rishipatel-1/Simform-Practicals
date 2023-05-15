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

        <iframe title="Lottie Animation" className='m-0 p-0 LottieAnimation' src="https://embed.lottiefiles.com/animation/51971"></iframe>
      </div>
    </div>
  );
};

export default LogIn;



