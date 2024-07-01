import React from 'react';
import '../styles/Todo.css';
import '../styles/Common.css';

const Todo = (props) => {
  const { status, name, priority } = props;
  return (
    <div className="generic-div todo-container">
      <div>
        {status}
      </div>
      <div>
        {priority}
      </div>
      <div>
        {name}
      </div>
    {/* // <div className="todo-container generic-div">
    //   <div className="todo-content">
    //     <div className="status-wrapper">
    //       {status}
    //     </div>
    //     <div className="priority-wrapper">
    //       {priority}
    //     </div>
    //     <div className="name-wrapper">
    //       {name}
    //     </div>
    //   </div> */}
    </div>
  );
}

export default Todo;