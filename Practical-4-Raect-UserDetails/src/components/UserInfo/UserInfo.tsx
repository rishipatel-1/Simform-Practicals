import React from 'react';
import './UserInfo.css';
import { Trash, Lock, ChevronDown } from 'react-feather';

interface UserInfoProps {
  showPopupHandler: (item: any) => void;
  username: string;
  image: string;
  email: string;
  status: boolean;
  access: string;
  userId: number;
  MonthlyClicks: number;
  clicksReviewed: number;
  id: number;
  closePopup: () => void;
}

const UserInfo: React.FC<UserInfoProps> = (props) => {


  return (

    <tr className='user-item-main'>
      <td className='image-username' onMouseEnter={() => {
        props.showPopupHandler(props)
      }}>
        <img src={props.image} alt={props.username} />
        <div>
          <p className='user-name'>{props.username}</p>
          <p className='email'>{props.email}</p>
        </div>
      </td>

      <td className='ActiveSelect'>
        <select className='active-select' defaultValue={props.status ? "Active" : "Inactive"}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </td>
      
      <td className='access'>
        <select className='people' defaultValue={props.access}>
          <option value="Owner">Owner</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>
      </td>

      <td className='access-icon'>
        <div className='icons'>
          {props.id === 1 ? <Lock /> : <Trash />}
        </div>
      </td>
    </tr>



  );
};

export default UserInfo;