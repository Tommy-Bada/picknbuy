import { logo } from "../assets/imagesAndIcons";
interface LogoProps {
  text: string;
  icon: string;
}
export default function Logo({ text, icon }: LogoProps) {
  return (
    <div className="flex items-center">
      <p className={`logo ${text} text-pnbPurple`}>Pick n Buy</p>
      <div className={`${icon}`}>
        <img src={logo} alt="logo" width="100%" height="auto" />
      </div>
    </div>
  );
}
