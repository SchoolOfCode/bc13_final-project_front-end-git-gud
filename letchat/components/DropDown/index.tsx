const filters = [
  { id: 1, property: "All properties" },
  { id: 2, property: "1 Next Avenue, N2 0GJ" },
  { id: 3, property: "2 Tailwind Crescent, T1 0EP" },
  { id: 4, property: "3 Express Lane, E1 0DM" },
  { id: 5, property: "4 Postgres Way, P1 0WB" },
];

const DropDown = () => {
  return (
    <select className="select-primary select w-full max-w-xs">
      {filters.map((filter) => {
        return <option>{filter.property}</option>;
      })}
    </select>
  );
};

export default DropDown;
