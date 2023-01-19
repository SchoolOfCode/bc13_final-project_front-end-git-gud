import { type } from "os";

export const SocialGrid = () => {
  return (
    <div className="mt-1 grid grid-cols-3 gap-3">
      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Facebook</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Twitter</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>
      <div>
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with GitHub</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

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

type ContainerProps = {
  title?: string;
  description?: string;
  // path is a link to the page you want to navigate to with Link
  link?: React.ReactNode;
};
export const HomeContainer = ({ title, description, link }: ContainerProps) => {
  return (
    <div className="hero h-[100vh] justify-center flex  align-center lg:w-[50%]">
      <div className="hero-content h-full w-full ">
        <div className="flex items-center glass p-10 h-fit flex-col text-black justify-around text-center lg:text-left ">
          <h1 className="text-[5rem] font-bold lg:text-[8rem]">{title}</h1>
          <p className="text-justify text-[1rem] lg:text-[1.5rem] ">
            {description}
          </p>
          <div className="mt-10 px-5 w-[15rem] lg:w-full">
            <button className="btn w-full  text-2xl tracking-wider rounded-full text-black hover:bg-light-secondary hover:opacity-70 active:bg-light-hot bg-light-secondary  lg:text-white lg:hover:bg-light-primary lg:hover:opacity-70 lg:active:bg-light-hot lg:bg-light-primary ">
              {link}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type LoginProps = {
  title?: string;
  children?: React.ReactNode;
};

export const LoginContainer = ({ title, children }: LoginProps) => {
  return (
    <div className="hero h-[100vh] align-center lg:w-[50%]">
      <div className="hero-content h-full lg:h-[65%] lg:mb-[25%] w-full ">
        <div className="flex h-full border-slate-800 border-4  flex-col justify-around  w-[98%] drop-shadow-lg rounded-t-[20%] lg:drop-shadow-none lg:w-full lg:border-none bg-light-light lg:bg-transparent">
          <div className="flex items-center justify-center mt-4 lg:hidden">
            <div className="w-5 h-5 rounded-full bg-slate-600 flex justify-center items-center">
              <div className="w-1 h-1 rounded-full bg-slate-300 "></div>
            </div>
            <div className="w-32 h-5 rounded-full bg-slate-600 ml-3 flex justify-center items-center">
              <div className="w-28 h-1 rounded-full bg-slate-300"></div>
            </div>
          </div>

          <div className="mx-auto p-6 flex justify-start flex-1 flex-col w-[95%] h-full lg:glass lg:w-[80%]  drop-shadow-2xl">
            <div className="flex flex-col h-full justify-center">
              <div>
                <h2 className="text-center mt-0 text-3xl font-bold tracking-tight text-gray-900">
                  {title}
                </h2>
              </div>

              <div>
                <div className="mt-6">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
    <div className="invisible lg:visible flex-row ml-10  max-w-[25%]   ">
      <div className=" bg-light-primary rounded-tl-2xl rounded-tr-2xl bg-opacity-90 shadow-lg shadow-black px-10">
        <h2 className="md:text-[30px] text-center bold uppercase text-[50px]">
          <p>
            {firstname} {surname}
          </p>
        </h2>
      </div>
      <div className="md:text-[20px] flex-col bg-light-primary text-center rounded-bl-2xl rounded-br-2xl bg-opacity-50 bold uppercase px-10">
        <p className="text-[20px] py-4">Status: Online</p>
        <p className="text-[20px] py-2">Contact no: {phonenumber}</p>
        <p className="text-[15px] py-4">Email: {email}</p>
      </div>
    </div>
  );
};
