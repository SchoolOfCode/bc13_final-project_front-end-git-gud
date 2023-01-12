import Link from "next/link";

const NavigationPoint = () => {
  return (
    <div className="grid md:grid-cols-2 max-w-[1240px] px-2 py-2 gap-2 rounded-full bg-primary">
      <Link href="/storage">
        <div
          className="flex bg-[#FAB8C4] p-10 rounded-tl-full font-bold hover:scale-110 justify-center items-center shadow-lg shadow-black  select-none
    active:translate-y-1 active:scale-95 transform transition-all ease-in-out duration-300  ]"
        >
          <div className="absolute animated-ping">A</div>
        </div>
      </Link>
      <Link href="/jobboard">
        <div
          className="flex bg-[#F58071] p-10  rounded-tr-full font-bold text-black hover:scale-110  justify-center items-center shadow-lg shadow-black  select-none
    active:translate-y-1 active:scale-95 transform transition-all ease-in-out duration-300"
        >
          <p className="absolute animated-ping">B</p>
        </div>
      </Link>
      <Link href="/">
        <div
          className=" flex bg-[#5956E9] p-10 rounded-bl-full font-bold text-black hover:scale-110 justify-center items-center shadow-lg shadow-black  select-none
    active:translate-y-1 active:scale-95 transform transition-all ease-in-out duration-300"
        >
          <div className="absolute animated-ping">C</div>
        </div>
      </Link>
      <Link href="/toolsandguides">
        <div className="flex  bg-[#F7B538] p-10 rounded-br-full font-bold text-black hover:scale-110  justify-center items-center shadow-lg shadow-black  select-none active:translate-y-1 active:scale-95 transform transition-all ease-in-out duration-300">
          <div className="absolute animated-ping">D</div>
        </div>
      </Link>
    </div>
  );
};
export default NavigationPoint;
