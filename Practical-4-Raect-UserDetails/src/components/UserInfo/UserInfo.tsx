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

    <tr onMouseEnter={() => {
      props.showPopupHandler(props)
    }} className='user-item-main'>
      <td className='image-username'>
        <img src={props.image} alt={props.username} />
        <div>
          <p className='user-name'>{props.username}</p>
          <p className='email'>{props.email}</p>
        </div>
      </td>
      <td className='ActiveSelect'>

        <select className='active-select'>
          <option value="Active">Active</option>
          <option value="unactive">Inactive</option>

        </select>

      </td>
      <td className='access'>
        <select className='people'>
          <option value="Active">Owner</option>
          <option value="unactive">Manager</option>
          <option value="unactive">Employee</option>

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