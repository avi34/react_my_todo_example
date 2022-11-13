
import './App.css';
import Header from './MyComponents/Header'
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import { Todos } from './MyComponents/Todos';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  // Routes,
  Route,
  // Link,
  Switch
} from 'react-router-dom';


function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = []

  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"))

  }
  const onDelete = (todo) => {
    let index = todos.indexOf(todo)
    console.log("i am on delete", index)
    // todos.splice(index, 1)
    setTodos(todos.filter((e) => {
      console.log(e)
      return e !== todo;
    }))
  }
  const addTodo = (title, discription) => {

    // console.log(title, discription)
    let sno;
    if (todos.length === 0) {
      sno = 0
    } else {

      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      name: title,
      discription: discription
    }

    // console.log(myTodo)
    setTodos([...todos, myTodo]);

  }

  const [todos, setTodos] = useState(inittodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (

    <Router>

      <Header title="My todolist" searchBar={false} />
      <Switch>
        <Route exact path="/" >
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todolist={todos} onDelete={onDelete} />
          </>

        </Route>
        <Route exact path="/about">
          <About />
        </Route>

      </Switch>


      <Footer />
    </Router>

  );
}

export default App;


