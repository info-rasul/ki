// @ts-ignore
import type { FunctionComponent } from "react";
import React, {Fragment, useEffect, useRef, useState} from "react";
import {Navigation, MetaInfo} from "../../components";
import {getRouteMetaInfo} from "../../config/meta.config";
import Header from "../../components/Header";
import AboutUsQuote from "../../components/quote/AboutUsQuote";
// @ts-ignore
import videoBack1 from "../../assets/video/bck1.mp4";
import QRCodeServices from "../../components/qr-code/Services";
import HomeGoodQuality from "../Home/components/home-good-quality";
import AboutUsAdvantage from "./component/about-us-advantage/AboutUsAdvantage";
import QRCodeContacts from "../../components/qr-code/Contacts";

const AboutUs: FunctionComponent = () => {
  const { isDarkMenu } = getRouteMetaInfo("AboutUs");
  const darkMenu = !!isDarkMenu;
  const namePage = "О нас"

  return (
      <Fragment>
        <MetaInfo {...getRouteMetaInfo("AboutUs")} />
        <div className="video-back h-[410px] flex flex-col items-center">
            <video muted loop playsInline autoPlay id="aboutUsMyVideo">
                <source src={videoBack1} type="video/mp4" />
            </video>
          <Header isDarMenu={darkMenu} />
          <div className="container max-[1080px]:px-[16px] relative z-[1]">
              <Navigation namePage={namePage} />
              <p className="leading-[27.2px] mt-5 text-white">
                  Решение проблемных ситуаций защита малого и среднего&nbsp;<br className="max-[475px]:hidden"/>бизнеса от недобросовестных кредиторов и конкурентов
              </p>
          </div>
        </div>
        <div className=" max-[1080px]:px-[16px] relative bg-white">
          <div className="container">
            <div className="w-full flex justify-between pt-20 max-sm:pt-10 max-xl:flex-col max-xl:gap-[36px]">
                <div className="flex flex-col gap-[36px] w-[845px] max-xl:w-full">
                    <p className="text-[20px] leading-[34px] max-sm:text-[18px] max-sm:leading-[30px]">
                        Комитет информации (КИ) — концептуальный консалтинговый бренд,
                        объединяющий экспертов с многолетним опытом работы в правоохранительных и надзорных органах,
                        а также в органах государственной власти Российской Федерации
                    </p>
                    <p className="text-[20px] leading-[34px] max-sm:text-[18px] max-sm:leading-[30px]">
                        Предоставляем комплексные услуги в области банкротства, защиты от субсидиарной ответственности,
                        защиты от взыскания долгов, защиты от недобросовестной конкуренции и от необоснованных
                        претензий госорганов (в том числе и от уголовных преследований), разрешение корпоративных
                        споров, сделок слияния и поглощения  (М&А), управления проблемными активами и форензика.
                    </p>
                    <div style={{borderLeft: '4px solid var(--700, #086C80)'}}>
                        <p className="leading-[27.2px] pl-[15px]">
                            Мы не мыслим шаблонно! Находим не рискованные, а юридически&nbsp;<br className="max-[570px]:hidden"/>законные способы сохранить
                            Ваш бизнес в период турбулентности&nbsp;<br className="max-[570px]:hidden"/>надвигающего кризиса на внутренних и внешних рынках.
                        </p>
                    </div>
                </div>
                <div className="max-xl:hidden">
                    <QRCodeServices />
                </div>
                <div className="xl:hidden">
                    <QRCodeContacts/>
                </div>
            </div>
            <div className="my-[160px] max-lg:mb-[40px] max-[800px]:my-20">
              <AboutUsQuote/>
            </div>
              <HomeGoodQuality />
              <AboutUsAdvantage />
          </div>
        </div>
      </Fragment>
  );
};

export default AboutUs;
