function Todo({id,completed,title, children, onRemove, onToggle}){
    return (
        <>
            <span onClick={()=> onToggle(id)} style={completed ? {textDecoration:"line-through"}: {} }>
                {children}
            </span>
            <span onClick={()=>onRemove(id)} style={{cursor:"pointer"}}> 🗑️</span>
        </>

    );
}

export default Todo;