import { searchIcon } from "../assets/imagesAndIcons";
interface SearchProps {
  customStyle: string;
}
export default function Search({ customStyle }: SearchProps) {
  return (
    <div
      className={`px-[3rem] rounded-[1.6rem] py-[1.5rem] ${customStyle} w-[80%] lg:w-[50rem] flex items-center`}
    >
      <div className="w-[1.3rem] lg:w-[1.3rem] mr-[1rem]">
        <img src={searchIcon} alt="search icon" width="100%" height="auto" />
      </div>
      <input
        type="text"
        name="search"
        placeholder="sneakers"
        className="text-[1.4rem] text-inputTextGrey bg-transparent focus:outline-none"
      />
    </div>
  );
}
