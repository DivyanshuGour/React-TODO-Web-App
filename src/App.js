import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Todos from './Todos';
import { useEffect, useState } from 'react';
import db from './firebase_config';
import firebase from "firebase";


function App() {

  useEffect(() => {
    getTodos();
  }, [])

  const [todoInput, setTODO] = useState("");

  const [todoList, setTodoList] = useState([])

  function getTodos() {
    db.collection('todos').onSnapshot(function (snapshot) {
      setTodoList(
        snapshot.docs.map((docs) => ({
          id: docs.id,
          todo: docs.data().todo,
          timestamp: docs.data().time,
        })))
    });
  }

  function addTODO(e) {
    e.preventDefault();
    db.collection('todos').add({
      'todo': todoInput,
      'timestamp': firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTODO("");
  }


  return (
    <div className="App">
      <h1>Divyanshu's TODO List</h1>
      <form>
        <TextField
          style={{ width: 500 }}
          id="outlined-basic"
          value={todoInput}
          onChange={(e) => { setTODO(e.target.value); }}
          label="Add TODO"
          variant="outlined" />
        <Button type="submit" onClick={addTODO}></Button>
        {todoList.map((todos) => (<Todos todo={todos.todo} time={todos.timestamp} />))}
      </form>

    </div>
  );
}

export default App;
