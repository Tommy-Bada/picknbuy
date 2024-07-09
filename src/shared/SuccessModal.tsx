import { useNavigate } from "react-router-dom";
import { successIcon } from "../assets/imagesAndIcons";
import Button from "./Button";

interface ModalProps {
  handleCancel?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  isVisible: boolean;
}

export default function SuccessModal({ handleCancel, isVisible }: ModalProps) {
  const navigate = useNavigate();
  if (!isVisible) return null;
  return (
    <div
      className="fixed flex justify-center items-center inset-0 bg-white bg-opacity-60 backdrop-blur-md"
      onClick={handleCancel}
    >
      <div
        className=" p-[2.4rem] rounded-[1.2rem] text-center"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="lg:w-[15rem] w-[13rem] mx-auto">
          <img src={successIcon} alt="search icon" width="100%" height="auto" />
        </div>
        <p className="text-[2.4rem] mt-[3rem] mb-[1.6rem]">Success!</p>
        <p className="text-[1.6rem] mb-[2.4rem]">
          You have successfully made your payment. Thank you for shopping with
          us!
        </p>
        <div className="flex items-center w-[max-content] mx-auto">
          <div className="w-[16rem] lg:w-[20.8rem] mr-[1.6rem]">
            <Button
              bg={"bg-transparent"}
              text="Download receipt"
              textColor="text-pnbPurple"
              fontSize="text-[1.4rem] lg:text-[1.6rem]"
              border
              handleClick={() => {}}
            />
          </div>
          <div className="w-[16rem] lg:w-[20.8rem]">
            <Button
              bg={"bg-pnbPurple"}
              text="Return home"
              textColor="text-white"
              fontSize="text-[1.4rem] lg:text-[1.6rem]"
              handleClick={() => navigate("/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
