import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import oneSvg from "../../assets/img/quote.svg";
import twoSvg from "../../assets/img/quote-media.png";
import PersonCard from "../../components/PersonCard";
import PersonCardDesc from "../PersonCardDesc";
const QuoteArticle: FunctionComponent = () => (
  <Fragment>
    <div className="flex flex-col gap-y-10 items-center justify-center border-t-[1px] border-b-[1px] border-[#B3B3B3] py-10 my-20 max-md:my-10 max-md:pt-[36px] max-md:pb-[33px] max-md:gap-y-[23px] max-sm:mb-[42px] max-sm:mt-[39px]">
      <img
        className="mt-1.5 w-[48px] h-[36px] max-md:w-[32px] max-md:h-[24px] max-md:mt-[2px]"
        src={oneSvg}
        alt="Изображение"
      />
      <p className="text-center text-[25px] mt-[6px] max-md:text-[18px] leading-[150%] max-sm:mt-[8px]">
        Об устойчивости ценового давления свидетельствует динамика
       &nbsp;<br className="max-lg:hidden" /> базовой инфляции. Этот показатель
        четыре месяца подряд растет&nbsp;<br className="max-lg:hidden" /> темпами
        выше 10 процентов в пересчете на год
      </p>
      <div className="flex flex-col gap-[13px] mt-[3px] max-sm:mt-0 max-sm:gap-[9px]">
        <div className="mainArticle__user flex items-center	gap-4 rounded-full py-[9px] pl-[9px] pr-[20px] bg-[#F8F8F8]">
          <img
            className="max-md:w-[28px] h-[28px]"
            src={twoSvg}
            alt="Ellipse10"
          />
          <p className="max-md:text-[13px]">В.В.Путин</p>
        </div>
        <PersonCardDesc />
      </div>
    </div>
  </Fragment>
);

export default QuoteArticle;
