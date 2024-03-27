import type { FunctionComponent } from "react";
import React from "react";
import ButtonSocialIcon from "../assets/img/button-social.svg";
const ButtonSocialK: FunctionComponent = () => (
  <a href="https://t.me/co_info" target="_blank" rel="noopener noreferrer nofollow"
     className="button-social cursor-pointer flex items-center justify-center pt-[16px] pb-[14px] pl-[25px] pr-[61px] whitespace-nowrap relative rounded-full text-white text-[15px] font-medium leading-[134%] bg-white bg-opacity-[0.16] shadow-boxShadowBtn max-md:pr-[25px] max-md:w-full max-md:py-[14px]">
    Telegram-канал
    <img
      className="max-md:hidden absolute right-[9px]"
      width="32"
      height="32"
      src={ButtonSocialIcon}
      alt="Иконка"
    />
  </a>
);

export default ButtonSocialK;
