import "./App.css";
import Todo from "../components/Todo";
import { TodoProvider } from "../components/TodoContext";
import TodoForm from "../components/TodoForm";

function App() {
  return (
    <div className="app">
      <TodoProvider>
        <TodoForm />
        <Todo />
      </TodoProvider>
    </div>
  );
}

export default App;
