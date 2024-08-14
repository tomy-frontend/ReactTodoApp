import { useState } from 'react';
import './index.css';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]); //空の配列として定義
  const [completeTodos, setCompleteTodos] = useState([]); //空の配列として定義

  //inputへの入力を検知して変更する関数
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタンを押すと、未完了の配列に対して、inputに入力された値を入れて新しい配列を作成する関数
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText]; //定義した未完了の配列に、inputで取得した、新しいtodoTextを入れて、新しい配列を作成する
    setIncompleteTodos(newTodos); //setIncomppeteTodosにさっき作った newTodosを設定する
    setTodoText(""); //setTodoTextはまた入力できるように空文字にする
   };

   //削除ボタンを押すと、対象行を選択して削除する関数
   const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1); //newTodosで定義された配列から、指定されたindexを一つ削除する
    setIncompleteTodos(newTodos);
   };

   //完了ボタンを押すと、未完了のところから削除して、完了エリアに追加する
   const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1); //newTodosで定義された配列から、指定されたindexを一つ削除する

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]; //現在の完了配列のを元に新しい配列を追加、未完了エリアのindexを取得して、新しい配列を定義する。
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
   };

   //戻すボタンを押すと、完了のところから削除して、未完了エリアに移動する
   const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]; //既存の配列をもとに、新しい完了エリアの配列を定義する
    newCompleteTodos.splice(index, 1); //完了エリアから今の要素を削除する

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
   };


  return (
    <>
    <div className='input-area'>
      <input type="text" placeholder='ToDoを入力' value={todoText} onChange={onChangeTodoText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
    <div className='common-area incomplete-area'>
      <p className='title'>未完了のToDo</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
            <li key= {todo}>
              <div className='list-row'>
              <p className='todo-item'>{todo}</p>
              <button onClick={() => {onClickComplete(index)}}>完了</button>
              <button onClick={() => {onClickDelete(index)}}>削除</button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
    <div className='common-area complete-area'>
      <p className='title'>完了したToDo</p>
      <ul>
      {completeTodos.map((todo,index) => (
           <li key= {todo}>
           <div className='list-row'>
             <p className='todo-item'>{todo}</p>
             <button onClick={() => {onClickBack(index)}}>戻す</button>
             </div>
           </li>
          )
        )}
      </ul>
    </div>
    </>
  );
};