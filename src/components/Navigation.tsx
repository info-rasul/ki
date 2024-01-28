import type { FunctionComponent } from "react";
import React from "react";
import twoSvg from "../assets/img/navigation-icon.svg";
interface NavigationProps {
    namePage: string;
}
const Navigation: React.FC<NavigationProps> = ({namePage}) => (
  <div className="flex flex-col gap-5 max-sm:gap-[10px]">
    <div className="services__navigation flex items-center mt-10 gap-[5px] max-sm:mt-[92px]">
      <a href="/" className="navigation-home text-[#B3B3B3] text-[13px] leading-[150%]"
      >
        Главная
      </a>
      <img src={twoSvg} alt=">" />
      <a
        className="text-[13px] leading-[150%] font-helveticaNeue"
        href="#"
      >
          {namePage}
      </a>
    </div>
      <div>
          <h1 className="text-[40px] leading-[140%] max-sm:text-[28px]">{namePage}</h1>
          <div className="sm:hidden h-[1px]  bg-[#B3B3B3] mt-5"></div>
      </div>
  </div>
);

export default Navigation;
