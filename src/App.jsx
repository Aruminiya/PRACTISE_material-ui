import { useState } from 'react';

import { Container } from '@mui/material';
import { styled } from '@mui/system';

import Router from './router/Router.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';

const MainScreen = styled('div')(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "& main": {
    position: 'relative',
    flex: 1,
  }
}));

export default  function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainScreen>
      <nav>
        <Navbar sidebarSwitch={(e)=>{setIsOpen(e)}}/> 
      </nav>
      <main>
        <Sidebar isOpen={isOpen}/>
        <Container maxWidth="lg">
          <Router />
        </Container>
      </main>
    </MainScreen>
  )
};

