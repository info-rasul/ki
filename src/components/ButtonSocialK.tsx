import type { FunctionComponent } from "react";
import React from "react";
import ButtonSocialIcon from "../assets/img/ButtonSocial.svg";
const ButtonSocialK: FunctionComponent = () => (
  <a className="button-social cursor-pointer flex items-center justify-center gap-[21px] py-[10px] pb-[8px] pl-[25px] pr-[7px] rounded-full text-white text-[15px] font-medium leading-[150%] bg-white bg-opacity-[0.16] shadow-boxShadowBtn max-md:w-full max-md:py-[14px]">
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
