import React, { FC, useState, useEffect } from 'react';
import './UserInfoPopup.css';
import { FaTimes } from 'react-icons/fa';

interface UserInfoPopupProps {
  selectedUser: {
    username: string;
    image: string;
    email: string;
    status: boolean;
    access: string;
    userId: number;
    MonthlyClicks: number;
    clicksReviewed: number;
    id: number;
  };
}

const UserInfoPopup: FC<UserInfoPopupProps> = (props) => {
  const [showPopup, setShowPopup] = useState(true);
  const planUsesStyle = {
    width: `${Math.floor(Math.random() * 100) + 1}%`
  };
 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 550) {
        setShowPopup(true);
      } 
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCancelClick = () => {
    setShowPopup(false);
  };
  return (
    <>
        <button className='cancel-button' onClick={handleCancelClick}>
            <FaTimes />
          </button>
    <div className='popup-main'>
      <img className='mt-3' src={props.selectedUser.image} alt='' />
      <h4>{props.selectedUser.username} </h4>
      <p>{props.selectedUser.email}</p>
      <h3>Your Plan: Standard</h3>
      <button className='m-2'>{props.selectedUser.status ? "Active" : "Inactive"} User</button>

      <h5 className='mt-3'>Plan Uses</h5>
      <div className='plan-uses-line' style={planUsesStyle}></div>
      <div className='statistic-main mt-2'>
        <div className='reviewed'>
          <h2>{props.selectedUser.clicksReviewed}</h2>
          <p>clicks reviewed</p>
        </div>
        <div className='statistic-line'></div>
        <div className='clicks'>
          <h2>{props.selectedUser.MonthlyClicks}</h2>
          <p>Monthly clicks</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserInfoPopup;

