import React from 'react';
import ServicesImg from '../../../../assets/img/services1.svg'

const BlogNavigation = () => {
    return (
        <div className="w-[630px] p-[45px] flex items-center bg-[#F8F8F8] gap-[60px] max-sm:gap-[25px] max-sm:p-5">
            <img className="max-sm:w-[48px] h-[48px]" src={ServicesImg} alt="services1"/>
                <p className="text-[25px] leading-[140%] tracking-[.2px] max-sm:text-[16px]	leading-[150%]-">
                    Комплексная защита должников от кредиторов
                </p>
        </div>
    );
};

export default BlogNavigation;