import React, { useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducer/reducer';
import './UserBox.css';
import UserInfoPopup from '../UserInfoPopup/UserInfoPopup';

interface UserBoxProps {
}

const UserBox: React.FC<UserBoxProps> = (props) => {
    const users = useSelector((state: AppState) => state.users);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<any>();


    const closePopup = () => {
        setShowPopup(false);
    };
    const showPopupHandler = (item: any) => {
        setShowPopup(true);
        setSelectedUser(item);
        console.log('item obj', selectedUser);
    };


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
                                        <th>Access</th>
                                    </tr>
                                    
                                </thead>
                                <hr/>

                                {
                                    users.map(item => (
                                        <div key={item.userId} className="mt-3" >

                                            <UserInfo
                                                showPopupHandler={showPopupHandler}
                                                username={item.username}
                                                image={item.image}
                                                email={item.email}
                                                status={item.status}
                                                access={item.access}
                                                userId={item.userId}
                                                MonthlyClicks={item.MonthlyClicks}
                                                clicksReviewed={item.clicksReviewed}
                                                id={item.userId}
                                                closePopup={closePopup}
                                            />

                                        </div>
                                    ))
                                }
                            </tbody>
                        </table>


                    </div>


                </div>

            </div>
            {showPopup && (
                <div className='userShow-main'>


                    <UserInfoPopup


                        selectedUser={selectedUser} />

                </div>

            )}
        </div>


    );
};

export default UserBox;