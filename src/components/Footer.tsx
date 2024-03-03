// @ts-nocheck
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

  const metrics = () => {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");


    ym(96484145, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });
  }

  setTimeout(() => {
    metrics();
  }, 1000);

    return (
  <Fragment>
    <footer className="footer flex flex-col pt-20 pb-10 bg-custom-gradient max-[1080px]:px-4 max-lg:hidden">
      <div className="container">
        <div className="">
          <div className="flex justify-between">
            <a href="/">
              <img className="h-[66px]" src={Logo} alt="Логотип" />
            </a>
            <div className="flex gap-[50px] max-w-[436px] mb-[3px] w-full" itemScope itemType="http://schema.org/Organization">
              <ul className="flex flex-col gap-[1.15em]">
                <li>
                  <a className="text-white leading-[145%]" href="/o-nas">О нас</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/uslugi">Услуги</a>
                </li>
                <li className="w-[140px]">
                  <a className="text-white leading-[145%]" href="/vopros-otvet">Вопросы и ответы</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/blog">Блог</a>
                </li>
                <li>
                  <a className="text-white leading-[145%]" href="/kontakty">Контакты</a>
                </li>
              </ul>
              <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <span className="text-white leading-[145%] [word-spacing:0.2px]">ММДЦ “Москва-Сити” <br /> Башня Федерация, </span>
                <span className="text-white leading-[145%] [word-spacing:0.2px]" itemProp="addressLocality">г. Москва</span>,
                <span className="text-white leading-[145%] [word-spacing:0.2px] block w-[247px]" itemProp="streetAddress">Пресненская наб. д. 12, офис 85</span>
              </div>
            </div>
          </div>
          <div>
            <div className="h-px bg-[#242D3E] mt-[75px]"></div>
            <div className="footer__link flex justify-between mt-10">
              <p className="text-white leading-[170%] [word-spacing:-1.85px] opacity-50">
                @ 2024 Комитет Информации
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
          <a href="/o-nas">О нас</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/uslugi">Услуги</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/vopros-otvet">Вопросы и ответы</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/blog">Блог</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/kontakty">Контакты</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
      </ul>
      <div className="h-px bg-[#242D3E] mt-[32px] w-full"></div>
      <div className="mt-[36px]" itemScope itemType="http://schema.org/Organization">
        <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <span className="text-white leading-[150%] text-[15px]" >ММДЦ “Москва-Сити” Башня Федерация,</span>
          <span className="text-white leading-[150%] text-[15px]" itemProp="addressLocality">г. Москва</span>,
          <span className="text-white leading-[150%] text-[15px]" itemProp="streetAddress">Пресненская наб. д. 12, офис 85</span>
        </div>
      </div>
      <div className="h-px bg-[#242D3E] mt-[35px] w-full"></div>
      <div className="footer__link flex flex-col gap-[10px] mt-[26px] opacity-50">
        <p className="text-white leading-[170%] tracking-[.1px] text-[13px]">
          @ 2024 Комитет Информации
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
    <noscript><div><img src="https://mc.yandex.ru/watch/96484145" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  </Fragment>
)};

export default Footer;
