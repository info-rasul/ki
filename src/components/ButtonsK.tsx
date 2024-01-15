import type { FunctionComponent } from "react";
import React from "react";
import ButtonSocialK from "./ButtonSocialK";

const ButtonsK: FunctionComponent = () => (
  <div className="buttons flex gap-[13px] items-center justify-center max-[1439px]:justify-start max-[550px]:flex-col w-full max-[550px]:gap-2.5">
    <a className="buttons-news cursor-pointer px-[25px] py-[14px] bg-white rounded-full text-[#086C80] text-[15px] font-medium leading-[150%] tracking-[.5px] max-md:w-full text-center">
      Читать новости
    </a>
    <ButtonSocialK />
  </div>
);

export default ButtonsK;
