type CardProps = {
  children?: React.ReactNode;
  primary?: string;
  secondary?: string;
  title?: string;
};
export const Card = ({ children, primary, secondary, title }: CardProps) => {
  return (
    <div className={`card card-compact w-80 shadow-xl`}>
      <div className="card-body gap-0">
        <h2 className={`card-title p-2 text-light-light ${primary}`}>
          {title}
        </h2>

        <div
          className={`scroll-none card-side h-[20vh] max-h-[30vh] justify-end overflow-y-scroll p-2 ${secondary}`}
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

export const LoginContainer = ({ children }: LoginProps) => {
  return (
    <div>
      <div className="w-50">{children}</div>
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
    <div className="min-h-[20rem] rounded-lg shadow-lg shadow-black  ">
      <div className=" h-full w-full rounded-lg bg-light-secondary p-4 shadow-md shadow-light-tertiary">
        <h2 className="bold text-center text-[50px] font-bold uppercase md:text-[30px] ">
          {firstname} {surname}
        </h2>
      </div>
      <div className="bold mt-12 flex flex-col items-center justify-between rounded-bl-2xl  rounded-br-2xl p-4 text-center uppercase md:text-[20px] ">
        <p className="mb-2 flex w-[60%] items-center justify-between text-[20px] ">
          Status: <span> Online</span>
        </p>
        <p className="text-[20px] ">Contact no: {phonenumber}</p>
        <p className="text-[15px] ">Email: {email}</p>
      </div>
    </div>
  );
};
