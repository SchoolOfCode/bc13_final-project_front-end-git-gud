import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer data-testid="footer" className="hidden toast toast-bottom p-4 lg:block bg-light-primary w-[100%]">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <Image
            src="/assets/images/letchatLogo.png"
            alt="LetChat logo"
            width={50}
            height={50}
            className="bg-light-primary w-10 h-10 border-none hover:opacity-60 hover:bg-light-primary rounded-full"
          />
          <span className="self-center text-2xl ml-2 font-semibold whitespace-nowrap dark:text-white">
            LetChat
          </span>
        </Link>

        <p>123 Fake Street, Faker City, A45 B67</p>
        <p>(123) 456 789</p>
        <p>info@letchat.co.uk</p>
      </div>
    </footer>
  );
};
export default Footer;
