import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

import { useAuth } from "../../context/AuthContext";
import HamburgerMenu from "../HamburgerMenu";

type NavLinkProps = {
  path: string;
  title: string;
};

const NavLink = ({ path, title }: NavLinkProps) => {
  return (
    <>
      <li className="flex justify-center items-center">
        <Link
          href={`/${path}`}
          className={`${styles.listLink} mr-5 hidden md:flex mt-4 text-md uppercase`}
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
    <div className="navbar w-[100vw] sticky z-50  p-6">
      <a>
        <Image
          src={"/assets/images/letchatLogov2.png"}
          alt="LetChat logo"
          height={80}
          width={80}
          className=" min-w-[4rem] min-h-[4rem] border-none hover:opacity-60 hover:bg-light-primary"
        />
      </a>
      <div className="flex-1 justify-end h-20">
        {/* {This button needs to render when no user is logged in} */}
        {user ? (
          <div className="flex justify-between items-center absolute z-40">
            <ul className="flex  mr-8">
              <NavLink path={"jobboard"} title={"Home"} />
              {/* <NavLink path={"jobboard"} title={"Job Board"} /> */}
              <NavLink path={"about"} title={"About Us"} />
            </ul>
            <HamburgerMenu
              profile={"profile"}
              settings={"settings"}
              path={"login"}
              logout={logout}
            />
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div>
              <Link href="/login">
                <button className="btn border-none w-35 h-10 bg-light-secondary hover:opacity-60 hover:bg-light-secondary text-black mr-6">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

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
  );
};

export default Navbar;
