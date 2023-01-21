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
    <div className="m-auto max-w-[1400px]">
      <div className="navbar h-16 w-[100%] z-50 flex flex-row items-center justify-between">
        <div>
          <a href="/jobboard">
            <Image
              src={logo}
              alt="LetChat logo"
              height={28}
              className=" inline-block border-none m-auto"
            />
          </a>

          <ul className="flex flex-row ml-16 mt-1">
            <NavLink path={"jobboard"} title={"Dashboard"} />
            {/* <NavLink path={"jobboard"} title={"Job Board"} /> */}
            <NavLink path={"about"} title={"About Us"} />
          </ul>
        </div>
        {/* {This button needs to render when no user is logged in} */}
        {user ? (
          // <div className="flex items-center absolute z-40">
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
          // </div>
          <>
            <NavLink path={"about"} title={"About Us"} />
            <div className="dropdown dropdown-end">
              <div>
                <Link href="/login">
                  <button className="btn border-none w-35 h-10 bg-light-secondary hover:opacity-60 hover:bg-light-secondary text-black mr-6">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}

        {/* <div className="dropdown dropdown-end">
          <ul
            tabIndex={0}
            className="g-2 flex flex-col menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-screen h-screen align-center justify-center"
          >
            <div className="flex flex-row min-h-max h-1/3 align-center">
              <li className="w-1/2 h-full inline text-center">
                <a className="align-center w-full h-full bg-light-secondary">
                  Documents
                </a>
              </li>
              <li className="w-1/2 inline text-center">
                <a className="w-full h-full bg-light-primary ">Dashboard</a>
              </li>
            </div>
            <div className="flex flex-row min-h-max justify-center h-1/3">
              <li className="w-1/2 inline text-center">
                <a className="w-full h-full bg-light-hot">Placeholder</a>
              </li>
              <li className="w-1/2 inline text-center">
                <a className="w-full h-full bg-light-tertiary">
                  Tools and Guides
                </a>
              </li>
            </div>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
