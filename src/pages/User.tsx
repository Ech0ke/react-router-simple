import { useLoaderData, LoaderFunctionArgs } from "react-router";
import { getUser } from "../helpers/api/getUser";
import { UserType } from "../types/userType";
import { getPostsByUserId } from "../helpers/api/getPostsByUserId";
import { getTodosByUserId } from "../helpers/api/getTodosByUserId";
import { PostType } from "../types/postType";
import { TodoType } from "../types/todoType";
import { Link } from "react-router-dom";

async function loader(args: LoaderFunctionArgs) {
  const { signal } = args.request;
  const params = args.params as { userId: string };
  const [user, posts, todos] = await Promise.all([
    getUser(params.userId, { signal }),
    getPostsByUserId(params.userId, { signal }),
    getTodosByUserId(params.userId, { signal }),
  ]);
  return { user, posts, todos };
}

function User() {
  const { user, posts, todos } = useLoaderData() as {
    user: UserType;
    posts: PostType[];
    todos: TodoType[];
  };
  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b>{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://${user.website}`}
        >
          {user.website}
        </a>
      </div>
      <div>
        <b>Address:</b>
        {` ${user.address.street}, ${user.address.suite}, ${user.address.city}, 
        ${user.address.zipcode}`}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <div className="card-preview-text">{post.body}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={`/posts/${post.id}`} relative="path">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "strike-through" : undefined}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export const userRoute = {
  loader,
  element: <User />,
};
