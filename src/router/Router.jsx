import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import About from "../pages/About.jsx";
import MuiTest from "../pages/MuiTest.jsx";
import MuiButton from "../components/MuiButton.jsx";
import MuimuiAutocomplete from "../components/MuimuiAutocomplete.jsx";
import MuiCheckbox from "../components/MuiCheckbox.jsx";
import MuiSelect from "../components/MuiSelect.jsx";
import MuiSwitch from "../components/MuiSwitch.jsx";
import MuiTextField from "../components/MuiTextField.jsx";
import MuiIcons from "../components/MuiIcons.jsx";
import MuiTable from "../components/MuiTable.jsx";
import MuiX_DataGrid from "../pages/MuiX_DataGrid.jsx";
import MuiX_DataGrid_Demo from "../components/MuiX_DataGrid_Demo.jsx";
import MuiModal from "../components/MuiModal.jsx";



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
      { 
        path: '/muiTest/muiCheckbox',
        element: <MuiCheckbox />,
      },
      { 
        path: '/muiTest/muiSelect',
        element: <MuiSelect />,
      },
      { 
        path: '/muiTest/muiSwitch',
        element: <MuiSwitch />,
      },
      { 
        path: '/muiTest/muiTextField',
        element: <MuiTextField />,
      },
      { 
        path: '/muiTest/muiIcons',
        element: <MuiIcons />,
      },
      { 
        path: '/muiTest/muiTable',
        element: <MuiTable />,
      },
      { 
        path: '/muiTest/muiModal',
        element: <MuiModal />,
      }
    ]
  },
  {
    path: '/muiX-dataGrid',
    element: <MuiX_DataGrid />,
    children: [
      { 
        path: '/muiX-dataGrid/muiX-dataGrid-demo',
        element: <MuiX_DataGrid_Demo />,
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
