import React, { FC } from 'react';
import './UserInfoPopup.css';

interface UserInfoPopupProps {
  selectedUser: {
    username: string;
    avatar: string;
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
  const planUsesStyle = {
    width: `${Math.floor(Math.random() * 100) + 1}%`
  };
  const clicksReviewed = Math.floor(Math.random() * (4500 - 2300 + 1)) + 2300;
  const MonthlyClicks = Math.floor(Math.random() * (4500 - 2300 + 1)) + 2300;

  return (
    <div className='popup-main'>
      <img className='mt-3' src={props.selectedUser.avatar} alt='' />
      <h4>{props.selectedUser.username} </h4>
      <p>{props.selectedUser.email}</p>
      <h3>Your Plan: Standard</h3>
      <button className='m-2'>{props.selectedUser.status ? "Active" : "Inactive"} User</button>
      <h5 className='mt-3'>Plan Uses</h5>
      <div className='plan-uses-line' style={planUsesStyle}></div>
      <div className='statistic-main mt-3'>
        <div className='reviewed'>
          <h2>{clicksReviewed}</h2>
          <p>clicks reviewed</p>
        </div>
        <div className='statistic-line'></div>
        <div className='clicks'>
          <h2>{MonthlyClicks}</h2>
          <p>Monthly clicks</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPopup;
