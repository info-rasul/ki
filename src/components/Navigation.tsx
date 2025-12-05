import React from "react";
import twoSvg from "../assets/img/navigation-icon.svg";
import twoSvgWhite from "../assets/img/navigation-icon-white.svg";
interface NavigationProps {
    namePage: string;
}
const Navigation: React.FC<NavigationProps> = ({namePage}) => (
  <div className="flex flex-col gap-5 max-sm:gap-[10px]">
    <div className="services__navigation mt-10 gap-[5px] max-[1070px]:mt-[92px]">
        <ol className="flex items-center gap-[6px]" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="/">
                    <span style={{color: namePage === "О нас" ? '#fff' : '#B3B3B3'}}
                          className="navigation-home text-[13px] leading-[150%]" itemProp="name"
                    >
                        Главная
                    </span>
                </a>
                <meta itemProp="position" content="1"/>
            </li>
            <li className="mt-[3px]">
                {namePage === "О нас" ? <img src={twoSvgWhite} alt=">" /> : <img src={twoSvg} alt=">" />}
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a itemProp="item" href="">
                    <span style={{color: namePage === "О нас" ? '#fff' : '#333'}}
                          className="text-[13px] leading-[150%] font-helveticaNeue" itemProp="name"
                    >
                        {namePage}
                    </span>
                </a>
                <meta itemProp="position" content="2"/>
            </li>
        </ol>
    </div>
      <div>
          <h1  style={{ fontSize: 'clamp(28px, 2.8vw, 40px)', color: namePage === "О нас" ? '#fff' : '#333' }}
               className="leading-[140%] max-sm:text-[28px]"
          >
              {namePage}
          </h1>
          <div style={{display: namePage === "О нас" ? 'none' : 'block'}} className="sm:hidden h-[1px]  bg-[#B3B3B3] mt-5"></div>
      </div>
  </div>
);

export default Navigation;
