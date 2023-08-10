import { useLoaderData, Link } from "react-router-dom";
import { TodoType } from "../types/todoType";

function Todos() {
  const todos = useLoaderData() as TodoType[];
  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={`${todo.completed && "strike-through"}`}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
