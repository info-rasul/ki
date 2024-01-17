import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import ErrorBlock1 from "../../../assets/img/error-block-1.svg";
import ErrorBlock2 from "../../../assets/img/error-block-2.svg";
import ErrorBlockMedia from "../../../assets/img/error-block-media.svg";
import ButtonSocialK from "../../../components/ButtonSocialK";

const HomeErrorBlock: FunctionComponent = () => (
  <Fragment>
    <div className="aside bg-[#0B162A] mt-20 p-[45px] relative max-sm:px-[25px] max-sm:pt-[20px] max-sm:pb-[25px] max-sm:mt-10">
      <div className="flex flex-col lg:gap-[60px] max-lg:gap-10">
        <div className="flex flex-col gap-5 max-sm:gap-[15px]">
          <h2 className="text-white text-[30px] leading-[146%] tracking-[0.2px] max-lg:text-[20px] max-lg:leading-[135%]">
            ТОП-5 критических ошибок, из-за которых <br /> предпринимателей
            привлекают к уголовной <br /> ответственности
          </h2>
          <p className="text-white leading-[170%] opacity-60 max-sm:leading-[150%] max-sm:text-[14px]">
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
        src={ErrorBlock2}
        alt="Фоновое изображение"
      />
      <img
        className="absolute right-0 bottom-0 opacity-20 max-lg:hidden"
        src={ErrorBlock1}
        alt="Фоновое изображение"
      />
      <img
        className="absolute right-0 bottom-0 opacity-20 lg:hidden"
        src={ErrorBlockMedia}
        alt="Фоновое изображение"
      />
    </div>
  </Fragment>
);

export default HomeErrorBlock;
