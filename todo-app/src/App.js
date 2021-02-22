import { FormControl, Input, InputLabel } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import { ButtonComponent } from "./Components/atoms/Button";
import { Todo } from "./Components/todo";

function App() {
  //setting shorttime memory for react-state , it clears when page refreshes, since it is not save to databases
  const [todos, setTodos] = useState([
    "Starting ...",
    "Adding Data ... ",
  ]);
  const [input, setInput] = useState("");

  const addTodosHandler = (event) => {
    //prevant from refreshing page on adding todos
    event.preventDefault();
    console.log("console1", input);
    // appending new data along with new data ...(spread operator)...concept
    setTodos([...todos, input]);
    // clear input field after adding todos in the list
    setInput("");
  };
  return (
    <div className="App">
      <h1>Todo-App</h1>
      {/* onchange captures every event trigger */}
      <FormControl>
        <InputLabel>Write A :-Todo </InputLabel>
        <Input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </FormControl>

      <ButtonComponent addTodosHandler={addTodosHandler} input={input} />
      <ul>
        {/* map array todos with every element todo */}
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
