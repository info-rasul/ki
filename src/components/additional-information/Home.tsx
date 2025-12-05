import type { FunctionComponent } from "react";
import React from "react";
import AdditionalInformationHomeImg from "../../assets/img/additional-information-home.svg";
import ButtonsK from "../../components/ButtonsK";

const AdditionalInformationHome: FunctionComponent = () => (
  <div className="flex flex-col justify-between bg-[#097990] p-[45px] gap-[20px] relative max-[1439px]:w-full max-lg:gap-[39px] max-sm:mt-[65px] max-sm:px-[25px] max-sm:pb-[23px] max-sm:pt-[20px]">
      <div style={{fontSize: 'clamp(20px, 2.1vw, 30px)'}}
           className="text-white leading-[145%] max-sm:text-[20px] max-sm:leading-[135%]">
          Хотите знать больше? Читайте новости или <br />подписывайтесь на наш телеграм-канал
      </div>
      <div className="flex justify-start max-[1439px]:w-full">
          <ButtonsK />
      </div>
    <img
      className="absolute bottom-0 min-[1440px]:right-0 max-[1439px]:right-0 max-sm:hidden"
      src={AdditionalInformationHomeImg}
      alt="Vector"
    />
  </div>
);

export default AdditionalInformationHome;
