import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import DisplayError from "../pages/shared/DisplayError";
import Navbar from "../layout/navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <h1>Bangladesh is my motherland</h1>
      },
    ],
  },
]);

export default router;
