import { useEffect, useState } from "react";
import "./App.css";
import DiaryList from "./components/DiaryList";
import DiaryForm from "./components/DiaryForm";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  // Render only once by App

  useEffect(() => {
    getLocalThoughts();
    getLocalTodos();
  }, []);

  const Header = [
    { id: 1, title: "Things to do", input: "What's keeping you busy?" },
    { id: 2, title: "Thoughts for the Day", input: "What's on your mind?" },
  ];

  // State for Todo
  const [todoItem, setTodoItem] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodoItem, setFilteredTodoItem] = useState([]);

  const addTodoItem = (todos) => {
    let todoItems = [...todoItem, todos];
    setTodoItem(todoItems);
  };

  // State for Thoughts

  const [thoughtItem, setThoughtItem] = useState([]);
  const [filteredThoughtItem, setFilteredThoughtItem] = useState([]);

  const addThoughtItem = (thoughts) => {
    let thoughtItems = [...thoughtItem, thoughts];
    setThoughtItem(thoughtItems);
  };

  // Side effect of the forms

  useEffect(() => {
    const filterTodoHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodoItem(
            todoItem.filter((data) => data.completed === true)
          );
          break;
        case "incomplete":
          setFilteredTodoItem(
            todoItem.filter((data) => data.completed === false)
          );
          break;

        default:
          setFilteredTodoItem(todoItem);
          break;
      }
    };
    filterTodoHandler();

    const filterThoughtHandler = () => {
      switch (status) {
        case "completed":
          setFilteredThoughtItem(
            thoughtItem.filter((data) => data.completed === true)
          );
          break;
        case "incomplete":
          setFilteredThoughtItem(
            thoughtItem.filter((data) => data.completed === false)
          );
          break;

        default:
          setFilteredThoughtItem(thoughtItem);
          break;
      }
    };

    filterThoughtHandler();

    // Save to Local Storage

    const saveLocalThoughts = () => {
      localStorage.setItem("thoughts", JSON.stringify(thoughtItem));
    };
    saveLocalThoughts();

    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todoItem));
    };

    saveLocalTodos();
  }, [todoItem, thoughtItem, status]);

  // Get data from Local Storage

  const getLocalThoughts = () => {
    if (localStorage.getItem("thoughts") === null) {
      localStorage.setItem("thoughts", JSON.stringify([]));
    } else {
      let thoughtsLocal = JSON.parse(localStorage.getItem("thoughts"));
      setThoughtItem(thoughtsLocal);
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos"));
      setTodoItem(todosLocal);
    }
  };

  return (
    <div className="App">
      <div className="container p-5">
        <h1 className="text-center p-3 mb-2 header">My Coding Journal</h1>
        <div className="row">
          <div className="col-md-6">
            <DiaryForm
              Header={Header[1]}
              addThoughtItem={addThoughtItem}
              setStatus={setStatus}
            />

            <DiaryList
              thoughtItem={thoughtItem}
              setThoughtItem={setThoughtItem}
              filteredThoughtItem={filteredThoughtItem}
            />
          </div>

          <div className="col-md-6">
            <TodoForm
              Header={Header[0]}
              addTodoItem={addTodoItem}
              setStatus={setStatus}
            />

            <TodoList
              todoItem={todoItem}
              setTodoItem={setTodoItem}
              filteredTodoItem={filteredTodoItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
