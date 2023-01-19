import Image from "next/image";
import Link from "next/link";

import { useAuth } from "../../context/AuthContext";
import HamburgerMenu from "../HamburgerMenu";

const Navbar = () => {
  const { user, logout, login } = useAuth();
  
  

  return (
    <div className="navbar w-[100vw] relative min-h-[8rem] p-6 justify-center  ">
      <div className=" navbar px-5 max-w-[2500px] absolute z-50  ">
        <div className="flex-1 pl-8">
          <a>
            <Image
              src="/assets/images/letchatLogo.png"
              alt="LetChat logo"
              height={80}
              width={80}
              className=" bg-light-primary w-20 h-20 border-none hover:opacity-60 hover:bg-light-primary rounded-full"
            />
          </a>
        </div>
        <div className="flex-1 justify-end h-20">
          {/* {This button needs to render when no user is logged in} */}
          {user ? (
           
              <HamburgerMenu logout={logout} path={'login'} />

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
    </div>
  );
};

export default Navbar;
