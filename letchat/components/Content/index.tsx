import Container from "../Container";

type ContentProps = {
  title: string;
  navigation?: React.ReactNode;
  central?: React.ReactNode;
  newsfeed?: React.ReactNode;
};

const Content = ({ title, central, newsfeed }: ContentProps) => {
  return (
    <>
      <Container>
        <div className="flex w-screen flex-grow items-start">
          <div className="flex justify-center lg:w-[30%] xl:w-[20%]">
            {newsfeed}
          </div>
          <div className="flex-1 items-start lg:w-[60%]">
            <h1 className="text-center text-black">{title}</h1>
            {central}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Content;
