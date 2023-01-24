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
    <div className="flex justify-around items-center">
      {/* //   <div className="">
    //     <img
    //       src="https://placeimg.com/80/80/people"
    //       alt="User profile image"
    //       className="h-12 cursor-pointer border-none hover:opacity-60 hover:bg-light-primary rounded-full"
    //     />
    //   </div> */}
      <div className="hidden dropdown dropdown-end md:flex">
        <button tabIndex={0}>
          <img
            src="https://placeimg.com/80/80/people"
            alt="User profile image"
            className="w-11 h-11 cursor-pointer border-none hover:opacity-60 hover:bg-light-primary rounded-full"
          />
        </button>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content bg-white mt-14 p-2 shadow rounded-box w-52"
        >
          <li className=" font-bold">
            <a
              className="justify-between"
              onClick={() => {
                router.push(`/${profile}`);
              }}
            >
              Profile
              <span className="badge bg-light-primary text-white border-none">
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
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          className="md:hidden ml-4 btn-square hover:bg-[#DEDDFB] rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
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
          className="menu menu-compact dropdown-content bg-white mt-3 p-2 shadow rounded-box w-52"
        >
          <li className="hover:bg-[#e4e3ff] font-bold">
            <a className="justify-between" href="/jobboard">
              Home
            </a>
          </li>
          <li className="hover:bg-[#e4e3ff] font-bold">
            <a className="justify-between" href="/about">
              About Us
            </a>
          </li>
          <hr />
          <li className="hover:bg-[#e4e3ff] font-bold">
            <a
              className="justify-between"
              onClick={() => {
                router.push(`/${profile}`);
              }}
            >
              Profile
              <span className="badge bg-light-primary text-white border-none">
                New
              </span>
            </a>
          </li>
          <li
            className="hover:bg-[#DEDDFB] font-bold"
            onClick={() => {
              router.push(`/${settings}`);
            }}
          >
            <a>Settings</a>
          </li>
          <li
            className="hover:bg-[#DEDDFB] font-bold"
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
