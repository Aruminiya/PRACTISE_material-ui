import Link from '@mui/material/Link';

export default function Navbar() {
  return (
    <nav id="nav">
      <ul className='links'>
        <li>
          <Link href="/">首頁</Link>
        </li>
        <li>
          <Link href="/about">關於我們</Link>
        </li>
      </ul>
    </nav>
  )
};