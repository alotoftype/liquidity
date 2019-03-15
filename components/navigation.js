import Link from 'next/link';

 const Nav = () => (
  <nav>
    <ul>
    <li>
    <Link href="/about">
      <a>About </a>
    </Link>
    </li>
    <li>
      <Link href="/party">
      <a>Party</a>
      </Link>
    </li>
    <li>
      <Link href="/mixes">
      <a>Mixes</a>
      </Link>
    </li>
    <li>
    <Link href="/community">
      <a>Community </a>
    </Link>
    </li>
    </ul>
  </nav>
)
export default Nav
