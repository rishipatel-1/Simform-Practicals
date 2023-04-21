import React, { useRef, useEffect, FC, forwardRef, ForwardedRef } from 'react';
import { toast } from 'react-toastify';

interface Todo {
  title: string;
  UniqueKey: number;
  curDate: number;
  isTaskCompleted: boolean;
}

interface Props {
  todosList: Todo[];
  cookieExpiration: () => void;
  onDelete: (todo: Todo) => void;
}

const TodosList: FC<Props> = forwardRef((props: Props, ref) => {
  const curDateObj = new Date();
  const curDate = curDateObj.getDate();
  const lastTodoRef = useRef<HTMLDivElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (lastTodoRef.current && checkboxRef.current) {
      lastTodoRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (inputRef.current) {
      inputRef.current.addEventListener('keydown', handleInputKeyDown);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keydown', handleInputKeyDown);
      }
    };
  }, [props.todosList]);

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (lastTodoRef.current) {
        lastTodoRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className="todolist-title">
        <h2>Todos List</h2>
      </div>
      <div className='todolist-main'>
        <div className='todolist'>
          {props.todosList.length === 0 ? (
            <span>No Todos to display</span>
          ) : (
            props.todosList.map((todo: Todo, index) => {
              const completedStyle = todo.isTaskCompleted ? 'completedstyle' : '';
              const isLastTodo = index === props.todosList.length - 1;

              return (
                <div
                  className={`todolist-item ${isLastTodo ? 'last-todo' : ''}`}
                  key={todo.UniqueKey}
                  ref={isLastTodo ? lastTodoRef : null}
                >
                  <div className='todo-title'>
                    <h3 className={completedStyle}>{todo.title}</h3>
                  </div>
                  <input
                    type='checkbox'
                    className='checkBox'
                    checked={todo.isTaskCompleted}
                    onChange={(e) => {
                      const updatedTodo = { ...todo, isTaskCompleted: e.target.checked };
                      props.onDelete(updatedTodo);
                    }}
                    ref={checkboxRef}
              
                  />
                </div>
              );
            })
          )}
        </div>
     
      </div>
    </>
  );
});

export default TodosList;
