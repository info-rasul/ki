import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import {Navigation, SubTitle, Card, MetaInfo} from "../../components";
import QuoteHome from "../../components/quote/Home";
import InformationCard from "../../components/information-card/About";
import {getRouteMetaInfo} from "../../config/routes.config";

const AboutUs: FunctionComponent = () => {
  const namePage = "О нас"
  return (
      <Fragment>
        <MetaInfo {...getRouteMetaInfo("AboutUs")} />
        <div className="container">
          <div className="w-[1440px] px-20 pt-[120px]">
            <Navigation namePage={namePage}/>
            <div className="flex justify-between">
              <h2 className="text-[30px] leading-[142%] tracking-[.02px] mt-20 mb-10">
                Наблюдательный совет <br /> Комитета информации
              </h2>
              <p className="leading-[170%] mt-20 w-[545px]">
                Наш наблюдательный совет, сотрудники и партнеры — эксперты
                с более чем 20-летним опытом работы в сфере безопасности
                и юридической защиты бизнеса. Благодаря этому мы решаем сложные задачи,
                от которых отказываются другие юридические компании.
              </p>
            </div>
            <div className="flex gap-10 mb-20 mt-[103px] ">
              <Card/>
              <Card/>
              <Card/>
            </div>
            <div className="mt-[120px]">
              <h2 className="text-[30px] leading-[142%] tracking-[.02px] mt-20 mb-10">
                Мы в цифрах
              </h2>
              <div className="flex gap-10 mt-[60px]">
                <InformationCard/>
                <InformationCard/>
                <InformationCard/>
              </div>
            </div>
            <div className="my-[160px]">
              <h2 className="text-[30px] leading-[142%] tracking-[.02px] mt-20 mb-10">
                Как мы помогаем нашим клиентам
              </h2>
              <div className="flex gap-20 mt-[60px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="leading-[165%] tracking-[0.15px]">
                    Рынок был готов к таким действиям Центробанка, хотя в последнее время его решения было сложно
                    предсказать. Банки начали заранее закладыватьужесточение ДКП в ставки по вкладам и,
                    судя по комментариям, были готовы скорее увидеть 17 процентов, чем 15.
                  </p>
                  <p className="leading-[170%] tracking-[0.15px]">
                    На этом фоне рубль незначительно укрепился, вновь преодолев отметку в 90 рублей за доллар,
                    однако высокая волатильность в последние месяцы стала нормальной для российской валюты.
                    К тому же с учетом обязательных продаж валютной выручки и курсовых пошлин ставка перестала
                    играть ту роль в курсе рубля, что раньше.
                  </p>
                </div>
                <p className="leading-[166%] tracking-[0.15px]">
                  Полтора месяца назад, во время предыдущего повышения ставки с 13 до 15 процентов,
                  большинство аналитиков ожидали, что ужесточение ДКП закончено. Ближе к 15 декабря
                  консенсусным стало мнение, что ЦБ придется повышать ставку, основной вопрос был только
                  в величине повышения — на один или два процентных пункта.
                </p>
              </div>
            </div>
            <div className="mb-20">
              <QuoteHome/>
            </div>
          </div>
        </div>
      </Fragment>
  );
};

export default AboutUs;
