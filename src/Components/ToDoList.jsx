import { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { CreateToDo } from "./CreateToDo";
import { getItem, setItem } from "../utils/localStorage";

// now with getItems
export const ToDoList = () => {
  const [ToDos, setToDos] = useState(
    getItem("ToDos", [
      { id: 0, name: "klarkommen" },
      { id: 1, name: "machen" },
      { id: 2, name: "Abwasch stehen lassen" },
    ])
  );
  //setItem useEFFECT

  useEffect(() => {
    setItem("ToDos", ToDos);
  }, [ToDos]);

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
