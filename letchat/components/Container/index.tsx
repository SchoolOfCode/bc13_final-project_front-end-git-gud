import styles from "../../styles/Container.module.css";

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="h-[100vh] min-w-[100vw] bg-light-light flex flex-col items-center justify-center ">
      <div
        id="container"
        className="container h-[100vh] max-w-[1440px] overflow-hidden relative"
      >
        <div
          id="children"
          className="container max-h-[100vh] max-w-[1440px] flex absolute z-40 overflow-hidden"
        >

          {children}

        </div>

        <section id="background">
          <div
            id="big-purple-circle"
            className="overflow-hidden absolute z-20 bg-light-primary min-w-[150%] min-h-[100%] rounded-bl-[100%] rounded-br-[100%] top-[-50px] lg:min-w-[100%] lg:rounded-l-[100%] lg:rounded-br-[80%] lg:right-[-50%]"
          ></div>
          <div
            id="purple-triangle"
            className="overflow-hidden z-30 border-b-light-primary border-x-[15rem] border-b-[15rem] border-x-solid border-x-transparent border-b-solid absolute right-[-120px] bottom-[48px] rounded-br-[50%] lg:right-[-50px] lg:bottom-[35px]"
          ></div>

          <div
            id="bubles"
            className="absolute w-full h-full overflow-hidden top-0 left-0"
          >
            <div
              id="pink-bubble"
              className={`${styles.bubble} absolute right-[30%] bottom-[-200px] w-[100px] h-[100px] rounded-full opacity-[0.8] bg-light-secondary z-30`}
            ></div>
            <div
              id="orange-bubble"
              className={`${styles.bubble} absolute bottom-[-200px] w-[150px] h-[150px] rounded-full opacity-[0.8] bg-light-hot`}
            ></div>
            <div
              id="yellow-bubble"
              className={`${styles.bubble} absolute right-[70%] bottom-[-200px] w-[200px] h-[200px] rounded-full opacity-[0.4] bg-light-primary`}
            ></div>
            <div
              id="red-bubble"
              className={`${styles.bubble} absolute right-0 bottom-[-200px] w-[100px] h-[100px] rounded-full opacity-[0.8] bg-light-tertiary z-30`}
            ></div>
          </div>

          <div
            id="image-one"
            className="hidden w-[581px] h-[545px] bg-light-hot absolute right-[20vw] top-[10vh] rounded-[100%] z-30 lg:block"
          ></div>
          <div
            id="image-one"
            className="hidden w-[387px] h-[356px] bg-light-secondary absolute right-[-5vw] bottom-[10vh] rounded-[100%] overflow-hidden z-30 lg:block"
          ></div> 
        </section>
      </div>
    </div>
  );
};

export default Container;
