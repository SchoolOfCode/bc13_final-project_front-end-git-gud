import Container from "../Container";
import Footer from "../Footer";

type ContentProps = {
  title: string;
  navigation?: React.ReactNode;
  central?: React.ReactNode;
  // profile?: React.ReactNode;
  newsfeed?: React.ReactNode;
};

const Content = ({
  title,
  navigation,
  central,
  // profile,
  newsfeed,
}: ContentProps) => {
  return (
    <>
      <Container>
        <div className="w-screen flex flex-grow items-start">
          <div className="flex justify-center lg:w-[30%] xl:w-[20%]">{newsfeed}</div>
          <div className="flex-1 lg:w-[60%] items-start">
            <h1 className="text-black text-center">{title}</h1>
             {central}
          </div>

          {/* <div>{navigation}</div> */}

          {/* <div className=" md:flex items-center md:flex-col justify-start mt-[5rem]">
              <div className=" w-full px-4">{newsfeed}</div>
              <div className=" md:flex items-center flex-col justify-center">
                <div className="w-fit">{profile}</div>
                <div className="flex mt-[6rem] flex-col justify-center items-center md:w-[10rem]">
                  {navigation}
                </div>
              </div>
            </div> */}
        </div>
      </Container>
    </>
  );
};
export default Content;
