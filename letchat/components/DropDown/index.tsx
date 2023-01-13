import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const filters = [
  { id: 1, property: "All properties" },
  { id: 2, property: "1 Next Avenue, N2 0GJ" },
  { id: 3, property: "2 Tailwind Crescent, T1 0EP" },
  { id: 4, property: "3 Express Lane, E1 0DM" },
  { id: 5, property: "4 Postgres Way, P1 0WB" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DropDown = () => {
  const [selected, setSelected] = useState(filters[0]);

  return (
    <select className="select select-primary w-full max-w-xs">
      // Map through filters array 
      {filters.map((filter) => {
        return <option>{filter.property}</option>;
      })}
    </select>
  );
};

export default DropDown;
