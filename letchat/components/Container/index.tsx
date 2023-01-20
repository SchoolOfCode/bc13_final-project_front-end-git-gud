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
    <div className="container min-h-[80vh] min-w-[100vw] bg-black flex flex-col items-center justify-center ">
      <div
        id="container"
        className="container min-h-[100vh] bg-light-light max-w-[2560px] relative overflow-hidden"
      >
        <Navbar />
        <div
          id="children"
          className="container h-full max-w-[2560px] relative z-40 overflow-hidden"
        >
          {children}
        </div>

        <section id="background">
          {logos ? (
            <div className="container h-full w-full">
              <div
                id="big-purple-circle"
                className="overflow-hidden absolute z-20 bg-light-primary min-w-[150%] min-h-[80%] top-[-50px] lg:min-w-[100%] lg:rounded-l-[100%] lg:min-h-[100%] lg:rounded-br-[80%] lg:right-[-50%] xl:min-w-[90%]"
              ></div>
              <div
                id="purple-triangle"
                className="overflow-hidden hidden z-30 border-b-light-primary border-x-[15rem] border-b-[15rem] border-x-solid border-x-transparent border-b-solid absolute right-[-120px] bottom-[48px] rounded-br-[50%] lg:block lg:right-[-50px] lg:bottom-[35px]"
              ></div>
            </div>
          ) : null}

          <Bubbles />

          {image ? (
            <div className="static w-full h-full">
              <div
                id="image-one"
                // className="hidden w-[581px] h-[545px] bg-light-hot absolute right-[20vw] top-[10vh] rounded-[100%] z-30 md:block"
              >
                <img
                  src="https://placeimg.com/600/600/tech"
                  alt="random image"
                  className="hidden w-96 bg-light-hot absolute right-[20vw] top-[10vh] rounded-[100%] z-30 lg:block"
                />
              </div>
              <div
                id="image-one"
                // className="hidden w-[387px] h-[356px] bg-light-secondary absolute right-[-5vw] bottom-[10vh] rounded-[100%] overflow-hidden z-30 md:block"
              >
                <img
                  src="https://placeimg.com/600/600/people"
                  alt="random image"
                  className="hidden w-80 bg-light-secondary absolute right-[-5vw] bottom-[10vh] rounded-[100%] overflow-hidden z-30 lg:block xl:right-[0]"
                />
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
};

export default Container;
