import type { FunctionComponent } from "react";
import React from "react";
import twoSvg from "../assets/img/navigation-icon.svg";
interface NavigationProps {
    namePage: string;
}
const Navigation: React.FC<NavigationProps> = ({namePage}) => (
  <div className="flex flex-col gap-5 max-sm:gap-[10px]">
    <div className="services__navigation mt-10 gap-[5px] max-[1030px]:mt-[92px]">
        <ol className="flex items-center" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="/">
                    <span className="navigation-home text-[#B3B3B3] text-[13px] leading-[150%]" itemProp="name">Главная</span>
                </a>
                <meta itemProp="position" content="1"/>
            </li>
            <li>
                <img src={twoSvg} alt=">" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="">
                    <span className="text-[13px] leading-[150%] font-helveticaNeue" itemProp="name"> {namePage} </span>
                </a>
                <meta itemProp="position" content="2"/>
            </li>
        </ol>
    </div>
      <div>
          <h1 style={{ fontSize: 'clamp(28px, 2.8vw, 40px)' }} className="leading-[140%] max-sm:text-[28px]">{namePage}</h1>
          <div className="sm:hidden h-[1px]  bg-[#B3B3B3] mt-5"></div>
      </div>
  </div>
);

export default Navigation;
