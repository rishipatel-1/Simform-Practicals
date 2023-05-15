import React from 'react';
import Header from "./components/Header"
import Todos from "./components/Todos"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
    <ToastContainer />
    <div className="app-main">   
    <Header/>
    <Todos/>
    </div>
    </>
  );
}

export default App;
