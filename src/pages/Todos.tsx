import { useLoaderData } from "react-router-dom";
import { TodoType } from "../types/todoType";
import { getTodos } from "../helpers/api/getTodos";

async function loader({
  request: { signal },
}: {
  request: { signal: AbortSignal };
}) {
  return getTodos({ signal });
}

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

export const todosRoute = {
  loader,
  element: <Todos />,
};
