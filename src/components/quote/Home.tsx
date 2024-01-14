import type { FunctionComponent } from "react";
import { Fragment } from "react";
import oneSvg from "../assets/img/gobbler.png";
import PersonCard from "../PersonCard";
import React from "react";

const QuoteHome: FunctionComponent = () => (
  <Fragment>
    <div className="flex flex-col gap-y-10 items-center justify-center border-t-[1px] border-b-[1px] border-[#B3B3B3] pt-[60px] pb-[58px]  max-sm:py-[35px] max-sm:gap-y-[25px]">
      <img
        className="mt-1.5 max-sm:w-[32px] h-[24px]"
        src={oneSvg}
        alt="gobbler"
      />
      <p className="text-center text-[25px] mt-2 tracking-[.1px]  max-sm:text-[18px] leading-[150%] max-sm:mt-[2px]">
        «Мы обязаны помнить об исконных российских традициях справедливости{" "}
        <br className="max-lg:hidden" />и законности, помнить о том, что
        диктатура закона — это единственная <br className="max-lg:hidden" />
        разновидность диктатуры, которой мы обязаны подчиняться».
      </p>
      <PersonCard />
    </div>
  </Fragment>
);

export default QuoteHome;
