const Navbar = (props: any) => {
  return (
    <div className="navbar min-h-[8rem] p-6 ">
      <div className="flex-1 pl-8">
        <a className="btn bg-light-primary w-20 h-20 border-none hover:opacity-60 hover:bg-light-primary rounded-full"></a>
      </div>
      <div className="flex-1 justify-end h-20">
        <div className="dropdown dropdown-end">
          <div>
            <button className="btn border-none w-35 h-10 bg-light-secondary hover:opacity-60 hover:bg-light-secondary text-black mr-6">
              Login
            </button>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full">
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
      </div>
    </div>
  );
};

export default Navbar;
