import React, { useState, useEffect } from "react";
import firebase from "firebase"
import Todo from "./Todo";
import "./styles.css";
import db from "./firebase";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
 
  // DataBase
  // whwn app loads, fetch from database
  // useEffect(Function,Dependancies)
  useEffect(() => {
    db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    });
  }, []);

  const handleClick = event => {
    event.preventDefault();
    // Add todos to datadase
    db.collection("todos").add(
      { 
        todo: input,
timestamp: firebase.firestore.FieldValue.serverTimestamp()
       }
      );
   
    //setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form action="">
        <FormControl>
          <InputLabel>Add TODOS</InputLabel>
          <Input
            value={input}
            onChange={event => setInput(event.target.value)}
            type="text"
          />
        </FormControl>
        {/* <input value={input} onChange= {event => setInput(event.target.value)}type="text"/> */}
        <Button
          disabled={!input}
          onClick={handleClick}
          type="submit"
          variant="contained"
          color="primary"
        >
          ADD TODO
        </Button>
        {/* <button ></button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}
