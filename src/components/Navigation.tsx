import type { FunctionComponent } from "react";
import React from "react";
import twoSvg from "../assets/img/icon.png";
interface NavigationProps {
    namePage: string;
}
const Navigation: React.FC<NavigationProps> = ({namePage}) => (
  <div className="flex flex-col gap-5 max-sm:gap-[10px]">
    <div className="services__navigation flex items-center mt-10 gap-[7px] max-sm:gap-[5px]">
      <a
        className="navigation-home text-[#B3B3B3] text-[13px] leading-[145%] max-sm:leading-[150%]"
        href="/"
      >
        Главная
      </a>
      <img src={twoSvg} alt="icon" />
      <a
        className="text-[13px] leading-[145%] font-helveticaNeue max-sm:leading-[150%]"
        href="#"
      >
          {namePage}
      </a>
    </div>
    <h1 className="text-[40px] leading-[140%] max-sm:text-[28px]">{namePage}</h1>
    <div className="sm:hidden h-[1px]  bg-[#B3B3B3] mt-[9px]"></div>
  </div>
);

export default Navigation;
