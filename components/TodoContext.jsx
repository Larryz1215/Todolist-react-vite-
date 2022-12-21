import { createContext, useReducer, useContext, useState } from "react";
import TodoReducer, { ACTIONS, initState } from "./TodoReducer";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);
  const [todo, setTodo] = useState({
    id: 0,
    todoContent: "",
    todoTitle: "",
  });

  const [editMode, setEditMode] = useState(false);
//定義新增Todo的方法
  const addTodo = (todoContent, todoTitle) => {
    const todo = todoObj(todoContent, todoTitle);
    const newTodo = [...state.todos, todo];

    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        todo: newTodo,  
      },
    });
  };
//定義刪除Todo的方法
  const deleteTodo = (todoId) => {
    const newTodo = state.todos.filter((todo) => todo.id !== todoId);
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };
//定義更新Todo的方法
  const updateTodo = (todoId, todoContent, todoTitle) => {
    const newTodo = state.todos.map((todo) => {
      if (todo.id == todoId) {
        return {
          ...todo,
          todoContent,
          todoTitle,
        };
      } else {
        return todo;
      }
    });
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: {
        todo: newTodo,
      },
    });
  };
//宣告Provider的value
  const value = {
    todos: state.todos,
    todo,
    setTodo,
    editMode,
    setEditMode,
    updateTodo,
    addTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
//定義todo
const todoObj = (todoContent, todoTitle) => {
  return {
    id: uuidv4(),
    todoContent,
    todoTitle,
    complete: false,
  };
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    console.log("Error"); //....
  }

  return context;
};
