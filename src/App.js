import React from "react";
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      children: [
        {
          path: "",
          element: "Home Page"
        },
        {
          path: "/browse",
          element: <Browse />
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    },
    
  ])
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
