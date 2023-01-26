import { useState, useEffect } from "react";
import Bubbles from "../Bubbles";
import Footer from "../Footer";
import Navbar from "../Navbar";

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
      className="max-w-screen relative flex min-h-screen flex-grow flex-col overflow-hidden bg-light-light"
    >
      <div
        id="children"
        className="min-w-screen relative z-40 m-0 flex min-h-screen flex-grow flex-col items-center 
        justify-between overflow-hidden p-0"
      >
        <Navbar />
        {children}
        <Footer />
      </div>
      <Bubbles />
    </div>
  );
};

export default Container;
