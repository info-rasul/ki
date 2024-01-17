import type { FunctionComponent } from "react";
import React from "react";
import AboutUsCardImg from "../assets/img/about-us-card-img.jpg";

const Card: FunctionComponent = () => (
  <div className="flex flex-col gap-[20px]">
    <img src={AboutUsCardImg} alt="Изображение для карточки сотрудника" />
    <div className="flex flex-col gap-[12px]">
      <p className="text-[20px] leading-[145%] tracking-[.3px]">Сергей Гаврилов</p>
      <p className="text-[15px] leading-[170%] tracking-[.2px]">
        Эксперт в области юриспруденции
      </p>
    </div>
  </div>
);

export default Card;
