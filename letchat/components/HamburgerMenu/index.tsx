
import { useRouter } from "next/router";

type HamburgerMenuProps = {
  logout: () => void;
  path: string;
};

const HamburgerMenu = ({ logout, path }: HamburgerMenuProps) => {
  const router = useRouter();
  return (
    <>
     <div className="avatar mr-5 ">
          <div className="w-14 rounded-full cursor-pointer">
            <img
              src="https://placeimg.com/80/80/people"
              alt="Picture Profile"
              height={100}
              width={100}
              className=" bg-light-primary w-20 h-20 border-none hover:opacity-60 hover:bg-light-primary rounded-full"
            />
          </div>
        </div>
      <div className="dropdown dropdown-end mr-6 flex items-center justify-between ">
       

        <button tabIndex={0} className="btn btn-square btn-ghost bg-light-secondary opacity-60 hover:bg-light-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
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
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-light-hot rounded-box w-52"
        >
          <li className="hover:bg-light-tertiary font-bold">
            <a className="justify-between">
              Profile
              <span className="badge bg-light-primary text-light-hot">New</span>
            </a>
          </li>
          <li className="hover:bg-light-tertiary font-bold">
            <a>Settings</a>
          </li>
          <li
            className="hover:bg-light-tertiary font-bold"
            onClick={() => {
              logout(), router.push(`/${path}`);
            }}
          >
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default HamburgerMenu;


