import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import oneSvg from "../../assets/img/frame-1.svg";
import useCard from "./useCard";

const InformationCardAbout: FunctionComponent = () => {
  useCard();

  return (
    <Fragment>
      <div className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[59px] w-[630px] max-lg:p-[25px] max-lg:gap-[43px] max-sm:w-full">
        <img className="w-[100px] h-[100px] max-lg:w-[70px] max-lg:h-[70px]" src={oneSvg} alt="Frame1" />
        <div className="flex flex-col items-start gap-[20px] max-lg:gap-[16px]">
          <div className="text-[25px] leading-[140%] tracking-[0.3px] max-sm:text-[18px] max-sm:leading-[130%]">646 млн</div>
          <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
            Столько денег было сэкономленное нашим клиентам
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default InformationCardAbout;
