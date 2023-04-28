import React from 'react';
import Header from './components/Header';

import './App.css';
import UserBox from './components/UserBox/UserBox';
import Footer from './components/Footer';

function App() {
  return (
     
    <div className="App">
      <Header/>
    <div className='container App-content mt-5'>
    <UserBox/>
    </div>
   <div className='footer'>

     <Footer/>
   </div>
    </div>
    

  );
}

export default App;
