import styles from "../../styles/Main.module.css";
import SignUser from "../Sign";

type ContainerProps = {
  title?: string;
  description?: string;
  link?: React.ReactNode;
};
export const ContentMain = ({ description }: ContainerProps) => {
  return (
    <div
      id="content-main"
      className="flex w-screen flex-grow flex-col items-center justify-around gap-10 p-6 md:flex-row xl:justify-evenly xl:gap-20"
    >
      {/* LEFT SECTION */}
      <div className=" mt-10 flex w-full max-w-[60rem] flex-col gap-12 p-10 text-center md:mt-0 md:text-left lg:w-[45%] lg:items-center">
        {/* Hero tagline */}
        <h1 className="text-gray-800s text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          The secure platform for landlords and tenants to{" "}
          <span className="sm:hidden">communicate</span>
          <span
            className={`text-gray-800 ${styles.underlined} ${styles.underlineMask} z-100 hidden sm:inline-block`}
          >
            communicate
          </span>
        </h1>
        {/* Hero paragraph text */}
        <p id="hero-text" className="text-grey-900 mt-3 lg:pr-[8rem]">
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
