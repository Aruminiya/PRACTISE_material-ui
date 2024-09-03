import { PropTypes } from 'prop-types';

import { useState } from 'react';
import { AppBar, Box, Toolbar, Link, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  {
    href: "/",
    title: "首頁"
  },
  {
    href: "/about",
    title: "關於我們"
  },
  {
    href: "/muiTest",
    title: "MUI 元件測試"
  },
  {
    href: "/muiX-dataGrid",
    title: "MuiX DataGrid"
  },
  {
    href: '/reactHookForm',
    title: 'ReactHookForm',
  },
  {
    href: '/swrTest',
    title: 'SWR Test'
  }
];

export default function ButtonAppBar({sidebarSwitch}) {
  // eslint-disable-next-line no-unused-vars
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  function handleIconButtonClick (toSwitch) {
    setSidebarIsOpen((prev) => {
      const newState = !prev;
      toSwitch(newState);
      return newState;
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>{handleIconButtonClick(sidebarSwitch)}}
          >
            <MenuIcon />
          </IconButton>
          {links.map(link => <Box key={link.href} margin="0 12px">
            <Link color="white" href={link.href} underline="none">{link.title}</Link>
          </Box>)}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

ButtonAppBar.propTypes = {
  sidebarSwitch: PropTypes.func,
};
