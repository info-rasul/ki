import React from 'react';

const BlogNavigation = () => {
    return (
        <div className="hide__scrollbar my-[30px] flex gap-[10px] overflow-x-auto max-sm:mb-5 max-sm:mt-[19px]">
            <a className="navigation__elem text-white bg-[#097990] py-[10px] px-[15px] inline-block border border-[#E6E6E6] text-[15px] leading-[150%] tracking-[.09px] max-sm:text-[14px] whitespace-nowrap"
               href="#">Все</a>
            <a className="navigation__elem  py-[10px] px-[15px] inline-block border border-[#E6E6E6] text-[15px] leading-[150%] tracking-[.09px] max-sm:text-[14px] whitespace-nowrap"
               href="#">Финансы</a>
            <a className="navigation__elem  py-[10px] px-[15px] inline-block border border-[#E6E6E6] text-[15px] leading-[150%] tracking-[.09px] max-sm:text-[14px] whitespace-nowrap"
               href="#">Банкротство</a>
            <a className="navigation__elem  py-[10px] px-[15px] inline-block border border-[#E6E6E6] text-[15px] leading-[150%] tracking-[.09px] max-sm:text-[14px] whitespace-nowrap"
               href="#">Долги</a>
            <a className="navigation__elem  py-[10px] px-[15px] inline-block border border-[#E6E6E6] text-[15px] leading-[150%] tracking-[.09px] max-sm:text-[14px] whitespace-nowrap"
               href="#">Уголовные дела</a>
        </div>
);
};

export default BlogNavigation;