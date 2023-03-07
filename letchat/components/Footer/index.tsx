import Image from "next/image";
import Link from "next/link";
import logoRoof from "../../public/assets/images/logoRoof.png";

const Footer = () => {
  return (
    <footer data-test className="flex w-screen bg-light-primary">
      <div className="m-auto flex w-full flex-col p-6 md:flex-row lg:max-w-[1400px] lg:justify-center">
        <div className="mb-6 flex flex-col items-start justify-start md:mb-0">
          <Link href="/" className="relative h-8 w-16 ">
            <Image src={logoRoof} alt="LetChat logo" fill={true} sizes="100%" />
          </Link>
          <p className="mt-3 text-light-light">
            &copy; GitGud Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
        </div>
        {/*  */}
        <div className="flex w-full justify-between gap-6 md:w-full md:max-w-[1400px] md:flex-row md:justify-around lg:justify-around pr-4">
          <div className="flex flex-col">
            <span className="footer-title text-white opacity-100">Company</span>
            <Link href="/about" className="link-hover link text-light-light">
              About us
            </Link>
            <Link href="/contact" className="link-hover link text-light-light">
              Contact
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="footer-title text-white opacity-100">Legal</span>
            <Link
              href="/termsofuse"
              className="link-hover link text-light-light"
            >
              Terms of use
            </Link>
            <Link
              href="/privacypolicy"
              className="link-hover link text-light-light"
            >
              Privacy policy
            </Link>
            <Link
              href="/cookiepolicy"
              className="link-hover link text-light-light"
            >
              Cookie policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
