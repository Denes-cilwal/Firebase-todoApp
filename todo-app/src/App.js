import { useState } from "react";
import "./App.css";
import { AddButtonComponent } from "./Components/atoms/AddButton";
import { FormComponent } from "./Components/atoms/Form";
import { Todo } from "./Components/todo";
import { Typography } from '@material-ui/core';
import {RemoveButtonComponent} from "./Components/atoms/RemoveTodoButton";

function App() {
  //setting shorttime memory for react-state , it clears when page refreshes, since it is not save to databases
  const [todos, setTodos] = useState(["Starting ...", "Adding Data ... "]);
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
  
  // Add remove todo handler
  const removeTodosHanlder = () =>{
    setTodos(todos.filter(todo => todo.id !== todos.id))
  }

  return (
    <div className="App">
      <Typography>React-App -- 🤖 </Typography>
      <FormComponent
      input={input}
      setInput={setInput}
      />

      <AddButtonComponent addTodosHandler={addTodosHandler} input={input} />
      <RemoveButtonComponent removeTodosHandler={removeTodosHanlder}/>
      <ul>
        {/* map array todos with every element todo */}
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
