//定義初起狀態,與判斷localStorate是否有值
export const initState = {
  todos:
    localStorage.getItem("todos") == null
      ? []
      : JSON.parse(localStorage.getItem("todos")),
};
//定義ACTIONS變數
export const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  EDIT_TODO: "EDIE_TODO",
};
//宣告Reducer及action的型態 
const TodoReducer = (state, action) => {
  const { type, payload } = action;
  console.log("type", type);
  console.log("payload", payload);

  switch (type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    case ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: payload.todo,
      };
    case ACTIONS.EDIT_TODO:
      return {
        ...state,
        todos: payload.todo,
      };

    default:
      return state;
  }
};

export default TodoReducer;
