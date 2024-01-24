import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import ErrorBlock1 from "../../../assets/img/error-block-1.svg";
import ErrorBlock2 from "../../../assets/img/error-block-2.svg";
import ErrorBlockMedia from "../../../assets/img/error-block-media.svg";
import ButtonSocialIcon from "../../../assets/img/Group6.svg";

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
            Подпишись на наш Telegram-кaнaл и получи практический чек-лист,
            <br className="max-sm:hidden"/>
            как избежать уголовной ответственности, сохранить свои активы,
            деньги и свободу!
          </p>
        </div>
        <div className="bg-opacity-4 w-[242px] max-sm:w-[293px]">
          <a className="button-social cursor-pointer flex items-center justify-center gap-[21px] py-[10px] pb-[8px] pl-[25px] pr-[7px] rounded-full text-white text-[15px] font-medium leading-[150%] bg-white bg-opacity-[0.16] shadow-boxShadowBtn max-md:w-full max-md:py-[14px]">
            Получить в Telegram
            <img
                className="max-md:hidden"
                width="32"
                height="32"
                src={ButtonSocialIcon}
                alt="ButtonSocialIcon"
            />
          </a>
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