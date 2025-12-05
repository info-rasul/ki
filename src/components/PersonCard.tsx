import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import PersonCardImg from "../assets/img/taleb.png";

const SubTitle: FunctionComponent = () => (
  <Fragment>
    <div className="flex py-[9px] pl-[9px] pr-[20px] tracking-[-0.5px] items-center gap-[15px] rounded-[40px] bg-[#F8F8F8] border-[1px] border-[#FFFFFF]/[.20] max-sm:py-[7px] max-sm:pl-[7px]">
      <img className="w-[32px] max-sm:w-[28px] max-sm:h-[28px] rounded-full" src={PersonCardImg} alt="Изображение для карточки пользователя" />
      <p className="font-semibold text-[15px] max-sm:text-[13px] pt-[2px]">Н.Н. Талеб</p>
    </div>
  </Fragment>
);

export default SubTitle;
