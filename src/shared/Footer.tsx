import { googleStoreIcon, iosStore } from "../assets/imagesAndIcons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="lg:flex lg:justify-between border-t-[1px] lg:px-[10rem] lg:pt-[7rem] lg:pb-[12rem] pb-[10rem] px-[2.4rem] pt-[4rem]">
      <div>
        <Logo text="text-[2.4rem]" icon=" w-[2.4rem]" />
        <p className="text-[1.4rem] lg:w-[30rem] text-textGrey">
          Pick n buy is the place to get all your clothing needs. Our mission is
          to make shopping easy for everyone
        </p>
        <div className="flex items-center mt-[2.5rem] lg:mt-[3.5rem] gap-x-[1.6rem]">
          <div>
            <img src={iosStore} alt="ios store" width="100%" height="auto" />
          </div>
          <div>
            <img
              src={googleStoreIcon}
              alt="google store"
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:items-start gap-x-[8rem] gap-y-[2.4rem] lg:gap-y-0 mt-[6.4rem] lg:mt-0">
        <div>
          <h3 className="text-[1.4rem] mb-[.8rem]">Information</h3>
          <ul>
            <li className="mb-[1rem]">
              <a href="#" className="text-[1.4rem] text-textGrey ">
                Pick n Buy
              </a>
            </li>
            <li className="mb-[1rem]">
              <a href="#" className="text-[1.4rem] text-textGrey ">
                Help center
              </a>
            </li>
            <li className="mb-[1rem]">
              <a href="#" className="text-[1.4rem] text-textGrey ">
                For brands
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1.4rem] mb-[.8rem]">Social</h3>
          <ul>
            <li className="mb-[1rem]">
              <a href="#" className="text-[1.4rem] text-textGrey ">
                X (Twitter)
              </a>
            </li>
            <li className="mb-[1rem]">
              <a href="#" className="text-[1.4rem] text-textGrey ">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[1.4rem] mb-[.8rem]">Legal</h3>
          <ul>
            <li className="mb-[1rem]">
              <a href="#" className="text-[1.4rem] text-textGrey ">
                Terms of Service
              </a>
            </li>
            <li className="mb-[1rem]">
              <a href="#" className="text-[1.4rem] text-textGrey ">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
