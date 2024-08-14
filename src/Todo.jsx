import { useState } from 'react';
import './index.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

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

  {/* タスクが5個以上になればメッセージを表示して入力エリアをdisabledにする */}
   const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
    {/* inputエリアの処理 */}
    <InputTodo 
    todoText={todoText} 
    onChange={onChangeTodoText} 
    disabled={isMaxLimitIncompleteTodos}
    onClick={onClickAdd}>
    </InputTodo>

    {/* タスクが5個以上になればメッセージを表示して入力エリアをdisabledにする */}
    {isMaxLimitIncompleteTodos && (
    <p style={{color: "red" }}>
      タスクを溜め込むな！増やす前に消化！
    </p>
    )}

    {/* 未完了エリアの処理 */}
    <IncompleteTodos
      todos={incompleteTodos}
      onClickComplete={onClickComplete}
      onClickDelete={onClickDelete}
    ></IncompleteTodos>
      
    {/* 完了エリアの処理 */}
    <CompleteTodos
      todos={completeTodos}
      onClick={onClickBack}
    ></CompleteTodos>    
    </>
  );
};