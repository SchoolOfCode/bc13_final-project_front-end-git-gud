import Container from "../Container";

type ContentProps = {
  title: string;
  navigation: React.ReactNode;
  central: React.ReactNode;
};

const Content = ({ title, navigation, central }: ContentProps) => {
  return (
    <Container>
      <div className="container  max-w-[2560px] flex flex-col justify-center items-center">
        <h1 className="text-black">{title}</h1>
        <div className="flex bg-yellow-200"></div>

        <div className="hidden lg:toast toast-start ml-[2rem] bottom-[20%]">
          {navigation}
        </div>

        <div className="toast w-1/2 toast-middle toast-center">{central}</div>
      </div>
    </Container>
  );
};
export default Content;
