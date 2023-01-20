import styles from "../../styles/Main.module.css";
type ContainerProps = {
  title?: string;
  description?: string;
  // path is a link to the page you want to navigate to with Link
  link?: React.ReactNode;
};
export const ContentMain = ({ title, description, link }: ContainerProps) => {
  return (
    <div className="hero h-[100vh] justify-center flex  align-center lg:w-[50%]">
      
        <div className=" hero-content flex items-center glass min-h-[70%] p-10 h-fit flex-col text-black justify-around text-center lg:text-left mb-16 ">
        <h1 className={`${styles.title} ${styles.underlined}`}><span className={`${styles.underlined}`}>Let</span><span className={`${styles.underlined} ${styles.underlineOverflow}`}>Chat</span></h1>
          <p className="text-justify text-[1.5rem]  ">
            {description}
          </p>
          <div className="mt-10 px-5 w-[15rem] lg:w-full">
            <button className="btn w-full  text-2xl tracking-wider rounded-full text-black hover:bg-light-secondary hover:opacity-70 active:bg-light-hot bg-light-secondary  lg:text-white lg:hover:bg-light-primary lg:hover:opacity-70 lg:active:bg-light-hot lg:bg-light-primary ">
              {link}
            </button>
          </div>
      
        </div>
      
    </div>
   
  );
};
export default ContentMain;
