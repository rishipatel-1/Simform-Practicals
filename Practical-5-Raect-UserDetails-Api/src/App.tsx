import React from 'react';
import Header from './components/Header/Header';

import './App.css';
import UserBox from './components/UserBox/UserBox';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='container'>
         <div className='App-content mt-5 '>
        <UserBox />
        </div>
      </div>
        <Footer />
    </div>


  );
}

export default App;
