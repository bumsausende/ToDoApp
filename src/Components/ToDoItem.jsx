import { useState } from "react";

export const ToDoItem = ({name}) => {
    const [isDone, setIsDone] = useState(false);
    
    return (
<li onClick = {() =>{
setIsDone(!isDone);
}}
className={isDone ? "ToDoItem ToDoItem--isDone" : "ToDoItem"}>
    {name}
    </li>
    );
};

