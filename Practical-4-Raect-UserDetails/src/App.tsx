import React from 'react';
import Header from './components/Header';

import './App.css';
import UserBox from './components/UserBox/UserBox';
import Footer from './components/Footer';

function App() {
  return (
     
    <div className="App h-100 w-100">
      <div className='header'>
      <Header/>
      </div>
    <div className='container App-content mt-5'>
    <UserBox/>
    </div>
    

     <Footer/>

    </div>
    

  );
}

export default App;
