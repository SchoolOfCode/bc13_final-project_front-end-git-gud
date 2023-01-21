import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    // <footer data-test id="footer" className="hidden toast toast-bottom p-4 lg:block bg-light-primary w-[100%]">
    //   <div className=" flex justify-between items-center">
    //     <Link href="/" className="flex items-center mb-4 sm:mb-0">
    //       <Image
    //         src="/assets/images/letchatLogo.png"
    //         alt="LetChat logo"
    //         width={50}
    //         height={50}
    //         className="bg-light-primary w-10 h-10 border-none hover:opacity-60 hover:bg-light-primary rounded-full"
    //       />
    //       <span className="self-center text-2xl ml-2 font-semibold whitespace-nowrap dark:text-white">
    //         LetChat
    //       </span>
    //     </Link>

    //     <p className="text-light-secondary text-lg">123 Fake Street, Faker City, A45 B67</p>
    //     <p className="text-light-secondary text-lg">(+44) 7428495452</p>
    //     <p className="text-light-secondary text-lg">info@letchat.co.uk</p>
    //   </div>
    // </footer>
    <footer
      data-test
      id="footer"
      className="mt-auto hidden md:footer p-4  bg-light-primary w-[100%] text-base-content  place-items-center"
    >
      <div className="flex items-center">
        <Link href="/" className="fill-current">
          <Image
            src="/assets/images/logoRoof.png"
            alt="LetChat logo"
            width={50}
            height={50}
            className=""
          />
        </Link>
        <p className="mt-3 text-light-light">
          LetChat Ltd.
          <br />
          Providing reliable tech since 2023
        </p>
      </div>
      <div>
        <span className="footer-title text-light-secondary opacity-100">
          Services
        </span>
        <a className="link link-hover text-light-light">Branding</a>
        <a className="link link-hover text-light-light">Design</a>
        <a className="link link-hover text-light-light">Marketing</a>
      </div>
      <div>
        <span className="footer-title text-light-secondary opacity-100">
          Company
        </span>
        <a className="link link-hover text-light-light">About us</a>
        <a className="link link-hover text-light-light">Contact</a>
        <a className="link link-hover text-light-light">Jobs</a>
      </div>
      <div>
        <span className="footer-title text-light-secondary opacity-100">
          Legal
        </span>
        <a className="link link-hover text-light-light">Terms of use</a>
        <a className="link link-hover text-light-light">Privacy policy</a>
        <a className="link link-hover text-light-light">Cookie policy</a>
      </div>
    </footer>
  );
};
export default Footer;
