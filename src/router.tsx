import { createBrowserRouter, Navigate } from "react-router-dom";
import { postsRoute } from "./pages/Posts";
import { usersRoute } from "./pages/Users";
import Todos, { todosRoute } from "./pages/Todos";
import axios from "axios";
import { GET_TODOS, GET_USERS } from "../api/urls/apiUrls";
import { PostType } from "./types/postType";
import { TodoType } from "./types/todoType";
import { UserType } from "./types/userType";
import Post from "./pages/Post";
import { RootLayout } from "./layouts/rootLayout";
import User from "./pages/User";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          {
            index: true,
            ...postsRoute,
          },
          { path: ":postId", element: <Post /> },
        ],
      },
      {
        path: "users",
        children: [
          { index: true, ...usersRoute },
          { path: ":userId", element: <User /> },
        ],
      },
      {
        path: "todos",
        ...todosRoute,
      },
    ],
  },
]);
