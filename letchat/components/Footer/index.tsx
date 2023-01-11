import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer data-testid="footer" className="p-4 bg-white sm:p-6 dark:bg-gray-900 w-[100%] border-t-2">
      <div className="md:flex md:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <Image
            src="/assets/images/letchatLogo.png"
            alt="LetChat logo"
            width={50}
            height={50}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
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
