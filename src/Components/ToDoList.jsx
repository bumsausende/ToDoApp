import { useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { CreateToDo } from "./CreateToDo";

export const ToDoList = () => {
  const [ToDos, setToDos] = useState([
    { id: 0, name: "klarkommen" },
    { id: 1, name: "machen" },
    { id: 2, name: "Abwasch stehen lassen" },
  ]);
  console.log(ToDos);

  return (
    <>
      <ul>
        {ToDos.map(({ id, name }) => (
          <ToDoItem key={id} name={name} />
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
