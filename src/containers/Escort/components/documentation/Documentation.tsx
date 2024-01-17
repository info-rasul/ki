import React from 'react';
import DocumentsCardImg from '../../../../assets/img/documents-card-img.svg'

const Documentation = () => {
    return (
        <div>
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10">
                Документы
            </h2>
            <div className="flex flex-col gap-[10px]">
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8]">
                    <img className="mt-[-4px] px-[4.3px]" src={DocumentsCardImg} alt="documents-card-img"/>
                    <p className="text-[20px] leading-[146%] tracking-[.2px]">Документы делопроизводства предприятия</p>
                </div>
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8]">
                    <img className="mt-[-4px] px-[4.3px]" src={DocumentsCardImg} alt="documents-card-img"/>
                    <p className="text-[20px] leading-[146%] tracking-[.2px]">Агентский договор и соглашение</p>
                </div>
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8]">
                    <img className="mt-[-4px] px-[4.3px]" src={DocumentsCardImg} alt="documents-card-img"/>
                    <p className="text-[20px] leading-[146%] tracking-[.2px]">Договор аренды нежилых помещений, зданий и сооружений</p>
                </div>
                <div className="flex gap-5 p-[25px] bg-[#F8F8F8]">
                    <img className="mt-[-4px] px-[4.3px]" src={DocumentsCardImg} alt="documents-card-img"/>
                    <p className="text-[20px] leading-[146%] tracking-[.2px]">Договор аренды автомобиля и других транспортных средств</p>
                </div>
            </div>
        </div>
    );
};

export default Documentation;