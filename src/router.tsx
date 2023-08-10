import { createBrowserRouter } from "react-router-dom";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Todos from "./pages/Todos";

export const router = createBrowserRouter([
  { path: "/", element: <Posts /> },
  { path: "/users", element: <Users /> },
  { path: "/todos", element: <Todos /> },
]);
