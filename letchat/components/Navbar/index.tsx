import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/assets/images/logoRoofText.png";

import { useAuth } from "../../context/AuthContext";
import HamburgerMenu from "../HamburgerMenu";

type NavLinkProps = {
  path: string;
  title: string;
};

const NavLink = ({ path, title }: NavLinkProps) => {
  return (
    <>
      <li className="flex flex-end">
        <Link
          href={`/${path}`}
          className={`${styles.listLink} md:flex mr-8 hidden text-md `}
        >
          {title}
        </Link>
      </li>
    </>
  );
};

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar px-3 md:px-10 h-16 flex flex-row items-center justify-between">
      <>
        <div>
          {user && (
            <a href="/jobboard">
              <Image
                src={logo}
                alt="LetChat logo"
                height={28}
                className=" inline-block border-none m-auto"
              />
            </a>
          )}
          {!user && (
            <a href="/">
              <Image
                src={logo}
                alt="LetChat logo"
                height={28}
                className=" inline-block border-none m-auto"
              />
            </a>
          )}
          <ul className="flex flex-row ml-16 mt-1">
            <NavLink path={"jobboard"} title={"Home"} />
            <NavLink path={"about"} title={"About Us"} />
            <NavLink path={"features"} title={"Features"} />
          </ul>
        </div>
      </>
      {/* {This button needs to render when no user is logged in} */}
      {user ? (
        <>
          <div>
            <HamburgerMenu
              profile={"profile"}
              settings={"settings"}
              path={"login"}
              logout={logout}
            />
          </div>
        </>
      ) : (
        <>
          <div className="dropdown dropdown-end w-20">
            <div>
              <Link href="/login" className="w-4">
                <button className="btn border-none  h-10 bg-light-hot hover:opacity-60 hover:bg-light-hot text-black">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
