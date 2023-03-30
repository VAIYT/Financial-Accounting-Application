import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Users } from "../pages/Users";
import { Some } from "../pages/some";
import { Some2 } from "../pages/some2";
import { Some3 } from "../pages/some3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/some",
    element: <Some/>
  },
  {
    path: "/some2",
    element: <Some2/>
  },
  {
    path: "/some3",
    element: <Some3/>
  }
]);
