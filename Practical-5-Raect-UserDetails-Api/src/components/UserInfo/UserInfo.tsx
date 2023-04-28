import React from 'react';
import './UserInfo.css';
import { Trash, Lock, ChevronDown } from 'react-feather';

type UserInfoProps = {
  showPopupHandler: (item: unknown) => void;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  status: boolean;
  access: string;
  userId: number;
  MonthlyClicks: number;
  clicksReviewed: number;
  id: number;
  closePopup: () => void;
};


const UserInfo: React.FC<UserInfoProps> = (props) => {


  return (

    <tr onMouseEnter={() => {
      props.showPopupHandler(props)
    }} className='user-item-main'>
      <td className='image-username'>
        <img src={props.avatar} alt={`${props.first_name} ${props.last_name}`} />
        <div>
          <p className='user-name'>{`${props.first_name}  ${props.last_name}`}</p>
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