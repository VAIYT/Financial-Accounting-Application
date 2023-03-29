import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Users } from "../pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);
