import React, { useState, KeyboardEvent, ChangeEvent,FC } from 'react';
import { toast } from 'react-toastify';



const AddTodos: FC= () => {
const [showAddTodos, setshowAddTodos] = useState<boolean>(true);
const [curTitle, setCurTitle] = useState<string>('');


const setTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setCurTitle(event.target.value);
};





const keyPressHandler = () => {
    setshowAddTodos(prevState => !prevState);
};

return (
    <div>
        <form> 
            {!showAddTodos && (
                <div className='inputDiv' >
                    <input
                        id='title'  
                        className='todoinput'
                        type='text'
                        placeholder='Add Your Todo'
                     
                        onChange={setTitle}
                        autoFocus
                    />
                </div>
            )}
        </form>
        <div>
            {showAddTodos && (
                <div className='addTodos-main'>
                    <button onClick={keyPressHandler} className='addTodos-plus'>+</button>
                </div>
            )}
        </div>
    </div>
);
};

export default AddTodos;