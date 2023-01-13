import Container from "../Container";
import Footer from "../Footer";
type ContentProps = {
  title: string;
  navigation: React.ReactNode;
  central: React.ReactNode;
};

const Content = ({ title, navigation, central }: ContentProps) => {
  return (
    <>
      <Container>
        <div className="container  max-w-[2560px] flex flex-col justify-center items-center">
          <h1 className="w-1/2 text-black toast toast-top toast-center mt-14">
            {title}
          </h1>
          <div className="flex bg-yellow-200"></div>

          <div className="hidden lg:toast toast-start ml-[2rem] bottom-[20%]">
            {navigation}
          </div>

          <div className="toast w-1/2 toast-middle toast-center">{central}</div>
          <Footer />
        </div>
      </Container>
    </>
  );
};
export default Content;
