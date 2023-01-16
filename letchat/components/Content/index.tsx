import Container from "../Container";
import Footer from "../Footer";
type ContentProps = {
  title: string;
  navigation?: React.ReactNode;
  central?: React.ReactNode;
};

const Content = ({ title, navigation, central }: ContentProps) => {
  return (
    <>
      <Container>
        <div className="hero h-[100vh] lg:place-items-center">
          <div className="container h-full relative">
            <div className="text-center">
              <h1 className="text-black">{title}</h1>
            </div>

            <div className="flex bg-yellow-200"></div>

            <div className="hidden ">{navigation}</div>

            <div className="w-1/2 ">{central}</div>
          </div>
          <Footer />
        </div>
      </Container>
    </>
  );
};
export default Content;
