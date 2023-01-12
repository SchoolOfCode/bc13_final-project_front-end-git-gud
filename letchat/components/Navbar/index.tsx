import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = (props: any) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div>
            <button className="btn">Login</button>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="lg:hidden btn btn-ghost">
            <RxHamburgerMenu />
          </label>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
