import burger from "./burger-bar.png"
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";



const HamburgerMenu = () => {
  return (
    <div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary text-3xl"><RxHamburgerMenu/></label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-full h-full bg-base-100 text-base-content flex flex-wrap flex-row items-center">
          {/* <!-- Sidebar content here --> */}
          <li className="h-16 inline-flex w-2/5"><a>Documents</a></li>
          <li className="h-16 inline-flex w-2/5"><a>Dashboard</a></li>
          <li className="h-16 inline-flex w-2/5"><a>Placeholder</a></li>
          <li className="h-16 inline-flex w-2/5"><a>Tools and Guides</a></li>
        </ul>
    </div>
  </div>
  )
};
export default HamburgerMenu;
