import Link from 'next/link';

const Nav = () => (
    <nav className="navigation">
        <div className="nav-item">
            <Link href="/about">
                <a>about </a>
            </Link>
        </div>
        <div className="nav-item">
            <Link href="/party">
                <a>party</a>
            </Link>
        </div>
        <div className="nav-item">
            <Link href="/mixes">
                <a>mixes</a>
            </Link>
        </div>
        <div className="nav-item">
            <Link href="/community">
                <a>community</a>
            </Link>
        </div>
    </nav>
);
export default Nav;
