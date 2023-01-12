import { useState,useEffect } from "react";
import Bubbles from "../Bubbles";

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
    <div className="h-[100vh] min-w-[100vw] bg-black flex flex-col items-center justify-center ">
      <div
        id="container"
        className="container h-[100vh] bg-light-light max-w-[2560px] overflow-hidden relative"
      >
        <div
          id="children"
          className="container min-h-full max-h-[100vh] max-w-[1440px] flex absolute z-40 overflow-hidden"
        >
          {children}
        </div>

        <section id="background">
          {logos ? (
            <>
              <div
                id="big-purple-circle"
                className="overflow-hidden absolute z-20 bg-light-primary min-w-[150%] min-h-[100%] rounded-bl-[50%] rounded-br-[100%] top-[-50px] lg:min-w-[100%] lg:rounded-l-[100%] lg:rounded-br-[80%] lg:right-[-50%] xl:min-w-[90%]"
              ></div>
              <div
                id="purple-triangle"
                className="overflow-hidden z-30 border-b-light-primary border-x-[15rem] border-b-[15rem] border-x-solid border-x-transparent border-b-solid absolute right-[-120px] bottom-[48px] rounded-br-[50%] lg:right-[-50px] lg:bottom-[35px]"
              ></div>
            </>
          ) : null}

          <Bubbles />

          {image ? (
            <>
              <div
                id="image-one"
                className="hidden w-[581px] h-[545px] bg-light-hot absolute right-[20vw] top-[10vh] rounded-[100%] z-30 md:block"
              ></div>
              <div
                id="image-one"
                className="hidden w-[387px] h-[356px] bg-light-secondary absolute right-[-5vw] bottom-[10vh] rounded-[100%] overflow-hidden z-30 md:block"
              ></div>
            </>
          ) : null}
        </section>
      </div>
    </div>
  );
};

export default Container;
