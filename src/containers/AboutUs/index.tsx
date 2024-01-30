// @ts-ignore
import type { FunctionComponent } from "react";
import React, {Fragment, useEffect, useRef, useState} from "react";
import {Navigation, MetaInfo} from "../../components";
import {getRouteMetaInfo} from "../../config/routes.config";
import Header from "../../components/Header";
import aboutUsServicesCardData from "../../hooks/aboutUsServicesCardData";
import AboutUsServicesCard from "./component/about-us-services-card/AboutUsServicesCard";
import CardImg1 from "../../assets/img/about-us-card1.jpg";
import CardImg2 from "../../assets/img/about-us-card2.jpg";
import CardImg3 from "../../assets/img/about-us-card3.jpg";
import SliderNavigation from "../../components/slider-navigation/sliderNavigation";
import AboutUsQuote from "../../components/quote/AboutUsQuote";

const AboutUs: FunctionComponent = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrolled = scrollContainerRef.current.scrollLeft;
      const totalWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const percentage = (scrolled / totalWidth) * 100;
      setScrollPercentage(percentage);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  /*onScroll={handleScroll} ref={scrollContainerRef}*/
  const { isDarkMenu } = getRouteMetaInfo("AboutUs");
  const darkMenu = !!isDarkMenu;
  const namePage = "О нас"
  return (
      <Fragment>
        <MetaInfo {...getRouteMetaInfo("AboutUs")} />
        <Header isDarMenu={darkMenu} />
        <div className="container max-[1080px]:px-[16px]">
          <div className="overflow-x-hidden">
            <Navigation namePage={namePage} />
            <div className="flex justify-between mt-20 max-[1000px]:flex-col max-sm:w-full max-sm:mt-10">
              <h2 style={{ fontSize: 'clamp(24px, 2.1vw, 30px)' }} className="leading-[140%] tracking-[-0.3px] max-sm:text-[24px] max-sm:tracking-normal">
                Наблюдательный совет <br /> Комитета информации
              </h2>
              <p className="leading-[170%] w-[545px] max-[1000px]:mt-[30px] max-sm:text-[15px] max-sm:leading-[160%] max-sm:w-full">
                Наш наблюдательный совет, сотрудники и партнеры — эксперты
                с более чем 20-летним опытом работы в сфере безопасности
                и юридической защиты бизнеса. Благодаря этому мы решаем сложные задачи,
                от которых отказываются другие юридические компании.
              </p>
            </div>
            <div onScroll={handleScroll} ref={scrollContainerRef}
                 className="slider-scroll flex gap-10 mb-20 mt-[120px] max-lg:mt-[60px] max-lg:gap-[10px] max-lg:mb-[29px] max-md:flex max-md:gap-[10px] max-md:overflow-x-auto max-md:w-screen max-md:pr-[16px] ">
              <div className="flex flex-col gap-[20px] max-sm:gap-[15px]">
                <img className="max-sm:h-[320px] object-cover" src={CardImg1} alt="Изображение" />
                <div className="flex flex-col gap-[10px] max-sm:gap-[5px]">
                  <p className="text-[20px] text-black leading-[145%] max-sm:text-[18px] max-sm:tracking-[-0.18px] max-sm:leading-[150%]">Сергей Гаврилов</p>
                  <p className="text-[15px] text-black leading-[170%] max-md:w-[320px]">
                    Эксперт в области юриспруденции
                  </p>
                </div>
              </div>
              <div className=" flex flex-col gap-[20px] max-sm:gap-[15px]">
                <img className="max-sm:h-[320px] object-cover" src={CardImg2} alt="Изображение" />
                <div className="flex flex-col gap-[10px] max-sm:gap-[5px]">
                  <p className="text-[20px] text-black leading-[145%] max-sm:text-[18px] max-sm:tracking-[-0.18px] max-sm:leading-[150%]">Николай Поднебесный</p>
                  <p className="text-[15px] text-black leading-[170%] max-md:w-[320px]">
                    Эксперт в области юриспруденции
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] max-sm:gap-[15px]">
                <img className="max-sm:h-[320px] object-cover" src={CardImg3} alt="Изображение" />
                <div className="flex flex-col gap-[10px] max-sm:gap-[5px]">
                  <p className="text-[20px] text-black leading-[145%] max-sm:text-[18px] max-sm:tracking-[-0.18px] max-sm:leading-[150%]">Альберт Нечаев</p>
                  <p className="text-[15px] text-black leading-[170%] max-md:w-[320px]">
                    Эксперт в области юриспруденции
                  </p>
                </div>
              </div>
            </div>
            <div className="md:hidden w-full flex justify-center mt-[30px]">
              <SliderNavigation scrollPercentage={scrollPercentage}/>
            </div>
            <div className="mt-[120px] max-sm:mt-0">
              <h2 style={{ fontSize: 'clamp(24px, 2.1vw, 30px)' }} className="leading-[140%] tracking-[-0.3px] mt-20 max-lg:mt-[60px] max-lg:mb-[30px] max-sm:text-[24px] max-sm:tracking-normal">
                Мы в цифрах
              </h2>
              <div className="flex gap-10 mt-[60px] max-sm:flex-col max-lg:gap-[15px] max-sm:mt-0">
                {
                  // @ts-ignore
                  aboutUsServicesCardData.map((item, index) => {
                    return <AboutUsServicesCard key={index} title={item.title} desc={item.desc} animation={item.animation}/>

                  })
                }
              </div>
            </div>
            <div className="mt-[160px] mb-[158px] max-lg:my-[80px]">
              <h2 style={{ fontSize: 'clamp(24px, 2.1vw, 30px)' }} className="leading-[140%] tracking-[-0.3px] mt-40 mb-10 max-lg:mt-0 max-sm:text-[24px] max-sm:leading-[140%] max-sm:mb-[30px] max-sm:tracking-0">
                Как мы помогаем <br className="sm:hidden"/> нашим клиентам
              </h2>
              <div className="flex gap-20 mt-[60px] max-lg:mt-[30px] max-lg:flex-col max-lg:gap-[25px]">
                <div className="flex flex-col gap-[20px] max-lg:gap-[25px]">
                  <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                    Рынок был готов к таким действиям Центробанка, хотя в последнее время его решения было сложно
                    предсказать. Банки начали заранее закладыватьужесточение ДКП в ставки по вкладам и,
                    судя по комментариям, были готовы скорее увидеть 17 процентов, чем 15.
                  </p>
                  <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                    На этом фоне рубль незначительно укрепился, вновь преодолев отметку в 90 рублей за доллар,
                    однако высокая волатильность в последние месяцы стала нормальной для российской валюты.
                    К тому же с учетом обязательных продаж валютной выручки и курсовых пошлин ставка перестала
                    играть ту роль в курсе рубля, что раньше.
                  </p>
                </div>
                <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                  Полтора месяца назад, во время предыдущего повышения ставки с 13 до 15 процентов,
                  большинство аналитиков ожидали, что ужесточение ДКП закончено. Ближе к 15 декабря
                  консенсусным стало мнение, что ЦБ придется повышать ставку, основной вопрос был только
                  в величине повышения — на один или два процентных пункта.
                </p>
              </div>
            </div>
            <div className="mb-20 max-lg:mb-[40px]">
              <AboutUsQuote/>
            </div>
          </div>
        </div>
      </Fragment>
  );
};

export default AboutUs;
