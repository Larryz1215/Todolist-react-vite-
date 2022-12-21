import React, { useEffect, useContext } from "react";
import { TodoContext } from "./TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faX } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  const { todos, deleteTodo, setTodo, setEditMode } = useContext(TodoContext);
  const enableEditMode = (id, todoContent, todoTitle) => {
    setEditMode(true);
    setTodo({
      id,
      todoContent,
      todoTitle,
    });
  };

  //將todos存入localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todoContainer">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="todoTitle">
            <h1>{todo.todoContent}</h1>
            <FontAwesomeIcon
              icon={faX}
              className="deleteNote"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            />
          </div>
          <div className="note">
            <p>{todo.todoTitle}</p>
            <FontAwesomeIcon
              icon={faPen}
              className="editNote"
              onClick={() => {
                enableEditMode(todo.id, todo.todoContent, todo.todoTitle);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
