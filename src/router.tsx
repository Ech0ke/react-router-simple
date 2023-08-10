import { createBrowserRouter, Navigate } from "react-router-dom";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import axios from "axios";
import { GET_POSTS, GET_TODOS, GET_USERS } from "../api/urls/apiUrls";
import { PostType } from "./types/postType";
import { TodoType } from "./types/todoType";
import { UserType } from "./types/userType";
import Post from "./pages/Post";
import { RootLayout } from "./layouts/rootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Navigate to="/posts" /> },
      {
        path: "/posts",
        children: [
          {
            index: true,
            loader: async ({ request: { signal } }): Promise<PostType[]> => {
              const res = await axios.get(GET_POSTS, { signal });
              return res.data;
            },
            element: <Posts />,
          },
          { path: ":postId", element: <Post /> },
        ],
      },
      {
        path: "/users",
        loader: async ({ request: { signal } }): Promise<UserType[]> => {
          const res = await axios.get(GET_USERS, { signal });
          return res.data;
        },
        element: <Users />,
      },
      {
        path: "/todos",
        loader: async ({ request: { signal } }): Promise<TodoType[]> => {
          const res = await axios.get(GET_TODOS, { signal });
          return res.data;
        },
        element: <Todos />,
      },
    ],
  },
]);
