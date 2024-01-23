import React from 'react';
import EscortServicesCard from '../../../../assets/img/escort-services-card.svg'
import EscortServicesCard1 from '../../../../assets/img/escort-services-card1.svg'
import EscortServicesCard2 from '../../../../assets/img/escort-services-card2.svg'
import EscortServicesCard3 from '../../../../assets/img/escort-services-card3.svg'

const OtherServices = () => {
    return (
        <div className="flex flex-col  pb-[77px] max-md:px-[16px] max-sm:pb-[39px]">
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[40px] max-sm:mb-[30px]">
                Другие услуги
            </h2>
            <div className="flex flex-wrap gap-5 max-sm:gap-[15px]">
                <div className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
                    <img className="max-lg:w-[48px] max-lg:h-[48px]" src={EscortServicesCard} alt="escort-services-card"/>
                    <p className="leading-[140%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">Комплексная защита <br className="max-[1439px]:hidden"/> должников от кредиторов</p>
                </div>
                <div className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
                    <img className="max-lg:w-[48px] max-lg:h-[48px]" src={EscortServicesCard1} alt="escort-services-card"/>
                    <p className="leading-[140%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">Защита от субсидиарной <br className="max-[1439px]:hidden"/> ответственности</p>
                </div>
                <div className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
                    <img className="max-lg:w-[48px] max-lg:h-[48px]" src={EscortServicesCard2} alt="escort-services-card"/>
                    <p className="leading-[140%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">
                        Сопровождение на всех стадия <br className="max-[1439px]:hidden"/> банкротства в интересах <br className="max-[1439px]:hidden"/> должника
                    </p>
                </div>
                <div className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
                    <img className="max-lg:w-[48px] max-lg:h-[48px]" src={EscortServicesCard3} alt="escort-services-card"/>
                    <p className="leading-[140%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">Сопровождение <br className="max-[1439px]:hidden max-sm:block"/> уголовных дел</p>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;