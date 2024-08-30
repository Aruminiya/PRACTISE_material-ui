import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import About from "../pages/About.jsx";
import MuiTest from "../pages/MuiTest.jsx";
import MuiButton from "../components/MuiButton.jsx";
import MuimuiAutocomplete from "../components/MuimuiAutocomplete.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/muiTest',
    element: <MuiTest />,
    children: [
      {
        path: '/muiTest/muiAutocomplete',
        element: <MuimuiAutocomplete />
      },
      { 
        path: '/muiTest/muiButton',
        element: <MuiButton />,
      },
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
