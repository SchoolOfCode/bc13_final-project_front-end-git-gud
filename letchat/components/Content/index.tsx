import { useState } from "react";
import Container from "../Container";
import Footer from "../Footer";
import Tabs from "../Tabs";

type ContentProps = {
  title: string;
  navigation?: React.ReactNode;
  central?: React.ReactNode;
};

const Content = ({ title, navigation, central }: ContentProps) => {
  const [job, setJob] = useState(0);
  

  const addJob = () => {
    setJob(job + 1);
    console.log(job);
  };



  return (
    <>
      <Container>
        <div className="hero h-[100vh] lg:place-items-center">
          <div className="container h-full relative">
            <div className="text-center">
              <h1 className="text-black">{title}</h1>
            </div>

            <div className="flex justify-center">
              <div className="flex w-[30%] items-center justify-around">
                
                {job > 0 ? (
                  <>
                    <Tabs />
                  </>
                ): null}
                
                <div>
                  <button className="btn btn-primary btn-lg rounded-full text-3xl" onClick={addJob}>+</button>
                </div>
              </div>
            </div>

            <div className="flex bg-yellow-200"></div>

            <div className="hidden ">{navigation}</div>

            {/* <div className="w-1/2 ">{central}</div> */}
          </div>
          <Footer />
        </div>
      </Container>
    </>
  );
};
export default Content;
