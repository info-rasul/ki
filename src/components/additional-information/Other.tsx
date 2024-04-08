import type { FunctionComponent } from "react";
import React from "react";
import oneSvg from "../../assets/img/serv-add-information.svg";
import ButtonsK from "../../components/ButtonsK";

const AdditionalInformationOther: FunctionComponent = () => (
  <div className="flex flex-col justify-between bg-[#097990] p-[40px] gap-10 mb-20 relative">
    <span className="text-white	text-[25px] leading-[145%]">
      Хотите знать больше? Читайте новости&nbsp;<br /> или подписывайтесь на наш
      телеграм-канал
    </span>
    <ButtonsK />
    <img
      className="absolute top-[-58px] right-[34px] w-[387px] h-[387px]"
      src={oneSvg}
      alt="Vector"
    />
  </div>
);

export default AdditionalInformationOther;
