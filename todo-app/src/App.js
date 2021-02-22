import { useState } from 'react';
import './App.css';

function App() {
  const[todos, setTodos] = useState(['Lets go for outing','I am very fond of playing futsal'])
  const[input,setInput] = useState('');

  const addTodosHandler = (event)=>{
    //prevant from refreshing page on adding todos
    event.preventDefault();
    console.log("console1",input)
    // appending new data along with new data ...(spread operator)...concept 
    setTodos([...todos,input])
    // clear input field after adding todos in the list
    setInput('');
  }
  return (
    <div className="App">
      <h1>Todo-App</h1>
      <form>      {/* onchange captures every event trigger */}
      <input value={input} onChange={(event)=>{setInput(event.target.value)}}/>
      <button type="submit" onClick={addTodosHandler}>Submit</button>
     </form>
      <ul>
        {/* map array todos with every element todo */}
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
