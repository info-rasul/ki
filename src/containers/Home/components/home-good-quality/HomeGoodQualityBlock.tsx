import type { FunctionComponent } from "react";
import React, { Fragment } from "react";

const HomeGoodQualityBlock: FunctionComponent = () => (
  <Fragment>
    <div className="flex flex-col items-start gap-[30px] pt-[25px] pb-[30px] px-[30px] bg-[#F2F2F2] h-[319px] min-[1420px]:w-[410.666px]  max-[1420px]:gap-[15px] max-[1420px]:h-auto w-full">
      <h3 className="text-[25px] font-medium leading-[140%]">Честность</h3>
      <p className="text-[16px] tracking-[0.2px]  leading-[170%]">
        Соблюдаем Золотое Правило во всем, поступать честно и правильно. Держим
        свои обещания, не обещаем то, что невозможно реализовать. Честно говорим
        обо всех обстоятельствах, которых не удастся избежать.
      </p>
    </div>
  </Fragment>
);

export default HomeGoodQualityBlock;
