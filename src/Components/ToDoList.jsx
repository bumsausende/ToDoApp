import { useState } from "react";
import { ToDoItem } from "./ToDoItem"

export const ToDoList =() =>{
  
  const [ToDos, setToDos] = useState([
    {id:0, name:"klarkommen"},
    {id:1, name:"machen"},
    {id:2, name:"Abwasch stehen lassen"}
  ]);
  return (
  <>
  <ul>
 {ToDos.map(({id, name }) => (
   return <ToDoItem key={id} name={name}/>))};
</ul>
<CreateToDo
onCreate = {(newToDo)=>{
  const = id = ToDos.length;
const newToDoObjects ={
  id,
  name: newToDo,
};
setToDos([...ToDos, newToDoObjects]);

}}/>
</>
  );
};

  // ToDos = todos