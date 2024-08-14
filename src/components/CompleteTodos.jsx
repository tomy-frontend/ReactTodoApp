export const CompleteTodos = (props) => {

    const { todos, onClick } = props;

    return (
        <div className='common-area complete-area'>
        <p className='title'>完了したToDo</p>
        <ul>
        {todos.map((todo,index) => (
            <li key= {todo}>
            <div className='list-row'>
                <p className='todo-item'>{todo}</p>
                <button onClick={() => {onClick(index)}}>戻す</button>
                </div>
            </li>
            )
            )}
        </ul>
        </div>
    )
}