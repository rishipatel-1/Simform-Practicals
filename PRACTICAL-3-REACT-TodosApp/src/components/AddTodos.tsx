import React, { useState, KeyboardEvent, ChangeEvent,FC } from 'react';
import { toast } from 'react-toastify';


interface Props {
addTodo: (title: string) => void;
}

const AddTodos: FC<Props> = (props: Props) => {
const [showAddTodos, setshowAddTodos] = useState<boolean>(true);
const [curTitle, setCurTitle] = useState<string>('');


const setTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setCurTitle(event.target.value);
};

const addTodoSubmithandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!curTitle) {
        toast.warn("Todo Title cannot be blank", {
            autoClose: 3000
        });
        return;
    }
    props.addTodo(curTitle);
    setshowAddTodos(prevState => !prevState);
    toast.success("Todo Added Sucessfully", {
        autoClose: 3000,
        
    });
};


const cancelTodosHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
        setshowAddTodos(prevState => !prevState);
    }

    if (event.key === 'Enter') {
        addTodoSubmithandler(event);
        setshowAddTodos(prevState => !prevState);
       
    }
};

const keyPressHandler = () => {
    setshowAddTodos(prevState => !prevState);
};

return (
    <div>
        <form onSubmit={()=>addTodoSubmithandler}> 
            {!showAddTodos && (
                <div className='inputDiv' >
                    <input
                        id='title'  
                        className='todoinput'
                        type='text'
                        placeholder='Add Your Todo'
                        onKeyDown={cancelTodosHandler}
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