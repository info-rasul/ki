import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import ErrorBlock1 from "../../../assets/img/error-block-1.svg";
import ErrorBlock2 from "../../../assets/img/error-block-2.svg";
import ErrorBlockMedia from "../../../assets/img/error-block-media.svg";
import ButtonSocialIcon from "../../../assets/img/Group6.svg";

const HomeErrorBlock: FunctionComponent = () => (
  <Fragment>
    <div className="aside bg-[#0B162A] mt-[79px] p-[45px] relative max-sm:px-[25px] max-sm:pt-[20px] max-sm:pb-[25px] max-sm:mt-10">
      <div className="flex flex-col lg:gap-[60px] max-lg:gap-[42px]  max-sm:items-center  max-sm:justify-center">
        <div className="flex flex-col gap-5 max-sm:gap-[15px]">
          <div className="text-white text-homeErrorBlock leading-[147%] max-lg:text-[20px] max-lg:leading-[135%]">
            ТОП-5 критических ошибок,&nbsp;<br className="min-[500px]:hidden"/>из-за которых&nbsp;<br />предпринимателей&nbsp;<br className="min-[500px]:hidden"/>
            привлекают к уголовной&nbsp;<br /> ответственности
          </div>
          <p className="text-white leading-[172%] opacity-60 max-sm:leading-[150%] max-sm:text-[14px]">
            Подпишись на наш Telegram-кaнaл и получи практический чек-лист,
           &nbsp;<br className="max-sm:hidden"/>
            как избежать уголовной ответственности, сохранить&nbsp;<br className="min-[466px]:hidden"/>
            свои активы, деньги и свободу!
          </p>
        </div>
        <div className="bg-opacity-4 w-[242px] max-sm:w-[293px]">
          <a href="https://t.me/co_info" target="_blank" rel="noopener noreferrer nofollow"
             className="button-social cursor-pointer flex items-center justify-center z-10 pt-[15px] pb-[13px] pl-[25px] pr-[61px] relative rounded-full text-white text-[15px] font-medium leading-[20px] tracking-[0.3px] bg-white bg-opacity-[0.04] shadow-boxShadowBtn max-md:pr-[9px] max-md:w-full max-md:py-[14px] max-md:leading-[19px]">
            Получить в Telegram
            <img
                className="max-md:hidden absolute right-[9px]"
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
