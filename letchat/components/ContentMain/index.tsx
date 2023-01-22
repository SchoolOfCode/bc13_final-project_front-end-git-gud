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
    <div className="gap-10 p-6 section-container flex flex-col md:flex-row justify-between items-center">
      {/* LEFT SECTION */}
      <div className="gap-8 flex flex-col w-full md:mt-0 lg:w-[60%] text-center lg:items-center md:text-left">
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
        <p id="hero-text" className="mt-3 text-gray-700">
          {/* {description} */}
          LetChat is a secure platform for landlords and tenants to communicate
          with each other. It is a platform that allows landlords to post
          adverts for their properties and tenants to apply for them. It also
        </p>
      </div>
      {/* RIGHT/FORM SECTION */}
      <div className="max-w-2xl">
        <SignUser />
      </div>
    </div>
  );
};
export default ContentMain;
