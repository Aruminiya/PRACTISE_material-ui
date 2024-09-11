import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import About from "../pages/About.jsx";
import MuiTest from "../pages/MuiTest/index.jsx";
import MuiButton from "../pages/MuiTest/MuiButton.jsx";
import MuimuiAutocomplete from "../pages/MuiTest/MuimuiAutocomplete.jsx";
import MuiCheckbox from "../pages/MuiTest/MuiCheckbox.jsx";
import MuiSelect from "../pages/MuiTest/MuiSelect.jsx";
import MuiSwitch from "../pages/MuiTest/MuiSwitch.jsx";
import MuiTextField from "../pages/MuiTest/MuiTextField.jsx";
import MuiIcons from "../pages/MuiTest/MuiIcons.jsx";
import MuiTable from "../pages/MuiTest/MuiTable.jsx";
import MuiX_DataGrid from "../pages/MuiX_DataGrid/index.jsx";
import MuiX_DataGrid_Demo from "../pages/MuiX_DataGrid/MuiX_DataGrid_Demo.jsx";
import MuiModal from "../pages/MuiTest/MuiModal.jsx";
import MuiDatePickers from "../pages/MuiTest/MuiDatePickers.jsx";
import ReactHookForm from "../pages/ReactHookForm.jsx";
import SwrTest from "../pages/SwrTest.jsx";

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
      },
      { 
        path: '/muiTest/muiDatePickers',
        element: <MuiDatePickers />,
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
  },
  {
    path: '/reactHookForm',
    element: <ReactHookForm />,
  },
  {
    path:'/swrTest',
    element: <SwrTest />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
