import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import HomeGoodQualityBlock from "./HomeGoodQualityBlock";
import homeGoodQualityData from "../../../../hooks/homeGoodQualityData";

const HomeGoodQuality: FunctionComponent = () => (
  <Fragment>
      <div className="flex flex-col mt-[82px] gap-10 max-sm:mt-[59px]">
          <h2 className="text-[30px] leading-[140%] tracking-[-0.3px] max-sm:text-[24px]">Наши ценности</h2>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:gap-5 max-[400px]:flex max-[400px]:overflow-x-auto max-[400px]:hidden">
              {
                  homeGoodQualityData.map((item, index) => {
                      // @ts-ignore
                      return <HomeGoodQualityBlock key={index} title={item.title} desc={item.desc}/>

                  })
              }
          </div>
          <div className="min-[400px]:hidden flex flex-col items-start gap-[15px] p-[25px] bg-[#F2F2F2] h-[319px] min-[1420px]:w-[410.666px]  max-[1420px]:gap-[15px] max-[1420px]:h-auto max-[400px]:h-[301px] max-[400px]:w-[320px]">
              <h3 className="text-[18px] font-medium leading-[150%]">
                  Честность
              </h3>
              <p className="text-[15px] tracking-[0.2px]  leading-[170%]">
                  Соблюдаем Золотое Правило во всем, поступать честно и правильно. Держим свои обещания, не обещаем то,
                  что невозможно реализовать. Честно говорим обо всех обстоятельствах, которых не удастся избежать.
              </p>
          </div>
      </div>
  </Fragment>
);

export default HomeGoodQuality;
