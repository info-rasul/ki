import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import oneSvg from "../../../assets/img/Vector2.svg";
import twoSvg from "../../../assets/img/Vector1.svg";
import threeSvg from "../../../assets/img/Vector4.svg";

import ButtonSocialK from "../../../components/ButtonSocialK";

const HomeErrorBlock: FunctionComponent = () => (
  <Fragment>
    <div className="aside bg-[#0B162A] mt-20 p-[45px] relative max-sm:px-[25px] max-sm:pt-[20px] max-sm:pb-[25px] max-sm:mt-10">
      <div className="flex flex-col lg:gap-[60px] max-lg:gap-10">
        <div className="flex flex-col gap-5 max-sm:gap-[15px]">
          <h2 className="text-white text-[30px] leading-[145%] tracking-[0.2px] max-lg:text-[20px] max-lg:leading-[135%]">
            ТОП-5 критических ошибок, из-за которых <br /> предпринимателей
            привлекают к уголовной <br /> ответственности
          </h2>
          <p className="text-white leading-[170%] opacity-60 max-sm:leading-[150%] text-[14px]">
            Подпишись на наш Telegram-кaнaл и получи практический чек-лист,{" "}
            <br />
            как избежать уголовной ответственности, сохранить свои активы,
            деньги и свободу!
          </p>
        </div>
        <div className="w-[242px] max-sm:w-[293px]">
          <ButtonSocialK />
        </div>
      </div>
      <img
        className="absolute right-0 top-0 opacity-20 max-lg:hidden"
        src={oneSvg}
        alt="Vector2"
      />
      <img
        className="absolute right-0 bottom-0 opacity-20 max-lg:hidden"
        src={twoSvg}
        alt="Vector1"
      />
      <img
        className="absolute right-0 bottom-0 opacity-20 lg:hidden"
        src={threeSvg}
        alt="Vector4"
      />
    </div>
  </Fragment>
);

export default HomeErrorBlock;
