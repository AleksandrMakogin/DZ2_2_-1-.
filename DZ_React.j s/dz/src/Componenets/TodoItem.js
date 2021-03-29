


function TodoItem(props){
    return(
        <div className="Cards" >
            <h4>{props.id}</h4>
            <h3>{props.text}</h3>
            <h3>{props.completed}</h3>
        </div>
    )
}

export default TodoItem