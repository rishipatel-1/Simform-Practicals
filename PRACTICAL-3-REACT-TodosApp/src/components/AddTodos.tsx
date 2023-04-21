import React, { useState, KeyboardEvent, ChangeEvent, FC, forwardRef, ForwardedRef, useImperativeHandle, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

interface Props {
  addTodo: (title: string) => void;
}

interface AddTodosRef {
  addTodoSubmithandler: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const AddTodos: FC<Props> = forwardRef((props: Props, ref: ForwardedRef<AddTodosRef>) => {
  const [showAddTodos, setshowAddTodos] = useState<boolean>(true);
  const [curTitle, setCurTitle] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const setTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setCurTitle(event.target.value);
  };

  const addTodoSubmithandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!curTitle) {
      toast.warn('Todo Title cannot be blank', {
        autoClose: 3000,
        position: toast.POSITION.TOP_CENTER,
        className: 'custom-toast',
      });
      return;
    }
    props.addTodo(curTitle);
    setshowAddTodos(false);
    setCurTitle('');
    toast.success('Todo Added Successfully', {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
      className: 'custom-toast',
    });
  };

  const cancelTodosHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setshowAddTodos((prevState) => !prevState);
    }

    if (event.key === 'Enter') {
      addTodoSubmithandler(event);
      setshowAddTodos((prevState) => !prevState);
    }
  };

  const keyPressHandler = () => {
    setshowAddTodos((prevState) => !prevState);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useImperativeHandle(ref, () => ({
    addTodoSubmithandler,
  }));

  return (
    <div>
      <form onSubmit={()=>addTodoSubmithandler}>
        {!showAddTodos && (
          <div className="inputDiv">
            <input
              id="title"
              className="todoinput"
              type="text"
              placeholder="Add Your Todo"
              onKeyDown={cancelTodosHandler}
              onChange={setTitle}
              autoFocus
              ref={inputRef}
            />
          </div>
        )}
      </form>
      <div>
        {showAddTodos && (
          <div className="addTodos-main">
            <button onClick={keyPressHandler} className="addTodos-plus">
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default AddTodos;
