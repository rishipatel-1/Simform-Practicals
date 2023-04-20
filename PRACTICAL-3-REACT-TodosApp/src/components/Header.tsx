import React, { FC } from 'react';
import '../index';

const Header:FC = () => {
  const curDate = new Date();
  const curMonth = curDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  const curDay = curDate.toLocaleString('default', { weekday: 'long' }).toUpperCase();

  return (
    <>
    
    <div className='header-main'>
      <div className='header-date'>
        <h1 className='date-day'>{curDate.getDate().toString()}</h1>
        <div className='date-month-year'>
          <p className='date-month'>{curMonth}</p>
          <span className='date-year'>{curDate.getFullYear().toString()}</span>
        </div>
      </div>
      <div className='header-day'>
        <b><p>{curDay}</p></b>
      </div>
    </div>
    </>
  );
};

export default Header;
