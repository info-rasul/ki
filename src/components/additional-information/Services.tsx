import type { FunctionComponent } from "react";
import React from "react";
import oneSvg from "../../assets/img/serv-add-information.svg";
import ButtonsK from "../../components/ButtonsK";

const AdditionalInformationServices: FunctionComponent = () => (
  <div className="flex flex-col justify-between bg-[#097990] p-[40px] gap-10 mb-20 relative max-sm:px-[25px] pb-[25px] pt-5 max-sm:mb-10">
    <span className="text-white	text-[25px] leading-[138%] max-sm:text-[20px] max-sm:leading-[135%]">
      Хотите знать больше?&nbsp;<br className="sm:hidden" />Читайте новости
     &nbsp;<br className="max-sm:hidden" />или подписывайтесь на наш телеграм-канал
    </span>
    <ButtonsK />
    <img
      className="absolute top-0 right-[34px] max-sm:hidden"
      src={oneSvg}
      alt="Vector"
    />
  </div>
);

export default AdditionalInformationServices;
