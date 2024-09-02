import { Outlet } from "react-router-dom";

import { Grid2, Button, Link, Box, Stack} from '@mui/material';

const links = [
  {
    href: "muiX-dataGrid-demo",
    title: "Demo"
  }
];

export default function MuiX_DataGrid() {
  return (
    <>
      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <Stack margin="24px 0" spacing={1}>
            {links.map(link => 
              <Button key={link.href} fullWidth>
                <Link width="100%" href={`/muiX-dataGrid/${link.href}`} underline="none">{link.title}</Link>
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
    </>
  );
};