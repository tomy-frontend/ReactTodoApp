export const InputTodo = (props) => {
    const style = {
        backgroundColor: "#c6e5d9",
        width: "80%",
        height: "auto",
        padding: "8px",
        margin: "8px",
        borderRadius: "8px",
    };

    const inputStyle = {
        marginRight: ".5em",
    }

    const { todoText, onChange, onClick, disabled } = props;

    return (
        <div style={style}>
            <input disabled={disabled} style={inputStyle} type="text" placeholder='ToDoを入力'
                value={todoText} 
                onChange={onChange} />
            <button  disabled={disabled} onClick={onClick}>追加</button>
        </div>
    )
}