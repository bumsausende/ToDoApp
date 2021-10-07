import { ToDoList } from "./Components/ToDoList";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <h1 className="titleToDo"> TO DO gnaaa</h1>
      <h2 className="secondTitleToDo"> F*CK i forgot something</h2>
      <ul className="listOfToDos">
        <ToDoList />
      </ul>
    </div>
  );
};
