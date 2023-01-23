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
        <div className="max-w-[1400px] m-auto p-10 min-h-[75vh] lg:place-items-center">
          <div className="container  min-w-[8rem] h-full relative">
            <div className="text-center">
              <h1 className="text-black">{title}</h1>
            </div>
            <div className="container flex flex-row-reverse">
              <div className="hidden md:flex flex-1 items-center flex-col justify-start mt-[5rem]">
                <div className="w-full px-4">{newsfeed}</div>
              </div>
              <div className="flex-1 items-center justify-center">
                {central}
              </div>
              <div className="hidden md:flex flex-1 items-center flex-col justify-center">
                <div className="w-fit">{profile}</div>

                <div className="flex mt-[6rem] flex-col justify-center items-center md:w-[10rem]">
                  {navigation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Content;
