import React from 'react';
import DocumentsCardImg from '../../../../assets/img/documents-card-img.svg'

const Documentation = () => {
    return (
        <div>
            <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[150%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[60px] max-sm:mb-[30px] max-sm:tracking-normal">
                Документы
            </h2>
            <div className="flex flex-col gap-[10px]">
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8] hover:bg-[#e9e9e9] max-sm:p-[20px] max-sm:gap-x-[25px] max-sm:items-center">
                    <div className="w-[24px] h-[24px] flex items-center justify-center max-sm:max-w-[32px] max-sm:w-full max-sm:h-[32px]">
                        <img className="max-sm:max-w-[20.46px] max-sm:h-[24.66px]" src={DocumentsCardImg} alt="Иконка"/>
                    </div>
                    <a href="/file.pdf" download className="text-[20px] leading-[29px] max-sm:text-[16px]">
                        Приказ Минпромторга России № 2701 от 21 июля 2023 года
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Documentation;