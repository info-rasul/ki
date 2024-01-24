import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import QuoteImg from "../../assets/img/quote.svg";
import PersonCardImg from "../../assets/img/quote-media.svg";

const QuoteHome: FunctionComponent = () => (
    <div className="flex flex-col items-center justify-center border-t-[1px] border-b-[1px] border-[#B3B3B3] pt-[60px] pb-[58px]  max-sm:pt-[35px] max-sm:pb-[34px] max-sm:gap-y-[25px]">
      <img
          className="mt-1.5 max-sm:w-[32px] max-sm:h-[24px]"
          src={QuoteImg}
          alt="Иконка"
      />
      <p className="text-center text-[25px] mt-[48px] mb-[40px] tracking-[.1px]  max-sm:text-[18px] leading-[150%] max-sm:mt-[2px] max-sm:mb-0">
        «Мы обязаны помнить об исконных российских традициях справедливости{" "}
        <br className="max-lg:hidden" />и законности, помнить о том, что
        диктатура закона — это единственная <br className="max-lg:hidden" />
        разновидность диктатуры, которой мы обязаны подчиняться».
      </p>
        <div className="flex py-[9px] pl-[9px] pr-[20px] tracking-[-0.5px] items-center gap-[15px] rounded-[40px] bg-[#F8F8F8] border-[1px] border-[#FFFFFF]/[.20] max-sm:py-[7px] max-sm:pl-[7px]">
            <img className="max-sm:w-[28px] max-sm:h-[28px] rounded-full" src={PersonCardImg} alt="Изображение для карточки пользователя" />
            <p className="font-semibold text-[15px] max-sm:text-[13px]">В.В.Путин</p>
        </div>
    </div>
);

export default QuoteHome;
