interface ButtonProp {
  text: string;
  bg: string;
  border?: boolean;
  icon?: string;
  flipIcon?: boolean;
  textColor: string;
  iconWidth?: string;
  gap?: string;
  fontSize: string;
}

export default function Button({
  text,
  bg,
  border,
  icon,
  flipIcon,
  textColor,
  iconWidth,
  gap,
  fontSize,
}: ButtonProp) {
  return (
    <div
      className={`w-[100%] cursor-pointer flex ${
        flipIcon && "flex-row-reverse"
      } items-center justify-center rounded-[.8rem] py-[1.2rem] ${bg} ${gap} ${
        border && "border-[1px] border-searchBorderGrey"
      }`}
    >
      <p className={`${fontSize} ${textColor}`}>{text}</p>
      {icon && (
        <div className={`"${iconWidth}"`}>
          <img src={icon} alt="search icon" width="100%" height="auto" />
        </div>
      )}
    </div>
  );
}
