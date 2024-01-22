import type { FunctionComponent } from "react";
import React from "react";
import ButtonsK from "../../../components/ButtonsK";
// @ts-ignore
import videoBack from "../../../assets/video/back2.mp4";

const HomeAdvantage: FunctionComponent = () => (
    <div className="video-back flex flex-col items-center justify-center mt-[122px] max-sm:mt-20 max-sm:px-[25px] max-sm:items-start">
        <video className="max-[850px]:w-[700px] max-[640px]:max-w-[300px]" autoPlay muted loop id="myVideo2">
            <source src={videoBack} type="video/mp4" />
        </video>
        <div className="px-20 py-[50px] max-sm:pt-5 max-sm:pb-[25px] max-sm:px-0">
            <h2 className="text-center text-white text-[30px] leading-[145%] tracking-[-0.1px] max-sm:text-left max-sm:text-[22px] max-sm:leading-[135%]">Наше ключевое преимущество</h2>
            <p className="text-center text-white leading-[170%] mt-[21px] mb-10 tracking-[.7px] max-sm:text-left max-sm:mt-[15px] max-sm:leading-[150%] text-[15px] max-sm:mb-[9px]">
                Обладаем уникальными возможностями сбора, формирования <br className="max-md:hidden" />
                и легализации доказательств и информации (в том числе из закрытых источников)
            </p>
            <ButtonsK />
        </div>
    </div>
);

export default HomeAdvantage;
