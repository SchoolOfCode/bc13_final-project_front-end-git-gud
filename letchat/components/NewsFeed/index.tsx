import { Card } from "../../utils";

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
    <div className="hidden md:max-w-[200px] lg:block h-[80vh] bg-white shadow-lg shadow-slate-300 rounded-lg mt-[5rem]">
      <div className="  rounded-lg shadow-sm shadow-light-tertiary h-[50%]">
        <h4 className="md:text-[15px] p-4 bg-light-primary text-white text-center bold uppercase font-bold rounded-lg">
          News feed
        </h4>
        <div className="flex flex-col text-center md:text-[15px] p-4 ">
          <ul>
            <li>Landlord: Uploaded EPC</li>
            <li>Tenant: Uploaded ID document</li>
          </ul>
        </div>
      </div>
        <div className="md:text-[16px] flex-col flex text-center rounded-lg">
          <h2 className="md:text-[15px] p-4 text-center bold uppercase font-bold bg-light-secondary">
            {firstname} {surname}
          </h2>
          <p className="text-[15px] mt-4">
            Status: <span> Online</span>
          </p>
          <p className="text-[15px] ">Contact no: {phonenumber}</p>
          <p className="text-[15px] ">Email: {email}</p>
        </div>

      {/* <div className="shadow-lg shadow-black rounded-lg  ">
        <div className=" bg-light-primary rounded-lg shadow-md shadow-light-tertiary h-full p-4 w-full">
            {firstname} {surname}
          </h2>
        </div>
        <div className="md:text-[20px] flex-col flex justify-between text-center rounded-bl-2xl rounded-br-2xl  bold uppercase mt-12 p-4 items-center ">
        </div>
      </div> */}
    </div>
  );
};

export default NewsFeed;
