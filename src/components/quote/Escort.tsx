import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import oneSvg from "../../assets/img/quote.svg";
import twoSvg from "../../assets/img/quote-media.png";

const EscortArticle: FunctionComponent = () => (
  <Fragment>
    <div className="flex flex-col items-start justify-center bg-[#086c801a] w-[300px] p-[25px] gap-[25px]">
      <img className="w-[24px] h-[18px]" src={oneSvg} alt="Изображение" />
      <p className="text-start text-[15px] text-[#086C80] leading-[170%] tracking-[.2px]">
        «Мы обязаны помнить об исконных российских традициях справедливости
       &nbsp;<br />и законности, помнить о том, что диктатура закона — это
        единственная&nbsp;<br />
        разновидность диктатуры, которой мы обязаны подчиняться»
      </p>
      <div className="mainArticle__user flex items-center	gap-4 rounded-full py-[9px] pl-[9px] pr-[20px] bg-[#F8F8F8]">
        <img src={twoSvg} alt="Ellipse10" />
        <p>В.В.Путин</p>
      </div>
    </div>
  </Fragment>
);

export default EscortArticle;
