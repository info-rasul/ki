import type { FunctionComponent } from "react";
import { Fragment } from "react";
import { ReactComponent as LogoSvg } from "../assets/img/logotip.svg";
import { ReactComponent as LogoMobileSvg } from "../assets/img/logotip-mobile.svg";
import oneSvg from "../assets/img/Frame1820.svg";
import twoSvg from "../assets/img/header__menu_line.svg";
import fourSvg from "../assets/img/Subtract-menu.svg";

import useScrollNavbar from "../hooks/useScrollNavbar";
import React from "react";

const Header: FunctionComponent = () => {
  useScrollNavbar();

  return (
    <Fragment>
      <header className="flex absolute py-8 px-20 max-[850px]:px-10 max-sm:hidden">
        <LogoSvg />
        <div className="flex items-center justify-center absolute w-screen mt-[27px] ml-[-81px] max-[1150px]:ml-[81px] max-[850px]:mt-[15px] max-[850px]:ml-[30px]">
          <ul className="header__menu flex text-center items-center mt-0.5 px-5 h-[50px] rounded-[25px] z-10 shadow-boxShadow fixed">
            <li>
              <a
                className="text-white px-[11px] text-[15px] font-medium leading-[150%] tracking-[.2px]"
                href="#"
              >
                О нас
              </a>
            </li>
            <li>
              <img className="px-[5px]" src={oneSvg} alt="Frame1820" />
            </li>
            <li>
              <a
                className="text-white px-[11px] text-[15px] font-medium leading-[150%] tracking-[.2px]"
                href="#"
              >
                Услуги
              </a>
            </li>
            <li>
              <img className="px-[5px]" src={twoSvg} alt="header__menu_line" />
            </li>
            <li>
              <a
                className="text-white px-[11px] text-[15px] font-medium leading-[150%] tracking-[.2px]"
                href="#"
              >
                Блог
              </a>
            </li>
            <li>
              <img className="px-[5px]" src={oneSvg} alt="Frame1820" />
            </li>
            <li>
              <a
                className="text-white px-[11px] text-[15px] font-medium leading-[150%] tracking-[.2px]"
                href="#"
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </header>
      <header className="sm:hidden absolute  overflow-x-hidden">
        <div className="flex flex-col z-10 fixed w-full">
          <div className="header__adaptive w-full flex justify-between items-center  px-4 pt-[18px] pb-4">
            <LogoMobileSvg />
            <div className="header__menu_btn flex flex-col gap-[5px] px-[10px] py-[15.5px] rounded-full bg-white/[.04]">
              <div className="header__menu_btn_line1 h-[2px] w-[20px] bg-white"></div>
              <div className="header__menu_btn_line2 h-[2px] w-[20px] bg-white"></div>
            </div>
          </div>
          <div className="header__menu_adaptive flex flex-col relative right-[-640px] px-4 bg-white w-screen pb-[25px]">
            <div className="h-[1px] bg-[#B3B3B3]"></div>
            <ul className="flex flex-col gap-[26px] pt-[39px] pb-[21px]">
              <li className="flex justify-between items-center">
                <a
                  className="text-black text-[15px] font-medium leading-[150%] tracking-[.2px]"
                  href="#"
                >
                  О нас
                </a>
                <img src={fourSvg} alt="Subtract-menu" />
              </li>
              <li className="flex justify-between items-center">
                <a
                  className="text-black text-[15px] font-medium leading-[150%] tracking-[.2px]"
                  href="#"
                >
                  Услуги
                </a>
                <img src={fourSvg} alt="Subtract-menu" />
              </li>
              <li className="flex justify-between items-center">
                <a
                  className="text-black text-[15px] font-medium leading-[150%] tracking-[.2px]"
                  href="#"
                >
                  Блог
                </a>
                <img src={fourSvg} alt="Subtract-menu" />
              </li>
              <li className="flex justify-between items-center">
                <a
                  className="text-black text-[15px] font-medium leading-[150%] tracking-[.2px]"
                  href="#"
                >
                  Контакты
                </a>
                <img src={fourSvg} alt="Subtract-menu" />
              </li>
            </ul>
            <div className="h-[1px]  bg-[#B3B3B3] mt-4"></div>
            <div className="flex flex-col gap-4 mt-[35px]">
              <div className="flex flex-col gap-[3px]">
                <p className="text-[13px] leading-[145%] opacity-60">Тел.:</p>
                <a
                  className="text-[16px] leading-[145%]"
                  href="tel:+74950883333"
                >
                  +7 495 088-33-33
                </a>
              </div>
              <div className="flex flex-col gap-[3px]">
                <p className="text-[13px] leading-[145%] opacity-60">Факс:</p>
                <a
                  className="text-[16px] leading-[145%]"
                  href="tel:+74955325364"
                >
                  +7 495 532-53-64
                </a>
              </div>
              <div className="flex flex-col gap-[3px]">
                <p className="text-[13px] leading-[145%] opacity-60">
                  Эл. почта:
                </p>
                <a
                  href="mailto:info@ki112.ru"
                  className="text-[16px] leading-[145%]"
                >
                  info@ki112.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
