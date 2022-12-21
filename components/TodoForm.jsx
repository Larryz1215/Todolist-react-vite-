import React from "react";
import { useTodo } from "./TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

//新增Todo
const TodoForm = () => {
  const { addTodo, todo, setTodo, setEditMode, editMode, updateTodo } =
    useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.todoContent !== "" && todo.todoTitle !== "") {
      if (!editMode) {
        addTodo(todo.todoContent, todo.todoTitle);
      } else {
        updateTodo(todo.id, todo.todoContent, todo.todoTitle);
        setEditMode(false);
      }
      setTodo({
        id: 0,
        todoContent: "",
        todoTitle: "",
      });
    }
  };

  return (
    <form>
      <input
        className="inputTitle"
        type="text"
        value={todo.todoContent}
        onChange={(e) =>
          setTodo((prev) => ({ ...prev, todoContent: e.target.value }))
        }
        placeholder="Title"
      />
      <br />
      <textarea
        className="TextFiled"
        rows="3"
        type="text"
        value={todo.todoTitle}
        onChange={(e) =>
          setTodo((prev) => ({ ...prev, todoTitle: e.target.value }))
        }
        placeholder="Take a note ..."
      />
      <br />

      {editMode ? (
        <FontAwesomeIcon
          icon={faCheck}
          className="formBtn"
          onClick={handleSubmit}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlus}
          className="formBtn"
          onClick={handleSubmit}
        />
      )}
    </form>
  );
};

export default TodoForm;
