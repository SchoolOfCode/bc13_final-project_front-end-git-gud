import styles from "../../styles/Main.module.css";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import SignUser from "../Sign";
type ContainerProps = {
  title?: string;
  description?: string;
  // path is a link to the page you want to navigate to with Link
  link?: React.ReactNode;
};
export const ContentMain = ({ title, description, link }: ContainerProps) => {
  return (
    <div
      id="content-main"
      className="w-screen gap-10 p-6 flex flex-grow flex-col md:flex-row justify-around items-center xl:justify-evenly xl:gap-20"
    >
      {/* LEFT SECTION */}
      <div className=" mt-10 flex flex-col w-full md:mt-0 lg:w-[45%] text-center lg:items-center md:text-left max-w-[60rem] p-10 gap-12">
        {/* Hero tagline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800s">
          The secure platform for landlords and tenants to{" "}
          <span className="sm:hidden">communicate</span>
          <span
            className={`text-gray-800 ${styles.underlined} ${styles.underlineMask} hidden sm:inline-block z-100`}
          >
            communicate
          </span>
        </h1>
        {/* Hero paragraph text */}
        <p id="hero-text" className="mt-3 lg:pr-[8rem] text-grey-900">
          {description}
        </p>
      </div>
      {/* RIGHT/FORM SECTION */}
      <div className="my-24 max-w-2xl">
        <SignUser />
      </div>
    </div>
  );
};
export default ContentMain;
