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
    <div className="hidden lg:block max-h-[60vh] bg-white shadow-lg shadow-black rounded-lg  ">
      <div className=" bg-light-primary  rounded-lg shadow-md shadow-light-tertiary h-full p-4 w-full">
        <h4 className="md:text-[30px] text-white text-center bold uppercase font-bold ">
          News feed
        </h4>
      </div>
      <div className="flex flex-col justify-between text-center rounded-bl-2xl rounded-br-2xl  bold uppercase mt-12 p-4 items-center ">
        <ul>
          <li>Landlord: Uploaded EPC</li>
          <li>Tenant: Uploaded ID document</li>
        </ul>
      </div>
      <div>
        <div className="md:text-[16px] flex-col flex justify-between text-center rounded-bl-2xl rounded-br-2xl  bold uppercase mt-12 p-4 items-center ">
          <h2 className="md:text-[20px] text-center bold uppercase font-bold ">
            {firstname} {surname}
          </h2>
          <p className="text-[15px] flex justify-between mb-2 w-[60%] items-center ">
            Status: <span> Online</span>
          </p>
          <p className="text-[15px] ">Contact no: {phonenumber}</p>
          <p className="text-[15px] ">Email: {email}</p>
        </div>
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
