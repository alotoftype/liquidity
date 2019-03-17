import Link from 'next/link';

 const Nav = () => (
  <nav>
    <ul>
    <li>
    <Link href="/about">
      <a>about </a>
    </Link>
    </li>
    <li>
      <Link href="/party">
      <a>party</a>
      </Link>
    </li>
    <li>
      <Link href="/mixes">
      <a>mixes</a>
      </Link>
    </li>
    <li>
    <Link href="/community">
      <a>community</a>
    </Link>
    </li>
    </ul>
  </nav>
)
export default Nav
