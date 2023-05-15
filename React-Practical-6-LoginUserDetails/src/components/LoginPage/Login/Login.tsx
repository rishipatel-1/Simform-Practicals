import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useFormik } from 'formik';
import "./Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.signUp.users);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors: { [key: string]: string } = {};

      if (!values.email) {
        errors.email = 'Email is required';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      }

      return errors;
    },
    onSubmit: (values) => {
      let loggedInUser = null;

      for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.email === values.email && user.password === values.password) {
          loggedInUser = user;
          break;
        }
      }

      if (loggedInUser) {
        // Navigate to the `/userinfo` route and pass the logged-in user as state
        navigate('/user', { state: { user: loggedInUser } });
        formik.resetForm();
      } else {
         formik.setFieldError('password', 'Email or Password is invalid');
      }

      
    },

  });

  return (
    <MDBContainer className="my-6 Login m-0 p-0">
      <MDBCard className='loginrow'>
        <MDBRow className='g-0 h-100'>
          <MDBCol md='6' className="contentCenter">
            <iframe title="Lottie Animation" id="iframebg" className='m-0 p-0 mb-2' src="https://embed.lottiefiles.com/animation/70640"></iframe>
          </MDBCol>
          <MDBCol md='6' className="LoginComponent">
            <div className='loginDiv'>
              <MDBCardBody className='logincard'>
                <h5 className="fw-normal my-4 pb-3">Sign into your account</h5>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && <div className="Error mb-2">{formik.errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password && <div className="Error mb-2">{formik.errors.password}</div>}
                  </div>


                  <div className='loginbtn'>
                    <button className="mb-4 px-5" color='dark' type="submit">Login</button>
                    <p className="mb-5 pb-lg-2 register">Don't have an account? <Link to="/">Register here</Link></p>
                  </div>
                </form>
              </MDBCardBody>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
