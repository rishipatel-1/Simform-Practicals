import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';
import { User } from '../../reducer/reducer';
import UserInfoPopup from '../UserInfoPopup/UserInfoPopup';
import { fetchUsersSuccess } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// library.add(faChevronsRight);

import './UserBox.css';
import { AppState } from '../../Store/store';
interface UserBoxProps { }

const UserBox: React.FC<UserBoxProps> = (props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const dispatch = useDispatch();
  let count = useSelector((state: AppState) => state);

  const closePopup = () => {
    setShowPopup(false);
  };
  const callBackToSetProps = (data: boolean, index: number, userType: string): void => {
    console.log(data, index);

    let allusers = [...users];
    allusers[(index - 1) % 6].status = data;
    allusers[(index - 1) % 6].access = userType;

    setUsers(allusers);
    dispatch(fetchUsersSuccess(allusers));
  }
  const hidePopupHandler = (): void => {
    setShowPopup(false);

  };
  const handleDeleteRow = (id: number): void => {

    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const showPopupHandler = (item: unknown) => {
    setShowPopup(true);
    setSelectedUser(item);
    console.log('item obj', selectedUser);
  };
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        const updatedUsers = data.data.map((user: User, index: number) => ({
          ...user,

          'status': index < 3,
          'access': index % 3 === 0 ? 'Owner' : index % 3 === 1 ? 'Manager' : 'Employee'
        }));
        setUsers(updatedUsers);
        console.log(updatedUsers);

        dispatch(fetchUsersSuccess(updatedUsers));
        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error(error));
  }, [currentPage, dispatch]);


  const PreviousPageButton = () => {
    const handleClick = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };

    console.log(users);

    return (
      <button onClick={handleClick} disabled={currentPage === 1}>

        <span aria-hidden="true">&laquo;</span>



      </button>
    );
  };

  const NextPageButton = () => {
    const handleClick = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    return (
      <button onClick={handleClick} disabled={currentPage === totalPages}>
        <span aria-hidden="true">&raquo;</span>

      </button>
    );
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
                    <th >Access</th>
                  </tr>

                </thead>
                <hr />

                {users.map((item) => (
                  <div key={item.id} className='mt-3'>
                    <UserInfo
                      showPopupHandler={showPopupHandler}
                      first_name={item.first_name}
                      last_name={item.last_name}
                      avatar={item.avatar}
                      email={item.email}
                      status={item.status}
                      access={item.access}
                      userId={item.id}
                      MonthlyClicks={0}
                      clicksReviewed={0}
                      id={item.id}
                      closePopup={closePopup}
                      callBack={callBackToSetProps}
                      hidePopupHandler={hidePopupHandler}
                      handleDeleteRow={handleDeleteRow}
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
      <div className='pageinfo'>     
        <div className="pagination">
        <PreviousPageButton />
        <span className='mt-2'>{currentPage}</span>
        <NextPageButton />
      </div>
      </div>


    </div>
  );
};

export default UserBox;
