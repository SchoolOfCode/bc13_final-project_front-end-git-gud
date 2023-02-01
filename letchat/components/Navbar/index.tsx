import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/assets/images/logoRoofText.png";
import HamburgerMenu from "../HamburgerMenu";

type NavLinkProps = {
  path: string;
  title: string;
};

const NavLink = ({ path, title }: NavLinkProps) => {
  return (
    <>
      <li className="flex-end flex">
        <Link
          href={`/${path}`}
          className={`${styles.listLink} text-md mr-8 hidden md:flex `}
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
    <nav className="navbar flex h-16 flex-row items-center justify-between px-3 md:px-10">
      <>
        <div>
          {user && (
            <a href="/jobboard">
              <Image
                src={logo}
                alt="LetChat logo"
                height={28}
                className=" m-auto inline-block border-none"
              />
            </a>
          )}
          {!user && (
            <a href="/">
              <Image
                src={logo}
                alt="LetChat logo"
                height={28}
                className=" m-auto inline-block border-none"
              />
            </a>
          )}
          <ul className="ml-16 mt-1 flex flex-row">
            <NavLink path={"jobboard"} title={"Home"} />
            <NavLink path={"storage"} title={"File Storage"} />
            <NavLink path={"about"} title={"About Us"} />
            {/* <NavLink path={"features"} title={"Features"} /> */}
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
          <div className="dropdown-end dropdown w-20">
            <div>
              <Link href="/login" className="w-4">
                <button className="btn h-10 border-none bg-light-hot text-black hover:bg-light-hot hover:opacity-60">
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
