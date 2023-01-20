import { Card } from "../../utils";

type CardContainerProps = {
  title?: string;
};

const NewsFeed = ({ title }: CardContainerProps) => {
  return (
    <div className="invisible lg:visible min-h-[20rem]  bg-light-primary shadow-lg shadow-black bg-opacity-50 rounded-lg  ">
      <div className=" bg-light-secondary rounded-lg  bg-opacity-60 shadow-md shadow-light-tertiary h-full p-4 w-full">
        <h2 className="md:text-[30px] text-center bold uppercase text-[50px] font-bold ">
          {title}
        </h2>
      </div>
      <div className="md:text-[20px] flex-col flex justify-between text-center rounded-bl-2xl rounded-br-2xl  bold uppercase mt-12 p-4 items-center ">
        <ul>
          <li>Deploy</li>
          <li>Disney Room</li>
        </ul>
      </div>
    </div>
  );
};

export default NewsFeed;
