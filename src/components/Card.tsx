import type { FunctionComponent } from "react";
import React from "react";
import AboutUsCardImg from "../assets/img/about-us-card-img.jpg";

const Card: FunctionComponent = () => (
  <div className="flex flex-col gap-[20px] max-sm:gap-[18px]">
    <img className="max-md:w-[320px] max-md:h-[320px] max-md:bg-cover max-md:bg-center" src={AboutUsCardImg} alt="Изображение для карточки сотрудника" />
    <div className="flex flex-col gap-[12px] max-sm:gap-[7px]">
      <p className="text-[20px] leading-[145%] tracking-[.3px] max-sm:text-[18px] max-sm:leading-[130%]">Сергей Гаврилов</p>
      <p className="text-[15px] leading-[170%] tracking-[.2px]">
        Эксперт в области юриспруденции
      </p>
    </div>
  </div>
);

export default Card;
