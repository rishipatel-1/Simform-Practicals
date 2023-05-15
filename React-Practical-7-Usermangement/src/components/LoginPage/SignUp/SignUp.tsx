import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../actions/signupAction';
import { useFormik } from 'formik';

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: null | string;
  mobile: string;
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
    mobile: "",
  });
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (event.key === "e" || event.key === "+" || event.key === "-") {

      event.preventDefault();

    }

  };
  function toBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        resolve(base64String);
      };

      reader.onerror = () => {
        reject(new Error('Failed to convert the image to base64.'));
      };

      reader.readAsDataURL(file);
    });
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      image: null as File | null,
      mobile: '',
    },
    validate: (values) => {
      const errors: Partial<User> = {};

      if (!values.name && !values.email && !values.mobile && !values.password && !values.confirmPassword && !values.image) {
        errors.name = 'Name is required';
      } 

      if (!values.email && !values.mobile && !values.password && !values.confirmPassword && !values.image && !values.mobile) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = 'Invalid email';
      }

      if (!values.image && !values.mobile) {
        errors.mobile = 'Mobile number is required';
      } else if (!/^[6-9]\d{9}$/.test(values.mobile)) {
        errors.mobile = 'Invalid mobile number';
      }

      if (!values.mobile && !values.password && !values.confirmPassword && !values.image && !values.mobile) {
        errors.password = 'Password is required';
      } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8,}$/.test(values.password)) {
        errors.password = 'Password must have 1 uppercase and be at least 8 characters long.';

      }



      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Passwords must match';
        console.log(values.image);

      }

      const maxSize = 2 * 1024 * 1024; // 2MB

      if (values.image && values.image.size > maxSize) {
        errors.image = 'Image size should be less than 2MB';
      }
      if (values.image == null) {
        errors.image = 'Image is Required';
      }





      return errors;
    },
    onSubmit: async (values) => {
      const storedUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      console.log(values.image);


      let imageBase64 = '';
      if (values.image) {
        imageBase64 = await toBase64(values.image);
      }

      const updatedValues = {
        ...values,
        image: imageBase64,
      };
      navigate('/Login')
      const updatedUsers = [...storedUsers, updatedValues];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      dispatch(registerUser(updatedValues));
      formik.resetForm();
    },
  });


  return (
    <div className="container-fluid SignUpcontainer d-flex align-items-center justify-content-center m-0 p-0">
      <div className="login-container">
        <div className='d-flex col-12'>
          <h2 className="text-center mb-4 Signup">Sign up</h2>
          <div className='col-md-6 col-6 ImagesignUpContainer'>
            <iframe
              title="Lottie Animation"
              className='m-0 p-0 mb-2'
              style={{ width: "20vw", height: "10vh" }}
              src="https://embed.lottiefiles.com/animation/51971"
            ></iframe>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <div className="relative-position">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="error">{formik.errors.name}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="relative-position">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="relative-position">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="error">{formik.errors.password}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container confirmpassword">
              <div className="relative-position">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div className="error">{formik.errors.confirmPassword}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="relative-position">
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="Mobile Number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onKeyDown={handleKeyDown  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="error">{formik.errors.mobile}</div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">

            <div className="input-container imageinput">
              <div className="relative-position">
                {formik.touched.image && formik.errors.image && (
                  <div className="error">{formik.errors.image}</div>
                )}
                <label htmlFor="image" className="file-upload-label">
                  <span className="file-upload-icon">📂</span>
                  <span className="file-upload-text">Choose an image</span>
                </label>
                <input
                  type="file"
                  className="form-control-file visually-hidden"
                  id="image"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0];
                    formik.setFieldValue('image', file);
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.values.image && (
                  <div className="image-name m-2">{formik.values.image.name}</div>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Register</button>
          <h6 className='mt-3'>Already have an Account
            <Link to="/Login" className='ms-3'>Login</Link></h6>
        </form>
      </div>
    </div>
  );
};

export default SignUp;