import { ChangeEventHandler } from "react";
import { dropDown } from "../assets/imagesAndIcons";

interface Option {
  value: string;
  label: string;
}
interface DropDownProps {
  options: Option[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  selectedValue: string;
  name: string;
}

export default function FilterButton({
  options,
  onChange,
  selectedValue,
  name,
}: DropDownProps) {
  return (
    <div className="flex items-center px-[1rem] lg:px-[2rem] rounded-[1.6rem] py-[.6rem] lg:py-[1.2rem] border-[1px] w-[max-content] relative">
      <select
        className="text-[1.4rem] outline-none appearance-none text-textBlack bg-transparent"
        name={name}
        onChange={onChange as ChangeEventHandler<HTMLSelectElement>}
        value={selectedValue}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="w-[1rem] ml-[.5rem] lg:ml-[1rem]">
        <img src={dropDown} alt="drop down" width="100%" height="auto" />
      </div>
    </div>
  );
}
