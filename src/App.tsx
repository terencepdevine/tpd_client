import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./js/components/Root";
import Home from "./js/components/pages/Home/Home";
import About from "./js/components/pages/About/About";
import Post from "./js/components/pages/Post/Post";
import Posts from "./js/components/pages/Posts/Posts";
import Project from "./js/components/pages/Project/Project";
import Projects from "./js/components/pages/Projects/Projects";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:slug",
        element: <Project />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:slug",
        element: <Post />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
