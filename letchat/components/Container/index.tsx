type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
   
      <div className="min-w-[100vw] min-h-[100vh] max-w-[1440px] bg-light-light">
        {children}
      </div>
    
  );
};

export default Container;
