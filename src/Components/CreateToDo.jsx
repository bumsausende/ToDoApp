export const CreateToDo = ({ onCreate }) => {
  return (
    <form
      className="CreateToDo"
      onSubmit={(event) => {
        const form = event.target;
        const newToDo = form.elements.newToDo.value;
        onCreate(newToDo);
        event.preventDefault();
        console.log(newToDo);
      }}
    >
      <input type="text" name="newToDo" />
      <input type="submit" />
    </form>
  );
};
