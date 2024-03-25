import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postLoader } from "./router/Posts.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from "./router/NewPost.jsx";
import RootLayout from "./router/RootLayout.jsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./router/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader, // imported the loader
        children: [
          // same overlay effect
          { path: "create-post", element: <NewPost />, action: newPostAction },
          {
            path: ":postId", // dynamic routes
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
