import { useNavigate } from "react-router-dom";
import { cartIcon, likeIcon } from "../assets/imagesAndIcons";
import Logo from "./Logo";
import Search from "./Search";
interface HeaderProps {
  withSearch: boolean;
}
export default function Header({ withSearch }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header
      className={`flex ${
        withSearch ? "justify-between" : "justify-end"
      } items-center p-[2rem] lg:px-[10rem]`}
    >
      {withSearch && (
        <Logo
          text="text-[1.8rem] lg:text-[2.4rem]"
          icon="w-[1.6rem] lg:w-[2.5rem]"
        />
      )}
      {withSearch && (
        <div className="max-sm:hidden w-[45%]">
          <Search customStyle="bg-searchBackgroundGrey border-[1px] border-searchBorderGrey" />
        </div>
      )}
      <div className="flex justify-end items-center">
        <div className="w-[2.4rem] lg:w-[3.2rem]">
          <img src={likeIcon} alt="likes icon" width="100%" height="auto" />
        </div>
        <div
          className="w-[2.4rem] lg:w-[3.2rem] mx-[2rem] sm:mx-[3.5rem] cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <img src={cartIcon} alt="cart icon" width="100%" height="auto" />
        </div>
        <div className="w-[2.4rem] lg:w-[3.2rem] h-[2.4rem] lg:h-[3.2rem] rounded-full bg-pnbPurple flex justify-center items-center"></div>
      </div>
    </header>
  );
}
