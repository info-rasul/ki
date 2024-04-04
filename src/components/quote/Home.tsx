import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import QuoteImg from "../../assets/img/quote.svg";
import PersonCardImg from "../../assets/img/putin.png";

const QuoteHome: FunctionComponent = () => (
    <div className="flex flex-col gap-10 items-center justify-center border-t-[1px] border-b-[1px] border-[#B3B3B3] py-[60px]  max-sm:py-[35px] max-sm:gap-y-[25px]">
      <img
          className="py-[7px] max-sm:py-[4px] max-sm:w-[32px] max-sm:h-[32px]"
          src={QuoteImg}
          alt="Иконка"
      />
      <div className="text-center text-homeQuote tracking-[-0.25px] leading-[148%] max-sm:leading-[150%] max-sm:text-[18px] max-sm:tracking-[-0.18px] max-sm:w-[343px]">
        «Мы обязаны помнить об исконных российских традициях справедливости
       &nbsp;<br className="max-lg:hidden" />и законности, помнить о том, что
        диктатура закона — это единственная&nbsp;<br className="max-lg:hidden" />
          разновидность диктатуры, которой мы обязаны подчиняться»
      </div>
        <div className="flex py-[9px] pl-[9px] pr-[20px] items-center gap-[15px] rounded-[40px] bg-[#F8F8F8] border-[1px] border-[#FFFFFF]/[.20] max-sm:py-[5px] max-sm:pl-[5px]">
            <img className="w-[32px] rounded-full max-sm:w-[28px] max-sm:h-[28px]" src={PersonCardImg} alt="Путин" />
            <p className="text-[15px] leading-[20px] max-sm:text-[13px]">В.В.Путин</p>
        </div>
    </div>
);

export default QuoteHome;
