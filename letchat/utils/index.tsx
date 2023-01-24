type CardProps = {
  children?: React.ReactNode;
  primary?: string;
  secondary?: string;
  title?: string;
};
export const Card = ({ children, primary, secondary, title }: CardProps) => {
  return (
    <div className={`card card-compact w-80   shadow-xl`}>
      <div className="card-body gap-0">
        <h2 className={`card-title text-light-light p-2 ${primary}`}>
          {title}
        </h2>

        <div
          className={`card-side h-[20vh] max-h-[30vh] p-2 justify-end overflow-y-scroll scroll-none ${secondary}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

type LoginProps = {
  title?: string;
  children?: React.ReactNode;
};
import styles from "../styles/Main.module.css";
export const LoginContainer = ({ title, children }: LoginProps) => {
  return (
    <div>
      <div className="w-50">{children}</div>
    </div>
  );
  // <div className="hero h-[100vh] align-center lg:w-[50%]">
  //   <div className="hero-content h-full lg:h-[65%] lg:mb-[25%] w-full ">
  //     <div className="flex h-full border-slate-800 border-4  flex-col justify-around  w-[98%] drop-shadow-lg rounded-t-[20%] lg:drop-shadow-none lg:w-full lg:border-none bg-light-light lg:bg-transparent">
  //       <div className="flex items-center justify-center mt-4 lg:hidden">
  //         <div className="w-5 h-5 rounded-full bg-slate-600 flex justify-center items-center">
  //           <div className="w-1 h-1 rounded-full bg-slate-300 "></div>
  //         </div>
  //         <div className="w-32 h-5 rounded-full bg-slate-600 ml-3 flex justify-center items-center">
  //           <div className="w-28 h-1 rounded-full bg-slate-300"></div>
  //         </div>
  //       </div>
  {
    /* <div className="flex w-full justify-center">
            <h1 className={`${styles.title} ${styles.underlined}`}>
              <span className={`${styles.underlined}`}>Let</span>
              <span className={`${styles.underlined} ${styles.underlineMask}`}>
                Chat
              </span>
            </h1>
          </div> */
  }

  //       <div className="mx-auto p-6 flex justify-start flex-1 flex-col w-[95%] h-full lg:glass lg:w-[80%]  drop-shadow-2xl">
  //         <div className="flex flex-col h-full justify-center">
  //           <div>
  //             <h2 className="text-center mb-12 text-4xl font-bold tracking-tight text-gray-900">
  //               {title}
  //             </h2>
  //           </div>

  //           <div>
  // <div className="mt-6">{children}</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // );
};

type CardContainerProps = {
  firstname?: string;
  surname?: string;
  phonenumber?: string;
  email?: string;
};

export const CardContainer = ({
  firstname,
  surname,
  phonenumber,
  email,
}: CardContainerProps) => {
  return (
    <div className="invisible lg:visible min-h-[20rem]  bg-light-primary shadow-lg shadow-black bg-opacity-50 rounded-lg  ">
      <div className=" bg-light-secondary rounded-lg  bg-opacity-60 shadow-md shadow-light-tertiary h-full p-4 w-full">
        <h2 className="md:text-[30px] text-center bold uppercase text-[50px] font-bold ">
          {firstname} {surname}
        </h2>
      </div>
      <div className="md:text-[20px] flex-col flex justify-between text-center rounded-bl-2xl rounded-br-2xl  bold uppercase mt-12 p-4 items-center ">
        <p className="text-[20px] flex justify-between mb-2 w-[60%] items-center ">
          Status: <span> Online</span>
        </p>
        <p className="text-[20px] ">Contact no: {phonenumber}</p>
        <p className="text-[15px] ">Email: {email}</p>
      </div>
    </div>
  );
};
