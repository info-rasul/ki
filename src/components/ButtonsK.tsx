import type { FunctionComponent } from "react";
import React from "react";
import ButtonSocialK from "./ButtonSocialK";

const ButtonsK: FunctionComponent = () => (
  <div className="buttons flex gap-[12px] items-center justify-center max-[770px]:w-full max-[550px]:flex-col max-[550px]:w-full max-[550px]:gap-2.5">
    <a href="/news" className="buttons-news cursor-pointer pl-[25px] pr-[29px] py-[15px] bg-white rounded-full text-[#086C80] text-[15px] font-medium leading-[134%] max-md:w-full max-md:text-center">
      Читать новости
    </a>
    <ButtonSocialK />
  </div>
);

export default ButtonsK;
