import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import {Navigation, SubTitle, Card, MetaInfo} from "../../components";
import QuoteHome from "../../components/quote/Home";
import {getRouteMetaInfo} from "../../config/routes.config";
import oneSvg from "../../assets/img/frame-1.svg";
import Header from "../../components/Header";

const AboutUs: FunctionComponent = () => {
  const namePage = "О нас"
  return (
      <Fragment>
        <MetaInfo {...getRouteMetaInfo("AboutUs")} />
        <Header />
        <div className="container">
          <div className="pt-[120px] max-lg:px-[16px] max-sm:pt-[53px]">
            <Navigation namePage={namePage}/>
            <div className="flex justify-between max-[1100px]:flex-col max-sm:w-full">
              <h2 className="text-[30px] leading-[142%] tracking-[.02px] mt-20 mb-10 max-[1100px]:mt-10 max-[1100px]:mb-[30px] max-sm:text-[24px] max-sm:leading-[140%]">
                Наблюдательный совет <br /> Комитета информации
              </h2>
              <p className="leading-[170%] mt-20 w-[545px] max-[1100px]:mt-0 max-sm:text-[15px] max-sm:leading-[160%] max-sm:w-full">
                Наш наблюдательный совет, сотрудники и партнеры — эксперты
                с более чем 20-летним опытом работы в сфере безопасности
                и юридической защиты бизнеса. Благодаря этому мы решаем сложные задачи,
                от которых отказываются другие юридические компании.
              </p>
            </div>
            <div className="flex gap-10 mb-20 mt-[103px] max-lg:mt-[60px] max-lg:gap-[10px] max-lg:mb-[29px]">
              <Card/>
              {/*md*/}
              <Card/>
              <Card/>
            </div>
            <div className="md:hidden w-full flex justify-center">
              <div className="w-[14px] h-[14px] bg-black"></div>
            </div>
            <div className="mt-[120px] max-sm:mt-0">
              <h2 className="text-[30px] leading-[142%] tracking-[.02px] mt-20 mb-10 max-lg:mt-[60px] max-lg:mb-[30px] max-sm:text-[24px] max-sm:leading-[140%]">
                Мы в цифрах
              </h2>
              <div className="flex gap-10 mt-[60px] max-lg:flex-col max-lg:gap-[15px] max-sm:mt-0">
                <div className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[59px] w-[630px] max-lg:p-[25px] max-lg:gap-[43px] max-sm:w-full">
                  <img className="w-[100px] h-[100px] max-lg:w-[79px] max-lg:h-[79px]" src={oneSvg} alt="Frame1" />
                  <div className="flex flex-col items-start gap-[20px] max-lg:gap-[16px]">
                    <h3 className="text-[25px] leading-[140%] tracking-[0.3px] max-sm:text-[18px] max-sm:leading-[130%]">646 млн</h3>
                    <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                      Столько денег было сэкономленное нашим клиентам
                    </p>
                  </div>
                </div>
                <div className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[59px] w-[630px] max-lg:p-[25px] max-lg:gap-[43px] max-sm:w-full">
                  <img className="w-[100px] h-[100px] max-lg:w-[79px] max-lg:h-[79px]" src={oneSvg} alt="Frame1" />
                  <div className="flex flex-col items-start gap-[20px] max-lg:gap-[16px]">
                    <h3 className="text-[25px] leading-[140%] tracking-[0.3px] max-sm:text-[18px] max-sm:leading-[130%]">646 млн</h3>
                    <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                      Столько денег было сэкономленное нашим клиентам
                    </p>
                  </div>
                </div>
                <div className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[59px] w-[630px] max-lg:p-[25px] max-lg:gap-[43px] max-sm:w-full">
                  <img className="w-[100px] h-[100px] max-lg:w-[79px] max-lg:h-[79px]" src={oneSvg} alt="Frame1" />
                  <div className="flex flex-col items-start gap-[20px] max-lg:gap-[16px]">
                    <h3 className="text-[25px] leading-[140%] tracking-[0.3px] max-sm:text-[18px] max-sm:leading-[130%]">646 млн</h3>
                    <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                      Столько денег было сэкономленное нашим клиентам
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-[160px] max-lg:my-[80px]">
              <h2 className="text-[30px] leading-[142%] tracking-[.02px] mt-20 mb-10 max-sm:text-[24px] max-sm:leading-[140%] max-sm:mb-[30px] max-sm:tracking-0">
                Как мы помогаем <br className="sm:hidden"/> нашим клиентам
              </h2>
              <div className="flex gap-20 mt-[60px] max-lg:mt-[30px] max-lg:flex-col max-lg:gap-[25px]">
                <div className="flex flex-col gap-[20px] max-lg:gap-[25px]">
                  <p className="leading-[165%] tracking-[0.15px] max-sm:text-[15px] max-sm:leading-[160%]">
                    Рынок был готов к таким действиям Центробанка, хотя в последнее время его решения было сложно
                    предсказать. Банки начали заранее закладыватьужесточение ДКП в ставки по вкладам и,
                    судя по комментариям, были готовы скорее увидеть 17 процентов, чем 15.
                  </p>
                  <p className="leading-[170%] tracking-[0.15px] max-sm:text-[15px] max-sm:leading-[160%]">
                    На этом фоне рубль незначительно укрепился, вновь преодолев отметку в 90 рублей за доллар,
                    однако высокая волатильность в последние месяцы стала нормальной для российской валюты.
                    К тому же с учетом обязательных продаж валютной выручки и курсовых пошлин ставка перестала
                    играть ту роль в курсе рубля, что раньше.
                  </p>
                </div>
                <p className="leading-[166%] tracking-[0.15px] max-sm:text-[15px] max-sm:leading-[160%]">
                  Полтора месяца назад, во время предыдущего повышения ставки с 13 до 15 процентов,
                  большинство аналитиков ожидали, что ужесточение ДКП закончено. Ближе к 15 декабря
                  консенсусным стало мнение, что ЦБ придется повышать ставку, основной вопрос был только
                  в величине повышения — на один или два процентных пункта.
                </p>
              </div>
            </div>
            <div className="mb-20 max-lg:mb-[36px]">
              <QuoteHome/>
            </div>
          </div>
        </div>
      </Fragment>
  );
};

export default AboutUs;
