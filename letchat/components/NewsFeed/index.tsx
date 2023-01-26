type CardContainerProps = {
  firstname?: string;
  surname?: string;
  phonenumber?: string;
  email?: string;
};

const NewsFeed = ({
  firstname,
  surname,
  phonenumber,
  email,
}: CardContainerProps) => {
  return (
    <div className="glass mt-[5rem] hidden h-[80vh] rounded-lg shadow-lg shadow-slate-300 md:max-w-[200px] lg:block">
      <div className="h-[50%] rounded-lg shadow-sm shadow-light-tertiary">
        <h4 className="bold rounded-lg bg-light-primary bg-opacity-80 p-4 text-center font-bold uppercase text-white md:text-[15px]">
          News feed
        </h4>
        <div className="flex flex-col p-4 text-center md:text-[15px]">
          <ul>
            <li>Landlord: Uploaded EPC</li>
            <li>Tenant: Uploaded ID document</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col rounded-lg text-center md:text-[16px]">
        <h2 className="bold rounded-b-lg bg-light-secondary p-4 text-center font-bold uppercase md:text-[15px]">
          {firstname} {surname}
        </h2>
        <p className="mt-4 text-[15px]">
          Status: <span> Online</span>
        </p>
        <p className="text-[15px] ">Contact no: {phonenumber}</p>
        <p className="text-[15px] ">Email: {email}</p>
      </div>
    </div>
  );
};

export default NewsFeed;
