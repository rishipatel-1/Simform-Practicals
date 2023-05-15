import React,{FC} from 'react';



interface Todo {
  title: string;
  UniqueKey: number;
  curDate: number;
  isTaskCompleted: boolean;
}



const TodosList: FC = (props) => {

  const curDateObj = new Date();
  const curDate = curDateObj.getDate();

  return (
    <>
      <div className="todolist-title"> <h2>Todos List</h2></div>
      <div className='todolist-main'>

        <div className='todolist'>
         
            


        
                <div className='todolist-item' >
                  {
                    <h3 className="completedStyle" >
                      Todo Lists
                    </h3>
                  }

                  <input
                    type="checkbox"
                    className='checkBox'/>
              

                </div>
    
            
          
        </div>
      </div>
    </>
  );
};

export default TodosList;


