import { Button } from '@mui/material';
import { styled } from '@mui/system';


// const MyThemeComponent = styled('div')(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius,
// }));

const Nav = styled("nav")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& ul": {
    display: "flex",
    "& li": {
      listStyle: "none"
    }
  }
}));

const navList = [
  {
    href: "/",
    title: "首頁"
  },
  {
    href: "about",
    title: "關於我們"
  }
];

export default function Navbar() {
  return (
    <Nav>
      <ul className="links">
        {navList.map((link)=><li key={link.href}>
          <Button color="white" href={link.href}>
            {link.title}
          </Button>
        </li>)}
      </ul>
    </Nav>
  )
};