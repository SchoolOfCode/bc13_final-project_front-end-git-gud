import { useRouter } from "next/router";

type HamburgerMenuProps = {
  logout: () => void;
  profile: string;
  settings: string;
  path: string;
};

const HamburgerMenu = ({
  logout,
  path,
  profile,
  settings,
}: HamburgerMenuProps) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-around">
      <div className="dropdown-end dropdown hidden md:flex">
        <button id="menu" aria-label="menu" tabIndex={0}>
          <img
            src="https://placeimg.com/640/480/people"
            alt="User profile image"
            className="h-11 w-11 cursor-pointer rounded-full border-none hover:bg-light-primary hover:opacity-60"
          />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-14 w-52 bg-white p-2 shadow"
        >
          <li className=" font-bold">
            <a
              className="justify-between"
              onClick={() => {
                router.push(`/${profile}`);
              }}
            >
              Profile
              <span className="badge border-none bg-light-primary text-white">
                New
              </span>
            </a>
          </li>
          <li
            className=" font-bold"
            onClick={() => {
              router.push(`/${settings}`);
            }}
          >
            <a>Settings</a>
          </li>
          <li
            className=" font-bold"
            onClick={() => {
              logout(), router.push(`/${path}`);
            }}
          >
            <a>Logout</a>
          </li>
        </ul>
      </div>
      {/* Hamburger menu below */}
      <div className="dropdown-end dropdown">
        <button id="menu-button" aria-label="menu-button"
          tabIndex={0}
          className="btn-square rounded-lg hover:bg-[#DEDDFB] md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-white p-2 shadow"
        >
          <li className="font-bold hover:bg-[#e4e3ff]">
            <a className="justify-between" href="/jobboard">
              Home
            </a>
          </li>
          <li className="font-bold hover:bg-[#e4e3ff]">
            <a className="justify-between" href="/about">
              About Us
            </a>
          </li>
          <hr />
          <li className="font-bold hover:bg-[#e4e3ff]">
            <a
              className="justify-between"
              onClick={() => {
                router.push(`/${profile}`);
              }}
            >
              Profile
              <span className="badge border-none bg-light-primary text-white">
                New
              </span>
            </a>
          </li>
          <li
            className="font-bold hover:bg-[#DEDDFB]"
            onClick={() => {
              router.push(`/${settings}`);
            }}
          >
            <a>Settings</a>
          </li>
          <li
            className="font-bold hover:bg-[#DEDDFB]"
            onClick={() => {
              logout(), router.push(`/${path}`);
            }}
          >
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HamburgerMenu;
