import { useState, useEffect } from "react";
import { useLocalStorageState } from "../utils/localStorage";

//umbenennen des Hooks und Key vergeben!
export const ToDoItem = ({ name, id }) => {
  const [isDone, setIsDone] = useLocalStorageState(`isDoneState ${id}`, false);

  return (
    <li
      onClick={() => {
        setIsDone(!isDone);
      }}
      className={isDone ? "ToDoItem ToDoItem--isDone" : "ToDoItem"}
    >
      {name}

      <button
        type="button"
        className="TodoItem__remove"
        title={`Remove "${name}"`}
        onClick={() => {
          onRemove?.();
          removeIsDone();
        }}
      >
        ❌
      </button>
    </li>
  );
};
