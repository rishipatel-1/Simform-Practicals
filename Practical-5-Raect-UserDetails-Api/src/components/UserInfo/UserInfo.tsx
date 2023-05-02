import React from 'react';
import './UserInfo.css';
import { Trash, Lock, } from 'react-feather';
import { ChangeEvent } from 'react';

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
  callBack:(data:boolean,index:number,userType:string)=>void;
};


const UserInfo: React.FC<UserInfoProps> = (props) => {
  const handleStatus = (e: ChangeEvent<HTMLSelectElement>): void => {
    props.callBack(!props.status,props.id,props.access);
  };
  const handleAccess = (e: ChangeEvent<HTMLSelectElement>): void => {
    props.callBack(props.status,props.id,e.target.value);
  };
  return (

    <tr className='user-item-main'>
      <td className='image-username' onMouseEnter={() => {
        props.showPopupHandler(props)
      }}>
        <img src={props.avatar} alt={`${props.first_name} ${props.last_name}`} />
        <div>
          <p className='user-name'>{`${props.first_name}  ${props.last_name}`}</p>
          <p className='email'>{props.email}</p>
        </div>
      </td>

      <td className='ActiveSelect'>
        <select className='active-select' onChange={handleStatus} defaultValue={props.status ? "Active" : "Inactive"}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </td>

      <td className='access'>
        <select className='people' onChange={handleAccess}  defaultValue={props.access}>
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