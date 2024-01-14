import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import oneSvg from "../../assets/img/gobbler.png";
import twoSvg from "../../assets/img/Ellipse10.png";
import PersonCard from "../../components/PersonCard";
const QuoteArticle: FunctionComponent = () => (
  <Fragment>
    <div className="flex flex-col gap-y-10 items-center justify-center border-t-[1px] border-b-[1px] border-[#B3B3B3] py-10 my-20 max-md:my-10 max-md:pt-[35px] max-md:pb-[33px] max-md:gap-y-[23px]">
      <img
        className="mt-1.5 w-[48px] h-[36px] max-md:w-[32px] max-md:h-[24px] max-md:mt-[2px]"
        src={oneSvg}
        alt="gobbler"
      />
      <p className="text-center text-[25px] mt-2 tracking-[.1px] max-md:text-[18px] leading-[150%]">
        Об устойчивости ценового давления свидетельствует динамика{" "}
        <br className="max-lg:hidden" /> базовой инфляции. Этот показатель
        четыре месяца подряд растет <br className="max-lg:hidden" /> темпами
        выше 10 процентов в пересчете на год
      </p>
      <div className="flex flex-col gap-2.5">
        <div className="mainArticle__user flex items-center	gap-4 rounded-full py-[9px] pl-[9px] pr-[20px] bg-[#F8F8F8]">
          <img
            className="max-md:w-[28px] h-[28px]"
            src={twoSvg}
            alt="Ellipse10"
          />
          <p className="max-md:text-[13px]">В.В.Путин</p>
        </div>
        <PersonCard />
      </div>
    </div>
  </Fragment>
);

export default QuoteArticle;
