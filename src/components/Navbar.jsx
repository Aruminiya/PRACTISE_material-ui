import Link from '@mui/material/Link';
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav id="nav" className={styles.nav}>
      <div className='links'>
        <Link href="/">首頁</Link>
        <Link href="/about">關於我們</Link>
      </div>
    </nav>
  )
};