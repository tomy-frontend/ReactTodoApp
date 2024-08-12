import { useState } from 'react';
import './index.css';

export const Todo = () => {

  const [incompleteTodos, setIncompleteTodos] = useState(["ToDoです1", "ToDoです2"]);
  const [completeTodos, setCompleteTodos] = useState(["完了したToDoです1", "完了したToDoです2"]);

  return (
    <>
    <div className='input-area'>
      <input type="text" placeholder='ToDoを入力' />
      <button>追加</button>
    </div>
    <div className='common-area incomplete-area'>
      <p className='title'>未完了のToDo</p>
      <ul>
        {incompleteTodos.map((todo) => (
            <li key= {todo}>
              <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button>完了</button>
              <button>削除</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
    <div className='common-area complete-area'>
      <p className='title'>完了したToDo</p>
      <ul>
      {completeTodos.map((todo) => (
           <li key= {todo}>
           <div className='list-row'>
             <p className='todo-item'>{todo}</p>
             <button>戻す</button>
             </div>
           </li>
          )
        )}
      </ul>
    </div>
    </>
  );
};
