import { Card } from "../../utils";

type CardContainerProps = {
  firstname?: string;
  surname?: string;
  phonenumber?: string;
  email?: string;
};

const NewsFeed = ({ firstname, surname, phonenumber, email }: CardContainerProps) => {
  return (
    <div className="max-h-[75vh] bg-white shadow-lg shadow-black rounded-lg  ">
      <div className=" bg-light-primary  rounded-lg shadow-md shadow-light-tertiary h-full p-4 w-full">
        <h2 className="md:text-[30px] text-white text-center bold uppercase text-[50px] font-bold ">
          News feed
        </h2>
      </div>
      <div className="md:text-[20px] flex-col flex justify-between text-center rounded-bl-2xl rounded-br-2xl  bold uppercase mt-12 p-4 items-center ">
        <ul>
          <li>Deploy</li>
          <li>Disney Room</li>
        </ul>
      </div>

      <div className="min-h-[20rem] shadow-lg shadow-black rounded-lg  ">
      <div className=" bg-light-primary rounded-lg shadow-md shadow-light-tertiary h-full p-4 w-full">
        <h2 className="md:text-[30px] text-white text-center bold uppercase text-[50px] font-bold ">
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

    </div>

  );
};

export default NewsFeed;
