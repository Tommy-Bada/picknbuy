import { ChangeEventHandler } from "react";
interface Option {
  value: string;
  label: string;
}
interface InputProps {
  name: string;
  value: string | number;
  onChange?:
    | ChangeEventHandler<HTMLSelectElement>
    | ChangeEventHandler<HTMLInputElement>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  title?: string;
  placeholder?: string;
  type?: string;
  isDisabled?: boolean;
  isMultiple?: boolean;
  selectOptions?: boolean;
  options?: Option[];
  norm?: boolean;
  flat?: string;
}
export default function InputField({
  title,
  type,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
  norm,
  isDisabled,
  isMultiple,
  options,
  selectOptions,
  flat,
}: InputProps) {
  return (
    <div>
      {norm && (
        <div>
          {title && (
            <div className="mb-[1rem]">
              <label className="text-[1.6rem] text-textBlack">{title}</label>
            </div>
          )}
          <div>
            <input
              type={type}
              placeholder={placeholder}
              name={name}
              onChange={onChange as ChangeEventHandler<HTMLInputElement>}
              onBlur={onBlur}
              value={value}
              className={`text-formInputGrey text-[1.4rem] w-[100%] outline-none bg-transparent p-[1.6rem] ${
                flat ? flat : "rounded-[.8rem]"
              }  border-[1px]`}
            />
          </div>
        </div>
      )}
      {selectOptions && (
        <div>
          <div className="mb-[1rem]">
            <label className="text-[1.6rem] text-textBlack">{title}</label>
          </div>
          <div className=" border-[0.1rem] py-[1rem] px-[.4rem] rounded-[.8rem] w-[100%] mt-[.6rem] ">
            <div>
              <select
                name={name}
                onChange={onChange as ChangeEventHandler<HTMLSelectElement>}
                value={value}
                className="text-formInputGrey text-[1.4rem] w-[100%] outline-none bg-transparent h-[3.5rem]"
                disabled={isDisabled}
                multiple={isMultiple}
              >
                {options?.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    className="text-[1.2rem] p-[.3rem] "
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
