import React , {FC} from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';


const App:FC = () => {
  return (
    <div className='main'>
      <div className='logo'></div>
      <h1><strong> Welcome To React with TYPESCRIPT</strong></h1>
      
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
