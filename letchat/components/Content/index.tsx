import Container from "../Container";
import Footer from "../Footer";

type ContentProps = {
  title: string;
  navigation?: React.ReactNode;
  central?: React.ReactNode;
  profile?: React.ReactNode;
  newsfeed?: React.ReactNode;
};

const Content = ({
  title,
  navigation,
  central,
  profile,
  newsfeed,
}: ContentProps) => {
  return (
    <>
      <Container>
        <div className="w-screen flex-grow items-start justify-evenly flex">
          <div className="hidden gap-12 px-10 lg:flex flex-col mt-10">
            <div>{newsfeed}</div>
            <div>{profile}</div>
          </div>
          <div className="flex-1 items-start">
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
