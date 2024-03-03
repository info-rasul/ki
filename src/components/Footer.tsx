import type { FunctionComponent } from "react";
import React, {Fragment, useState} from "react";
import Logo from "../assets/img/logo.svg";
import FooterIcon from "../assets/img/footer-icon.png";
import DownButton from "../assets/img/down-button.svg";

const Footer: FunctionComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return (
  <Fragment>
    <footer className="footer flex flex-col pt-20 pb-10 bg-custom-gradient max-[1080px]:px-4 max-lg:hidden">
      <div className="container">
        <div className="">
          <div className="flex justify-between">
            <a href="/">
              <img className="h-[66px]" src={Logo} alt="Логотип" />
            </a>
            <div className="flex justify-between max-w-[436px] mb-[3px] w-full">
              <ul className="flex flex-col gap-[1.15em]">
                <li>
                  <a className="text-white leading-[145%]" href="/about-us">О нас</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/services">Услуги</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/news">Блог</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/contacts">Контакты</a>
                </li>
              </ul>
              <p className="text-white leading-[145%] [word-spacing:0.2px]">
                <span className="tracking-[.3px]">ММДЦ “Москва-Сити”</span> <br />
                Башня Федерация, г. Москва <br />
                Пресненская наб. д. 12, офис 85
              </p>
            </div>
          </div>
          <div>
            <div className="h-px bg-[#242D3E] mt-[75px]"></div>
            <div className="footer__link flex justify-between mt-10">
              <p className="text-white leading-[170%] [word-spacing:-1.85px] opacity-50">
                @ 2023 Комитет Информации
              </p>
              <div className="flex">
                <p className="text-white leading-[170%] [word-spacing:-1.85px] opacity-50">
                  Политика конфиденциальности
                </p>
                <button onClick={scrollToTop}>
                  <img className="down-button max-sm:w-[42px] max-sm:h-[42px] absolute right-[20px] mt-[-70px] transform rotate-180	" src={DownButton} alt="Кнопка для прокрутки страницы вниз"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <footer className="footer lg:hidden flex flex-col items-start bg-custom-gradient max-sm:pt-10 px-4">
      <a href="/">
        <img
            className="h-[65px] max-sm:h-[40px] w-[155px]"
            src={Logo}
            alt="Логотип"
            width="155"
            height="40"
        />
      </a>
      <div className="h-px bg-[#242D3E] my-[35px] w-full"></div>
      <ul className="flex flex-col gap-[25px] w-full">
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/about-us">О нас</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/services">Услуги</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/news">Блог</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/contacts">Контакты</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
      </ul>
      <div className="h-px bg-[#242D3E] mt-[32px] w-full"></div>
      <p className="text-white leading-[150%] mt-[36px] text-[15px]">
        ММДЦ “Москва-Сити” <br />
        Башня Федерация, г. Москва <br />
        Пресненская наб. д. 12, офис 85
      </p>
      <div className="h-px bg-[#242D3E] mt-[35px] w-full"></div>
      <div className="footer__link flex flex-col gap-[10px] mt-[26px] opacity-50">
        <p className="text-white leading-[170%] tracking-[.1px] text-[13px]">
          @ 2023 Комитет Информации
        </p>
        <p className="text-white leading-[170%] tracking-[.1px] text-[13px]">
          Политика конфиденциальности
        </p>
      </div>
      <div>
        <button onClick={scrollToTop}>
          <img className="down-button max-sm:w-[42px] max-sm:h-[42px] absolute right-[30px] mt-[-60px] transform rotate-180	" src={DownButton} alt="Кнопка для прокрутки страницы вниз"/>
        </button>
      </div>
    </footer>
  </Fragment>
)};

export default Footer;
