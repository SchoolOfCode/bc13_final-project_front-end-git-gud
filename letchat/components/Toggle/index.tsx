type ToggleProps = {
  completed: boolean;
  handleClick: React.MouseEventHandler<HTMLInputElement>;
};

function Toggle({ completed, handleClick }: ToggleProps) {
  return (
    <div className="flex">
      <div className="form-control w-40">
        <label className="label cursor-pointer">
          <span className="label-text text-light-primary">Completed</span>
          <input
            type="checkbox"
            className={`toggle-primary toggle ${
              completed ? "checked" : ""
            } active:bg-none`}
            onClick={handleClick}
          />
        </label>
      </div>
    </div>
  );
}

export default Toggle;
