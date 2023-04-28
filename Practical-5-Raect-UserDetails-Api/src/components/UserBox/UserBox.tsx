import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';
import { User } from '../../reducer/reducer';
import UserInfoPopup from '../UserInfoPopup/UserInfoPopup';
import { fetchUsersSuccess } from '../../actions/userActions';
import './UserBox.css';

interface UserBoxProps {}

const UserBox: React.FC<UserBoxProps> = (props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<any>();
  const dispatch = useDispatch();

  const closePopup = () => {
    setShowPopup(false);
  };

  const showPopupHandler = (item: unknown) => {
    setShowPopup(true);
    setSelectedUser(item);
    console.log('item obj', selectedUser);
  };

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        dispatch(fetchUsersSuccess(data.data));
        console.log(data.data);
      })
      .catch((error) => console.error(error));
  }, [dispatch]);


  return (
    <div className='Content'>
      <div className='container-main'>
        <div className='main-container' onMouseLeave={closePopup}>
          <div className='user-list-main'>
          <table>
                            <tbody>
                                <thead >
                                    <tr>
                                        <th>Name</th>
                                        <th className='head-status'>Status</th>
                                        <th >Access</th>
                                    </tr>
                                    
                                </thead>
                                <hr/>

                                {users.map((item) => (
                  <div key={item.id} className='mt-3'>
                    <UserInfo
                      showPopupHandler={showPopupHandler}
                      first_name={item.first_name}
                      last_name={item.last_name}
                      avatar={item.avatar}
                      email={item.email}
                      status={true}
                      access='Admin'
                      userId={item.id}
                      MonthlyClicks={0}
                      clicksReviewed={0}
                      id={item.id}
                      closePopup={closePopup}
                    />
                  </div>
                ))}
                            </tbody>
                        </table>
           
          </div>
        </div>
      </div>
      {showPopup && (
        <div className='userShow-main'>
          <UserInfoPopup selectedUser={selectedUser} />
        </div>
      )}
    </div>
  );
};

export default UserBox;
