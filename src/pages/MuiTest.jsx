import { Outlet } from "react-router-dom";

import { Grid2, Button, Link } from '@mui/material';

const links = [
  {
    href: "muiAutocomplete",
    title: "Autocomplete"
  },
  {
    href: "muiButton",
    title: "Button"
  },
];

export default function MuiTest() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={3}>
        {links.map(link => <Button fullWidth key={link.href} margin="0 12px">
          <Link href={`/muiTest/${link.href}`} underline="none">{link.title}</Link>
        </Button>)}
      </Grid2>
      <Grid2 size={9}>
        <Outlet /> {/* 這裡會渲染子路由的內容 */}
      </Grid2>
    </Grid2>
  );
};