import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import Logo from "../assets/img/logo.svg";
import FooterIcon from "../assets/img/footer-icon.png";

const Footer: FunctionComponent = () => (
  <Fragment>
    <footer className="footer flex flex-col pt-20 pb-10 bg-custom-gradient max-lg:hidden">
      <div className="container">
        <div className="px-20">
          <div className="flex justify-between">
            <img className="h-[65px]" src={Logo} alt="Логотип" />
            <div className="flex justify-between max-w-[436px] w-full">
              <ul className="flex flex-col gap-5">
                <li>
                  <a className="text-white leading-[145%]" href="/about-us">О нас</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/services">Услуги</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/blog">Блог</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/contacts">Контакты</a>
                </li>
              </ul>
              <p className="text-white leading-[145%] tracking-[.1px]">
                ММДЦ “Москва-Сити” <br />
                Башня Федерация, г. Москва <br />
                Пресненская наб. д. 12, офис 85
              </p>
            </div>
          </div>
          <div>
            <div className="h-px bg-[#242D3E] mt-[75px]"></div>
            <div className="footer__link flex justify-between mt-10 opacity-50">
              <p className="text-white leading-[170%] tracking-[.3px]">
                @ 2023 Комитет Информации
              </p>
              <p className="text-white leading-[170%] tracking-[.3px]">
                Политика конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <footer className="footer lg:hidden flex flex-col items-start bg-custom-gradient max-sm:pt-10 px-4 pb-[25px]">
      <img
        className="h-[65px] max-sm:h-[40px] w-[155px]"
        src={Logo}
        alt="Логотип"
      />
      <div className="h-px bg-[#242D3E] my-[35px] w-full"></div>
      <ul className="flex flex-col gap-[25px] w-full">
        <li className="text-white leading-[145%] flex justify-between items-center">
          <a href="/about-us">О нас</a>
          <img src={FooterIcon} alt="Иконка для компонента footer" />
        </li>
        <li className="text-white leading-[145%] flex justify-between items-center">
          <a href="/services">Услуги</a>
          <img src={FooterIcon} alt="Иконка для компонента footer" />
        </li>
        <li className="text-white leading-[145%] flex justify-between items-center">
          <a href="/blog">Блог</a>
          <img src={FooterIcon} alt="Иконка для компонента footer" />
        </li>
        <li className="text-white leading-[145%] flex justify-between items-center">
          <a href="/contacts">Контакты</a>
          <img src={FooterIcon} alt="Иконка для компонента footer" />
        </li>
      </ul>
      <div className="h-px bg-[#242D3E] mt-[35px] w-full"></div>
      <p className="text-white leading-[150%] tracking-[0.38px] mt-[35px] text-[15px]">
        ММДЦ “Москва-Сити” <br />
        Башня Федерация, г. Москва <br />
        Пресненская наб. д. 12, офис
      </p>
      <div className="h-px bg-[#242D3E] mt-[36px] w-full"></div>
      <div className="footer__link flex flex-col gap-[10px] mt-[25px] opacity-50">
        <p className="text-white leading-[170%] tracking-[.1px] text-[13px]">
          @ 2023 Комитет Информации
        </p>
        <p className="text-white leading-[170%] tracking-[.1px] text-[13px]">
          Политика конфиденциальности
        </p>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
