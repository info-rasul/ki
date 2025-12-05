import React from 'react';
import ButtonSocialIcon from "../../../../assets/img/Group6.svg";
import ErrorBlock2 from "../../../../assets/img/error-block-2.svg";
import ErrorBlock1 from "../../../../assets/img/error-block-1.svg";
import ErrorBlockMedia from "../../../../assets/img/error-block-media.svg";
import ButtonsK from "../../../../components/ButtonsK";
import ButtonSocialK from "../../../../components/ButtonSocialK";

const AboutUsAdvantage = () => {
    return (
        <div className="aside bg-[#0B162A] mt-[79px] mb-[82px] p-[45px] relative max-sm:px-[25px] max-sm:pt-[20px] max-sm:pb-[25px] max-sm:mt-10">
            <div className="relative z-10">
                <div className="text-white relative text-homeAdvantage leading-[145%] tracking-[-0.3px] max-sm:text-left max-sm:text-[22px] max-sm:leading-[135%]">
                    Наше ключевое преимущество
                </div>
                <p className="text-white leading-[170%] mt-[20px] mb-[38px] opacity-80 max-sm:opacity-60 max-sm:text-left max-sm:mt-[16px] max-sm:mb-[30px] max-sm:leading-[150%] max-sm:text-[15px]">
                    Обладаем уникальными возможностями сбора, формирования&nbsp;<br className="max-md:hidden" />и легализации доказательств и информации (в том числе из закрытых источников)
                </p>
                <div className="buttons flex gap-[12px] items-center max-[770px]:w-full max-[550px]:flex-col max-[550px]:w-full max-[550px]:gap-2.5">
                    <a href="/news" className="buttons-news cursor-pointer relative pl-[25px] pr-[27px] pt-[16px] pb-[14px] tracking-[0.17px] bg-white rounded-full text-[#000000] text-[15px] font-medium leading-[134%] max-md:w-full max-md:text-center">
                        Читать новости
                    </a>
                    <a href="https://t.me/co_info" target="_blank" rel="noopener noreferrer nofollow"
                       className="button-social cursor-pointer flex items-center justify-center pt-[15px] pb-[13px] pl-[25px] pr-[61px] relative rounded-full text-white text-[15px] font-medium leading-[20px] tracking-[0.3px] bg-white bg-opacity-[0.04] shadow-boxShadowBtn max-md:pr-[9px] max-md:w-full max-md:py-[14px] max-md:leading-[19px]">
                        Telegram канал
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
    );
};

export default AboutUsAdvantage;