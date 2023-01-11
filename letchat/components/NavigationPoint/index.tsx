import Link from "next/link";

const NavigationPoint = () => {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row md:flex-row w-[10%] h-[25%] gap-2 ] rounded-full">
      <Link href="/storage">
        <div className="  flex w-[25%] sm:w-[45%] md:w-[45%] h-[25%] bg-[#FAB8C4] p-10 rounded-tl-full font-bold text-black hover:scale-110 ease-in duration-300 justify-center"></div>
      </Link>
      <Link href="/jobboard">
        <div className=" flex w-[25%] sm:w-[45%] md:w-[45%] h-[25%] bg-[#F58071] p-10 rounded-tr-full font-bold text-black hover:scale-110 ease-in duration-300 justify-center"></div>
      </Link>
      <Link href="/">
        <div className="flex w-[25%] sm:w-[45%] md:w-[45%] md: h-[25%] bg-[#5956E9] p-10 rounded-bl-full font-bold text-black hover:scale-110 ease-in duration-300 justify-center "></div>
      </Link>
      <Link href="/tollsandguides">
        <div className=" flex w-[25%] sm:w-[45%] md:w-[45%] h-[25%] bg-[#F7B538] p-10 rounded-br-full font-bold text-black hover:scale-110 ease-in duration-300 justify-center"></div>
      </Link>
    </div>
  );
};
export default NavigationPoint;