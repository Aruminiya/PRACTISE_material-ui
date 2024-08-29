import { createTheme } from '@mui/material/styles'; 

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    white: {
      main: '#f8fafc',
      light: '#e2e8f0',
      dark: '#334155',
      contrastText: '#64748b',
    },
  },
});

export default customTheme