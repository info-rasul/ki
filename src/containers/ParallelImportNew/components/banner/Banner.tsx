import React from 'react';
import type { FunctionComponent } from "react";
import arrowIcon from '../../../../assets/img/arrow-right-icon.svg';
import Globus from '../../../../assets/img/globus.png'
import MobGlobus from '../../../../assets/img/mob-gl.png'

const Banner: FunctionComponent = () => {
    return (
        <div
            className="flex flex-row items-center justify-between overflow-hidden mb-[60px] px-10 max-lg:px-5 max-md:px-2 max-md:py-2 md:py-4 bg-[#111825] font-sans relative max-md:justify-center max-md:bg-[#071221]"
        >
            {/* Desktop layout */}
            <div className="hidden md:flex flex-row items-center justify-between w-full">
                {/* Left side - Text content */}
                <div
                    className="flex flex-col max-w-full w-[837px] items-stretch z-10"
                >
                    {/* Title - Two lines */}
                    <h2
                        className="text-[#FCB71D] text-[25px] has-text-weight-medium italic leading-[35px] tracking-[0.5px] uppercase"
                    >
                        <span className="block">ВНЕШНЕЭКОНОМИЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ</span>
                        <span className="block">НА ВЫГОДНЫХ УСЛОВИЯХ</span>
                    </h2>

                    {/* List items */}
                    <ul
                        className="flex flex-col mt-6 w-full items-stretch text-[13px] justify-start gap-2 list-none"
                    >
                        <li
                            className="flex w-full items-start gap-[5px] justify-start flex-wrap before:content-['—'] before:text-[#FCB71D] before:font-bold before:pl-[3px] before:pr-[3px] before:flex before:items-center before:justify-center before:w-5 before:h-5 before:leading-5"
                        >
                            <span
                                className="flex min-w-[240px] items-start gap-2 text-white font-normal leading-5 justify-start flex-1 shrink flex-basis-0"
                            >
                                Параллельный импорт
                            </span>
                        </li>

                        <li
                            className="flex w-full items-start gap-[5px] justify-start flex-wrap before:content-['—'] before:text-[#FCB71D] before:font-bold before:pl-[3px] before:pr-[3px] before:flex before:items-center before:justify-center before:w-5 before:h-5 before:leading-5"
                        >
                            <span
                                className="flex min-w-[240px] items-start gap-2 text-white font-normal leading-5 justify-start flex-1 shrink flex-basis-0"
                            >
                                Решаем любые задачи по импорту из Европы и США,<br className="max-lg:hidden"/> таможенное оформление, сертификация.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Right side - Globe image with button */}
                <div
                    className="relative self-end flex max-w-full w-80 z-10"
                >
                    <img
                        src={Globus}
                        alt="Параллельный импорт - Глобус"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div
                    className="relative self-end flex pb-6 z-10"
                >
                    <button
                        className="bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center z-20"
                        aria-label="Узнать больше"
                    >
                        <img
                            src={arrowIcon}
                            alt="Стрелка"
                            className="w-8 h-8 pl-0.5"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden flex flex-col items-center w-full pb-8 bg-[#111825] relative overflow-hidden min-h-[220px]">
                {/* Background pattern SVG */}
                <svg
                    className="absolute right-[-81px] top-[-205px] opacity-[0.05]"
                    width="424"
                    height="425"
                    viewBox="0 0 343 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g opacity="0.05">
                        <path d="M9.27374 -197.053C8.83538 -197.492 8.12466 -197.492 7.68627 -197.053L0.54272 -189.91C0.104366 -189.471 0.104366 -188.761 0.54272 -188.322C0.981105 -187.884 1.69183 -187.884 2.13018 -188.322L8.48001 -194.672L14.8298 -188.322C15.2682 -187.884 15.9789 -187.884 16.4173 -188.322C16.8556 -188.761 16.8556 -189.471 16.4173 -189.91L9.27374 -197.053ZM92.2884 -197.053C91.8501 -197.492 91.1394 -197.492 90.701 -197.053L83.5575 -189.91C83.1191 -189.471 83.1191 -188.761 83.5575 -188.322C83.9958 -187.884 84.7065 -187.884 85.1449 -188.322L91.4947 -194.672L97.8445 -188.322C98.2829 -187.884 98.9936 -187.884 99.432 -188.322C99.8704 -188.761 99.8704 -189.471 99.432 -189.91L92.2884 -197.053ZM174.411 -197.053C173.972 -197.492 173.261 -197.492 172.823 -197.053L165.68 -189.91C165.241 -189.471 165.241 -188.761 165.68 -188.322C166.118 -187.884 166.829 -187.884 167.267 -188.322L173.617 -194.672L179.967 -188.322C180.405 -187.884 181.116 -187.884 181.554 -188.322C181.993 -188.761 181.993 -189.471 181.554 -189.91L174.411 -197.053ZM258.318 -197.053C257.88 -197.492 257.169 -197.492 256.73 -197.053L249.587 -189.91C249.149 -189.471 249.149 -188.761 249.587 -188.322C250.025 -187.884 250.736 -187.884 251.174 -188.322L257.524 -194.672L263.874 -188.322C264.312 -187.884 265.023 -187.884 265.461 -188.322C265.9 -188.761 265.9 -189.471 265.461 -189.91L258.318 -197.053ZM340.44 -197.053C340.002 -197.492 339.291 -197.492 338.853 -197.053L331.709 -189.91C331.271 -189.471 331.271 -188.761 331.709 -188.322C332.147 -187.884 332.858 -187.884 333.296 -188.322L339.646 -194.672L345.996 -188.322C346.434 -187.884 347.145 -187.884 347.584 -188.322C348.022 -188.761 348.022 -189.471 347.584 -189.91L340.44 -197.053ZM415.52 211.5L415.52 210.378C191.34 210.378 9.60252 28.3217 9.6025 -196.26L8.48001 -196.26L7.35751 -196.26C7.3575 29.5579 190.096 212.623 415.52 212.623L415.52 211.5ZM415.52 128.339L415.52 127.216C237.188 127.216 92.6172 -17.6071 92.6172 -196.26L91.4947 -196.26L90.3722 -196.26C90.3722 -16.371 235.944 129.461 415.52 129.461L415.52 128.339ZM415.52 46.0712L415.52 44.9487C282.542 44.9487 174.739 -63.042 174.739 -196.26L173.617 -196.26L172.494 -196.26C172.494 -61.8059 281.299 47.1937 415.52 47.1937L415.52 46.0712ZM415.52 -37.9845L415.52 -39.107C328.883 -39.107 258.647 -109.465 258.647 -196.26L257.524 -196.26L256.402 -196.26C256.402 -108.229 327.64 -36.862 415.52 -36.862L415.52 -37.9845ZM415.52 -120.252L415.52 -121.374C374.238 -121.374 340.769 -154.9 340.769 -196.26L339.646 -196.26L338.524 -196.26C338.524 -153.664 372.994 -119.129 415.52 -119.129L415.52 -120.252Z" fill="url(#paint0_linear_115_528)"></path>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_115_528" x1="8.48006" y1="294.8" x2="405.636" y2="-201.538" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0"></stop>
                            <stop offset="1" stopColor="white"></stop>
                        </linearGradient>
                    </defs>
                </svg>

                {/* Content container */}
                <div className="flex flex-col w-[calc(100%-32px)] left-4 top-4 relative gap-4 z-10">
                    {/* Title and Globe image in one row */}
                    <div className="flex flex-row items-center justify-between gap-4 w-full">
                        {/* Title */}
                        <h2
                            className="text-[#FCB71D] text-[16px] italic leading-[125%] tracking-[0.28px] uppercase font-normal flex-1"
                        >
                            Внешнеэкономическая деятельность на выгодных условиях
                        </h2>

                        {/* Globe image */}
                        <div className="mt-[-16px] flex-shrink-0">
                            <img
                                src={MobGlobus}
                                alt="Параллельный импорт - Глобус"
                                className="w-full h-full object-contain mt-0"
                            />
                        </div>
                    </div>

                    {/* List items and Button in one row */}
                    <div className="flex flex-row items-start justify-between gap-4 w-full">
                        {/* List items */}
                        <ul className="flex flex-col items-start gap-[6px] flex-1 list-none">
                            <li className="flex items-start gap-[5px] w-full">
                                <div className="flex px-[3px] py-[5px] justify-center items-center pt-[2px]">
                                    <span className="text-[#FCB71D] text-[12px] font-bold leading-[150%]">—</span>
                                </div>
                                <span className="text-white text-[12px] font-normal leading-[140%] flex-1">
                                    Параллельный импорт
                                </span>
                            </li>

                            <li className="flex items-start gap-[5px] w-full">
                                <div className="flex px-[3px] py-[5px] justify-center items-center pt-[2px]">
                                    <span className="text-[#FCB71D] text-[12px] font-bold leading-[150%]">—</span>
                                </div>
                                <span className="text-white text-[12px] font-normal leading-[140%] flex-1">
                                    Решаем любые задачи по импорту из Европы и США, таможенное оформление, сертификация.
                                </span>
                            </li>
                        </ul>

                        {/* Button */}
                        <button
                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 z-20 self-end"
                            aria-label="Узнать больше"
                        >
                            <img
                                src={arrowIcon}
                                alt="Стрелка"
                                className="w-7 h-7 pl-0.5"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

