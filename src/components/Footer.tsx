// @ts-nocheck
import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import Logo from "../assets/img/logo.svg";
import FooterIcon from "../assets/img/footer-icon.png";
import DownButton from "../assets/img/down-button.svg";
import PhoneIcon from "../assets/img/footer-phone.svg";
import GmailIcon from "../assets/img/footer-gmail.svg";

interface FooterProps {
  data?: boolean;
}
const Footer: React.FC<FooterProps> = ({data}) => {
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
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);})
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
  }, 3000);



    return (
  <Fragment>
      <footer className="footer flex flex-col pt-20 pb-10 bg-custom-gradient max-[1080px]:px-4 max-lg:hidden">
        <div className="container">
          <div className="">
            <div className="flex justify-between">
              <a href="/">
                <img className="h-[66px]" src={Logo} alt="Логотип" />
              </a>
              <div className="flex gap-[50px] max-w-[436px] mb-[3px] w-full">
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
                    <a className="text-white leading-[145%]" href="/news">Блог</a>
                  </li>
                  <li>
                    <a className="text-white leading-[145%]" href="/kontakty">Контакты</a>
                  </li>
                </ul>
                <div>
                  <div className="flex flex-col gap-[1.15em]">
                    <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                      <span className="text-white leading-[145%] [word-spacing:0.2px] whitespace-nowrap">Dubai Silicon Oasis&nbsp;</span><br />
                      <span className="text-white leading-[145%] [word-spacing:0.2px] whitespace-nowrap" itemProp="addressLocality">Digital Park, Building A1, Office 405&nbsp;</span><br />
                      <span className="text-white leading-[145%] [word-spacing:0.2px] whitespace-nowrap" itemProp="streetAddress">Dubai, UAE — P.O.Box 67473</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="h-px bg-[#242D3E] mt-[75px]"></div>
              <div className="footer__link flex justify-between mt-10">
                <p className="text-white leading-[170%] [word-spacing:-1.85px] opacity-50">
                  @ 2024-2026 <span itemProp="name">Комитет Информации</span>
                </p>
                <div className="flex">
                  <a className="text-white leading-[170%] [word-spacing:-1.85px] opacity-50" href="/privacy-policy">
                    Политика конфиденциальности
                  </a>
                  <button style={{display: data ? "block" : "none"}} onClick={scrollToTop}>
                    <img className="down-button max-sm:w-[42px] max-sm:h-[42px] absolute right-[20px] mt-[-70px] transform rotate-180	" src={DownButton} alt="Кнопка для прокрутки страницы вниз"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer pb-10 lg:hidden flex flex-col items-start bg-custom-gradient max-sm:pt-10 px-4">
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
          <a href="/news">Блог</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
        <li className="text-white leading-[151%] flex justify-between items-center">
          <a href="/kontakty">Контакты</a>
          <img src={FooterIcon} alt="Иконка" width="18" height="18" />
        </li>
      </ul>
      <div className="h-px bg-[#242D3E] mt-[32px] w-full"></div>
      <div>
        <div className="flex flex-col gap-[25px]">
          <div className="mt-[36px]" itemProp="address">
            <div itemScope itemType="http://schema.org/PostalAddress">
              <span className="text-white whitespace-nowrap leading-[150%] text-[15px]" >Dubai Silicon Oasis</span><br />
              <span className="text-white whitespace-nowrap leading-[150%] text-[15px]" itemProp="addressLocality">Digital Park, Building A1, Office 405</span><br />
              <span className="text-white whitespace-nowrap leading-[150%] text-[15px]" itemProp="streetAddress">Dubai, UAE — P.O.Box 67473</span>
            </div>
          </div>

          <div className="flex items-center gap-[10px]">
            <img src={GmailIcon} alt="gmail"/>
            <span className="text-white text-[16px] leading-[145%] cursor-pointer" itemProp="email">
              info@ki112.ru
            </span>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#242D3E] mt-[35px] w-full"></div>
      <div className="footer__link flex flex-col gap-[10px] mt-[26px] opacity-50">
        <p className="text-white leading-[170%] tracking-[.1px] text-[13px]">
          @ 2024-2026 Комитет Информации
        </p>
        <a className="text-white leading-[170%] tracking-[.1px] text-[13px]" href="/privacy-policy">
          Политика конфиденциальности
        </a>
      </div>
      <div>
        <button style={{display: data ? "block" : "none"}} onClick={scrollToTop}>
          <img className="down-button max-sm:w-[42px] max-sm:h-[42px] absolute right-[30px] mt-[-60px] transform rotate-180	" src={DownButton} alt="Кнопка для прокрутки страницы вниз"/>
        </button>
      </div>
    </footer>
      <noscript><div><img src="https://mc.yandex.ru/watch/96484145" style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
  </Fragment>
)};

export default Footer;
