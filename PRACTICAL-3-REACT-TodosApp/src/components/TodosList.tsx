import React from 'react';



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

const TodosList: React.FC<Props> = (props: Props) => {

  const curDateObj = new Date();
  const curDate = curDateObj.getDate();

  return (
    <>
      <div className="todolist-title"> <h2>Todos List</h2></div>
      <div className='todolist-main'>

        <div className='todolist'>
          {props.todosList.length === 0 ? <span>No Todos to display</span>
            : props.todosList.map((todo: Todo) => {


              const completedStyle = todo.isTaskCompleted ? "completedstyle" : '';
              const completedStyleCross = todo.isTaskCompleted ? 'todo-cross-green' : 'todo-cross';
              return (
                <div className='todolist-item' key={todo.UniqueKey}>
                  {
                    <h3 className={completedStyle} >
                      {todo.title}
                    </h3>
                  }

                  <input
                    type="checkbox"
                    className='checkBox'
                    checked={todo.isTaskCompleted}
                    onChange={(e) => {
                      const updatedTodo = { ...todo, isTaskCompleted: e.target.checked };
                      props.onDelete(updatedTodo);

                    }}
                  />
                




                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default TodosList;


