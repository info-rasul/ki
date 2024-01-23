import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import QuoteImg from "../../assets/img/quote.svg";
import PersonCard from "../../components/PersonCard";

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
      <PersonCard />
    </div>
);

export default QuoteHome;
