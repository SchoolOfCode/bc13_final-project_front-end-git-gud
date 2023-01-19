import Container from "../Container";
import Footer from "../Footer";


type ContentProps = {
  title: string;
  navigation?: React.ReactNode;
  central?: React.ReactNode;
};

const Content = ({ title, navigation, central }: ContentProps) => {

  return (
    <div className="flex flex-col justify-around">
      <Container>
        <div className="hero lg:place-items-center">
          <div className="container h-full relative">
            <div className="text-center">
              <h1 className="text-black">{title}</h1>
            </div>

            <div className="flex justify-center">
              <div className="flex w-[30%] items-center justify-around">
                {central}
              </div>
            </div>

            <div className="flex bg-yellow-200"></div>

            <div className="hidden">{navigation}</div>

            {/* <div className="w-1/2 ">{central}</div> */}
          </div>
        </div>
          
      </Container>
        <Footer/>
    </div>
  );
};
export default Content;
