import React from 'react';
import DocumentsCardImg from '../../../../assets/img/documents-card-img.svg'

const Documentation = () => {
    return (
        <div>
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[60px] max-sm:mb-[30px]">
                Документы
            </h2>
            <div className="flex flex-col gap-[10px]">
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8] max-sm:p-[20px] max-sm:pl-[25px] max-sm:gap-x-[30px] max-sm:items-center">
                    <img className="mt-[-4px] px-[4.3px] max-sm:w-[22px] max-sm:h-[25px] max-sm:px-0" src={DocumentsCardImg} alt="documents-card-img"/>
                    <p className="text-[20px] leading-[146%] tracking-[.2px] max-sm:text-[16px] max-sm:leading-[145%]">Документы делопроизводства предприятия</p>
                </div>
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8] max-sm:p-[20px] max-sm:pl-[25px] max-sm:gap-x-[30px] max-sm:items-center">
                    <img className="mt-[-4px] px-[4.3px] max-sm:w-[22px] max-sm:h-[25px] max-sm:px-0" src={DocumentsCardImg} alt="documents-card-img"/>
                    <p className="text-[20px] leading-[146%] tracking-[.2px] max-sm:text-[16px] max-sm:leading-[145%]">Агентский договор и <br className="sm:hidden"/> соглашение</p>
                </div>
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8] max-sm:p-[20px] max-sm:pl-[25px] max-sm:gap-x-[30px] max-sm:items-center">
                    <img className="mt-[-4px] px-[4.3px] max-sm:w-[22px] max-sm:h-[25px] max-sm:px-0" src={DocumentsCardImg} alt="documents-card-img"/>
                    <p className="text-[20px] leading-[146%] tracking-[.2px] max-sm:text-[16px] max-sm:leading-[145%]">Договор аренды нежилых помещений, зданий и сооружений</p>
                </div>
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8] max-sm:p-[20px] max-sm:pl-[25px] max-sm:gap-x-[30px] max-sm:items-center">
                    <img className="mt-[-4px] px-[4.3px] max-sm:w-[22px] max-sm:h-[25px] max-sm:px-0" src={DocumentsCardImg} alt="documents-card-img"/>
                    <p className="text-[20px] leading-[146%] tracking-[.2px] max-sm:text-[16px] max-sm:leading-[145%]">Договор аренды автомобиля и других транспортных средств</p>
                </div>
            </div>
        </div>
    );
};

export default Documentation;