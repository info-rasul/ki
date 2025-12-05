import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import oneSvg from "../assets/img/logo.svg";
import twoSvg from "../assets/img/footer-icon.png";
const Footer: FunctionComponent = () => (
  <Fragment>
    <footer className="footer flex flex-col px-20 pt-20 pb-10 bg-custom-gradient max-lg:hidden">
      <div className="flex justify-between">
        <img className="h-[65px]" src={oneSvg} alt="logo" />
        <div className="footer__list flex justify-between max-w-[436px] w-full">
          <ul className="flex flex-col gap-5">
            <li className="text-white leading-[145%]">О нас</li>
            <li className="text-white leading-[145%]">Услуги</li>
            <li className="text-white leading-[145%]">Блог</li>
            <li className="text-white leading-[145%]">Контакты</li>
          </ul>
          <p className="text-white leading-[145%] tracking-[0.38px]">
              Dubai Silicon Oasis&nbsp;<br />
              Digital Park, Building A1, Office 405&nbsp;<br />
              Dubai, UAE — P.O.Box 67473
          </p>
        </div>
      </div>
      <div className="h-px bg-[#242D3E] mt-[35px]"></div>
      <div className="footer__link flex justify-between mt-10 opacity-50">
        <p className="text-white leading-[170%] tracking-[.3px]">
          @ 2024-2026 Комитет Информации
        </p>
        <p className="text-white leading-[170%] tracking-[.3px]">
          Политика конфиденциальности
        </p>
      </div>
    </footer>
    <footer className="footer lg:hidden flex flex-col items-start bg-custom-gradient max-sm:pt-10 px-4 pb-[25px]">
      <img
        className="h-[65px] max-sm:h-[40px] w-[155px]"
        src={oneSvg}
        alt="logo"
      />
      <div className="h-px bg-[#242D3E] my-[35px] w-full"></div>
      <ul className="flex flex-col gap-[25px] w-full">
        <li className="text-white leading-[145%] flex justify-between items-center">
          <a href="#">О нас</a>
          <img src={twoSvg} alt="footer-icon" />
        </li>
        <li className="text-white leading-[145%] flex justify-between items-center">
          <a href="#">Услуги</a>
          <img src={twoSvg} alt="footer-icon" />
        </li>
        <li className="text-white leading-[145%] flex justify-between items-center">
          <a href="#">Блог</a>
          <img src={twoSvg} alt="footer-icon" />
        </li>
        <li className="text-white leading-[145%] flex justify-between items-center">
          <a href="#">Контакты</a>
          <img src={twoSvg} alt="footer-icon" />
        </li>
      </ul>
      <div className="h-px bg-[#242D3E] mt-[35px] w-full"></div>
      <p className="text-white leading-[150%] tracking-[0.38px] mt-[35px] text-[15px]">
        ММДЦ “Москва-Сити”&nbsp;<br />
        Башня Федерация, г. Москва&nbsp;<br />
        Пресненская наб. д. 12, офис
      </p>
      <div className="h-px bg-[#242D3E] mt-[36px] w-full"></div>
      <div className="footer__link flex flex-col gap-[10px] mt-[25px] opacity-50">
        <p className="text-white leading-[170%] tracking-[.1px] text-[13px]">
          @ 2024-2026 Комитет Информации
        </p>
        <p className="text-white leading-[170%] tracking-[.1px] text-[13px]">
          Политика конфиденциальности
        </p>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
