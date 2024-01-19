import React from 'react';
import SubTitle from "../../../../../../components/PersonCard";
import PersonCardDesc from "../../../../../../components/PersonCardDesc";

const ArticleContentNavigation = () => {
    return (
        <div className="flex flex-col mt-[78px] gap-10 items-center max-xl:mt-[35px] max-md:gap-[35px]">
            <div className="w-full h-px bg-[#E6E6E6]"></div>
            <div className="flex flex-wrap justify-center gap-[5px]">
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[13px] px-5 max-sm:text-[13px] max-sm:pt-[10px] max-sm:pb-[9px] max-sm:px-[15px]" href="#">
                    Финансы
                </a>
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[13px] px-5 max-sm:text-[13px] max-sm:pt-[10px] max-sm:pb-[9px] max-sm:px-[15px]" href="#">
                    Деньги
                </a>
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[13px] px-5 max-sm:text-[13px] max-sm:pt-[10px] max-sm:pb-[9px] max-sm:px-[15px]" href="#">
                    ЦБ
                </a>
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[13px] px-5 max-sm:text-[13px] max-sm:pt-[10px] max-sm:pb-[9px] max-sm:px-[15px]" href="#">
                    Эльвира Набиуллина
                </a>
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[13px] px-5 max-sm:text-[13px] max-sm:pt-[10px] max-sm:pb-[9px] max-sm:px-[15px]" href="#">
                    Экономика
                </a>
            </div>
            <div className="flex flex-col gap-2.5 mt-[-2px]">
                <SubTitle />
                <PersonCardDesc />
            </div>
        </div>
    );
};

export default ArticleContentNavigation;