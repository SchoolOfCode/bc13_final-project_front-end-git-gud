import Link from "next/link";

const NavigationPoint = () => {
  return (
    <div className="grid w-[12rem] gap-2 rounded-full bg-primary px-2 py-2 md:grid-cols-2">
      <Link href="/storage">
        <div
          className="] flex transform select-none items-center justify-center rounded-tl-full bg-[#FAB8C4] p-10 font-bold shadow-lg
    shadow-black transition-all duration-300 ease-in-out hover:scale-110 active:translate-y-1  active:scale-95"
        >
          <div className="animated-ping absolute">A</div>
        </div>
      </Link>
      <Link href="/jobboard">
        <div
          className="flex transform select-none items-center justify-center rounded-tr-full bg-[#F58071] p-10 font-bold text-black shadow-lg shadow-black
    transition-all duration-300 ease-in-out hover:scale-110 active:translate-y-1 active:scale-95"
        >
          <p className="animated-ping absolute">B</p>
        </div>
      </Link>
      <Link href="/">
        <div
          className="flex transform select-none items-center justify-center rounded-bl-full bg-[#5956E9] p-10 font-bold text-black shadow-lg shadow-black
    transition-all duration-300 ease-in-out hover:scale-110 active:translate-y-1 active:scale-95"
        >
          <div className="animated-ping absolute">C</div>
        </div>
      </Link>
      <Link href="/toolsandguides">
        <div className="flex transform select-none items-center justify-center rounded-br-full bg-[#F7B538] p-10 font-bold text-black shadow-lg shadow-black transition-all duration-300 ease-in-out hover:scale-110 active:translate-y-1 active:scale-95">
          <div className="animated-ping absolute">D</div>
        </div>
      </Link>
    </div>
  );
};
export default NavigationPoint;
