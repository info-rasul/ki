import type { FunctionComponent } from "react";
import ButtonSocialIcon from "../assets/img/ButtonSocial.svg";
const ButtonSocialK: FunctionComponent = () => (
  <a className="flex items-center justify-center gap-[23px] py-[10px] pb-[9px] pl-[25px] pr-[9px] rounded-full text-white text-[15px] font-medium leading-[150%] bg-white bg-opacity-[0.16] shadow-boxShadowBtn max-md:w-full max-md:py-[14px]">
    Telegram канал
    <img
      className="max-md:hidden"
      width="32"
      height="32"
      src={ButtonSocialIcon}
      alt="ButtonSocialIcon"
    />
  </a>
);

export default ButtonSocialK;
