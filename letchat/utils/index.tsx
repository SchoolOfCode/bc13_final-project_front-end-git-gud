export const NewJobButton = () => {
  return <div>NewJobButton</div>;
};

export const Tabs = () => {
  return <div>Tabs</div>;
};

type CardProps = {
  children?: React.ReactNode,
  className?: string
}
export const Card = ({children, className}: CardProps) => {
  return (
    <div className={`card shadow-xl ${className}`}>
      {children}
      <div className="card-body min-w-[198rem]">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
