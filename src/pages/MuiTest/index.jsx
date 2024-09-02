import { Outlet } from "react-router-dom";

import { Grid2, Button, Link, Box, Stack} from '@mui/material';

const links = [
  {
    href: "muiAutocomplete",
    title: "Autocomplete"
  },
  {
    href: "muiButton",
    title: "Button"
  },
  {
    href: "muiCheckbox",
    title: "Checkbox"
  },
  {
    href: "muiSelect",
    title: "Select"
  },
  {
    href: "muiSwitch",
    title: "Switch"
  },
  {
    href: "muiTextField",
    title: "TextField"
  },
  {
    href: "muiIcons",
    title: "Icons"
  },
  {
    href: "muiTable",
    title: "Table"
  },
  {
    href: "muiModal",
    title: "Modal"
  }
];

export default function MuiTest() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={3}>
        <Stack margin="24px 0" spacing={1}>
          {links.map(link => 
            <Button key={link.href} fullWidth>
              <Link width="100%" href={`/muiTest/${link.href}`} underline="none">{link.title}</Link>
            </Button>
          )}
        </Stack>
      </Grid2>
      <Grid2 size={9}>
        <Box margin="24px 0">
          <Outlet /> {/* 這裡會渲染子路由的內容 */}
        </Box>
      </Grid2>
    </Grid2>
  );
};