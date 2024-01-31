import type { FunctionComponent } from "react";
import oneSvg from "../../assets/img/vector-3.svg";
import twoSvg from "../../assets/img/cusir-code-telegram.svg"
import ButtonSocialK from "../../components/ButtonSocialK";
import React from "react";
import ButtonSocialIcon from "../../assets/img/button-social.svg";

const QRCodeServices: FunctionComponent = () => (
  <div className="relative flex flex-col gap-[25px] bg-[#097990] w-[300px] px-[25px] pt-5 pb-[25px]">
    <div className="flex flex-col gap-[5px]">
      <h2 className="text-[20px] leading-[150%] text-white tracking-[-0.2px]">
        Наш телеграм канал
      </h2>
      <p className="text-[15px] leading-[140%] text-[#CFF4FC]">
        Наведите камеру телефона на QR код, чтобы перейти в наш <br/> телеграм
      </p>
    </div>
    <img className="absolute top-0 right-0" src={oneSvg} alt="Фон"/>
    <img
      className="w-[150px] h-[150px]"
      src={twoSvg}
      alt="QR-код"
    />
      <a className="button-social cursor-pointer flex items-center justify-center gap-[75px] py-[10px] pb-[9px] pl-[25px] pr-[9px] whitespace-nowrap rounded-full text-white text-[15px] font-medium leading-[150%] bg-white bg-opacity-[0.16] shadow-boxShadowBtn max-md:w-full max-md:py-[14px]">
          Telegram канал
          <img
              className="max-md:hidden"
              width="32"
              height="32"
              src={ButtonSocialIcon}
              alt="Иконка"
          />
      </a>
  </div>
);

export default QRCodeServices;
