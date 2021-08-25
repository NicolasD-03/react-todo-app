import { useState, useRef, useEffect } from "react";

import Todo from "./Todo/Todo";
import Form from "../Form/Form";

import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const textInput = useRef(null);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  }, []);

  const addTodo = (content) => {
    const newTodo = {
      id: todos.length,
      content: content,
      done: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const removeTodo = (id) => {
    const oldTodos = [...todos];
    oldTodos[id] = null;
    setTodos(oldTodos);
    localStorage.setItem("todos", JSON.stringify(oldTodos));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (textInput.current.value) {
      addTodo(textInput.current.value);
      textInput.current.value = "";
    }
  };

  const handleCheck = (id) => {
    const oldTodos = [...todos];
    oldTodos[id].done = !todos[id].done;
    setTodos(oldTodos);
    localStorage.setItem("todos", JSON.stringify(oldTodos));
  };

  const showTodo = () => {
    if (!todos || !todos.filter((x) => x).length) {
      return (
        <div className="info-message">Sorry but you don't have todos 😢</div>
      );
    }

    return todos
      .filter((x) => x)
      .map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          content={todo.content}
          done={todo.done}
          remove={() => removeTodo(todo.id)}
          handleCheck={() => handleCheck(todo.id)}
        />
      ));
  };

  return (
    <>
      <Form input={textInput} handleSubmit={onSubmit} />
      <hr className="separator" />
      <div className="todos">{showTodo()}</div>
    </>
  );
};

export default Todos;
