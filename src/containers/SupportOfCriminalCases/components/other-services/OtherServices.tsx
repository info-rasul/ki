// @ts-ignore
import React from 'react';
import EscortCardData from "../../../../hooks/EscortCardData";
import OtherServicesCard from "./other-services-card/OtherServicesCard";



const OtherServices = () => {
    return (
        <div className="flex flex-col pb-[80px] max-[1080px]:px-[16px] max-sm:pb-[40px]">
            <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[145%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[40px] max-sm:mb-[30px]">
                Другие услуги
            </h2>
            <div className="grid grid-cols-2 gap-5 max-sm:gap-[15px] max-[1080px]:flex max-[1080px]:flex-wrap">
                {
                    // @ts-ignore
                    EscortCardData.map((item, index) => {
                        return <OtherServicesCard key={index} desc={item.desc} animation={item.animation} path={item.path}/>

                    })
                }
            </div>
        </div>
    );
};

export default OtherServices;