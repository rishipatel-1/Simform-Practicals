import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router-dom';
import "./UserInfo.css"

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string;
  mobile: string;
}

const UserInfo: React.FC = () => {
  const location = useLocation();
  const user: User | undefined = location.state && location.state.user;
  console.log(user);
  
  return (
    user ? (
      <div className="container d-flex justify-content-center align-items-center rounded-5">
        <div className="row h-100 g-0 Usercontainer rounded-5">
          <div className="col-12 modaled border rounded-5 py-3 px-4 px-sm-5 d-flex flex-column justify-contnet-center align-items-center ">
          
            <span className="text-success successfully">Welcome Contrymind User</span>
            <div className="profilePic">
              <img
                src={user?.image}
                className="border my-4 rounded-circle"
                alt="Profile Image"
                width="150px"
                height="150px"
              />
            </div>
            <div className="pb-2 w-100">
              <span className="additional float-start">Additional Information: </span>
              <br />
            </div>
            <div className="pb-1 w-100">
              <span className="email float-start">Name: <span className="items-email">{user?.name}</span></span>
              <br />
            </div>
            <div className="pb-1 w-100">

            
              <span className="email float-start">Email: <span className="items-email">{user?.email}</span></span>
              <br />
            </div>
            <div className="pt-1 w-100">
              <span className="phone float-start">Phone No: <span className="items-phone">{user?.mobile}</span></span>
            </div>
            <div className='w-100 '> <button className='btn btn-warning mt-4 rouded-3 button-logout float-end'> <Link to="/Login" className='text-white'>Logout</Link></button></div>
          </div>
     
        </div>
      
      </div>
    ) : (
      <MDBCardText>No user information available.</MDBCardText>
    )
  );
    }  

export default UserInfo;
