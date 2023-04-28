import React, { FC } from 'react';
import './UserInfoPopup.css';

interface UserInfoPopupProps {
  selectedUser: {
    username: string;
    email: string;
    image: string;
    clicksReviewed: number;
    MonthlyClicks: number;
    planUses: number;
  };
}

const UserInfoPopup: FC<UserInfoPopupProps> = (props) => {
  const planUsesStyle = {
    width: `${Math.floor(Math.random() * 100) + 1}%`
  };

  return (
    <div className='popup-main'>
      <img className='mt-3' src={props.selectedUser.image} alt='' />
      <h4>{props.selectedUser.username} </h4>
      <p>{props.selectedUser.email}</p>
      <h3>Your Plan: Standard</h3>
      <button className='m-2'>Active User</button>
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
  );
};

export default UserInfoPopup;

