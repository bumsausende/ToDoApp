import { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { CreateToDo } from "./CreateToDo";
import { getItem, setItem, useLocalStorageState } from "../utils/localStorage";

/*
mit F2 werden alle ToDos durch State ersetzt
Todolist stored below useEffects, Array durch customHook ersetzn 
now with getItems with useState[ToDos, setToDos] = useState(
getItem("ToDos"*/

export const ToDoList = () => {
  const [ToDos, setToDos] = useLocalStorageState("todos", [
    { id: 0, name: "klarkommen" },
    { id: 1, name: "machen" },
    { id: 2, name: "Abwasch stehen lassen" },
  ]);
  /*now the rendering happens- at <CreateToDo*/
  return (
    <>
      <ul>
        {ToDos.map(({ id, name }) => (
          <ToDoItem key={id} id={id} name={name} />
        ))}
      </ul>
      <CreateToDo
        onCreate={(name) => {
          setToDos([...ToDos, { id: ToDos.length, name }]);
        }}
      />
    </>
  );
};
// generierte ID fehlt
// ToDos = todos
