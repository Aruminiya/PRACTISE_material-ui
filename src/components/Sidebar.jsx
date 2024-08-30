import { PropTypes } from 'prop-types';

import { Stack, Button, Link } from '@mui/material';
import { styled } from '@mui/system';


const SidebarElement = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '150px',
  height: '100%',
  background: theme.palette.white.main, // 假设你已经解决了这个问题
  zIndex: 10,
  transition: 'transform 0.3s ease', // 添加过渡效果
  transform: 'translateX(0%)', // 初始状态
}));

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
  }
];

export default function Sidebar({isOpen}) {
  
  return (
    <SidebarElement style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <Stack spacing={0}>
        {links.map(link => <Button key={link.href} margin="0 12px">
            <Link href={link.href} underline="none">{link.title}</Link>
          </Button>)}
        </Stack>
    </SidebarElement>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};