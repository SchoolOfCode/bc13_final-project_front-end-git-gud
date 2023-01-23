import { useState, useEffect } from "react";
import Bubbles from "../Bubbles";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Image from "next/image";
import bgImage from "../../public/assets/images/bigPurple.png";

type ContainerProps = {
  children?: React.ReactNode;
  logo?: boolean;
  images?: boolean;
};

const Container = ({ children, logo, images }: ContainerProps) => {
  const [logos, setLogos] = useState(logo);
  const [image, setImage] = useState(images);

  useEffect(() => {
    setLogos(logo);
    setImage(images);
  }, [logo, images]);

  return (
    <div
      id="container"
      className="min-h-screen flex-grow bg-light-light relative overflow-hidden"
    >
      <div
        id="children"
        className="flex flex-col min-h-screen min-w-screen m-0 p-0 justify-between items-center 
          overflow-hidden container  max-w-[1440px] relative z-40"
      >
        <Navbar />
        {children}
        <Footer />
      </div>
      {/* <Navbar /> */}
      {/* <div className="container flex-grow  relative z-40  overflow-hidden  max-w-[1440px]"> */}
      {/* {children} */}
      {/* </div> */}
      <Bubbles />
    </div>
  );
};

export default Container;
