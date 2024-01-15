import React from 'react';
import SubTitle from "../../../../../../components/PersonCard";
import PersonCardDesc from "../../../../../../components/PersonCardDesc";

const ArticleContentNavigation = () => {
    return (
        <div className="flex flex-col mt-20 gap-10 items-center max-xl:mt-[35px] max-md:gap-[35px]">
            <div className="w-full h-px bg-[#E6E6E6]"></div>
            <div className="flex flex-wrap justify-center gap-[5px]">
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[14px] px-5" href="#">
                    Финансы
                </a>
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[14px] px-5" href="#">
                    Деньги
                </a>
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[14px] px-5" href="#">
                    ЦБ
                </a>
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[14px] px-5" href="#">
                    Эльвира Набиуллина
                </a>
                <a className="text-[15px] leading-[150%] rounded-full border border-[#E6E6E6] pt-[14px] pb-[14px] px-5" href="#">
                    Экономика
                </a>
            </div>
            <div className="flex flex-col gap-2.5">
                <SubTitle />
                <PersonCardDesc />
            </div>
        </div>
    );
};

export default ArticleContentNavigation;