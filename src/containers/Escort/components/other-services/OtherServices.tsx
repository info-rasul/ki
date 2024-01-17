import React from 'react';
import EscortServicesCard from '../../../../assets/img/escort-services-card.svg'
import EscortServicesCard1 from '../../../../assets/img/escort-services-card1.svg'
import EscortServicesCard2 from '../../../../assets/img/escort-services-card2.svg'
import EscortServicesCard3 from '../../../../assets/img/escort-services-card3.svg'

const OtherServices = () => {
    return (
        <div className="flex flex-col px-20 pb-[77px]">
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10">
                Другие услуги
            </h2>
            <div className="flex flex-wrap gap-5">
                <div className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full">
                    <img src={EscortServicesCard} alt="escort-services-card"/>
                        <p className="leading-[140%] text-[25px]">Комплексная защита <br/> должников от кредиторов</p>
                </div>
                <div className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full">
                    <img src={EscortServicesCard1} alt="escort-services-card"/>
                    <p className="leading-[140%] text-[25px]">Защита от субсидиарной <br/> ответственности</p>
                </div>
                <div className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full">
                    <img src={EscortServicesCard2} alt="escort-services-card"/>
                    <p className="leading-[140%] text-[25px]">
                        Сопровождение на всех стадия <br/> банкротства в интересах <br/> должника
                    </p>
                </div>
                <div className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full">
                    <img src={EscortServicesCard3} alt="escort-services-card"/>
                    <p className="leading-[140%] text-[25px]">Сопровождение <br/> уголовных дел</p>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;