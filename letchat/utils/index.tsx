export const NewJobButton = () => {
  return <div>NewJobButton</div>;
};

export const Tabs = () => {
  return <div>Tabs</div>;
};

type CardProps = {
  children?: React.ReactNode;
  primary?: string;
  secondary?: string;
  title?: string;
};
export const Card = ({ children, primary, secondary, title }: CardProps) => {
  return (
    <div className={`card card-compact w-80   shadow-xl`} >
      <div className="card-body gap-0">
        <h2 className={`card-title text-light-light p-2 ${primary}`}>{title}</h2>
       
        <div className={`card-side h-[20vh] max-h-[30vh] p-2 justify-end overflow-y-scroll scroll-none ${secondary}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
