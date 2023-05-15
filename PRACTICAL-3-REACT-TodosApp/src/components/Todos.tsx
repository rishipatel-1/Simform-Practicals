import React, { FC, useState, useEffect } from 'react';
import AddTodos from './AddTodos';
import TodosList from './TodosList';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

interface Todo {
  title: string;
  UniqueKey: number;
  curDate: number;
  isTaskCompleted: boolean;
}

const Todos: FC = () => {
  const initialList: Todo[] = [];

  const [cookies, setCookie, removeCookie] = useCookies(['todos']);

  const [todosList, setTodosList] = useState<Todo[]>( cookies.todos || initialList );

  const cookieExpiration = new Date();
  cookieExpiration.setDate(cookieExpiration.getDate() + 1);

  const addTodo = (title: string) => {
    const UniqueKey = Math.random();
    const curDateObj = new Date();
    const curDate = curDateObj.getDate();

    const myTodo = {
      title: title,
      UniqueKey: UniqueKey,
      curDate: curDate,
      isTaskCompleted: false,
    };

    setTodosList([...todosList, myTodo]);
  };

  const onDelete = (todo: Todo) => {
    const updatedTodosList = todosList.map((e) => {
      if (e.UniqueKey === todo.UniqueKey) {
        const updatedTodo = { ...e, isTaskCompleted: !e.isTaskCompleted };
        if (updatedTodo.isTaskCompleted) {
          toast.success("Success! Task Completed", {
            autoClose: 3000
          });
        }
        return updatedTodo;
      }
      return e;
    });
  
    setTodosList(updatedTodosList);
    setCookie('todos', JSON.stringify(updatedTodosList), { expires: cookieExpiration });
  };
  
  

  useEffect(() => {
    setCookie('todos', JSON.stringify(todosList), { expires: cookieExpiration });
    

  }, [todosList]);

  return (
    <div>
      <TodosList
        todosList={todosList}
        cookieExpiration={() => removeCookie('todos')}
        onDelete={onDelete}
      
      />
      <AddTodos addTodo={addTodo} />
    </div>
  );
};

export default Todos;
