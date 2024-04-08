import type { FunctionComponent } from "react";
import oneSvg from "../../assets/img/vector-3.svg";
import QrCode from "../../assets/img/qr-code.svg"
import React from "react";
import ButtonSocialIcon from "../../assets/img/button-social.svg";

const QRCodeServices: FunctionComponent = () => (
  <div className="relative flex flex-col gap-[25px] bg-[#097990] w-[300px] px-[25px] pt-5 pb-[25px]">
    <div className="flex flex-col gap-[5px]">
      <p className="text-[20px] leading-[150%] text-white tracking-[-0.2px]">
        Наш телеграм-канал
      </p>
      <p className="text-[15px] leading-[140%] text-[#CFF4FC]">
        Наведите камеру телефона на QR код, чтобы перейти в наш&nbsp;<br /> телеграм
      </p>
    </div>
    <img className="absolute top-0 right-0" src={oneSvg} alt="Фон"/>
    <img
      className="w-[150px] h-[150px]"
      src={QrCode}
      alt="QR-код"
    />
      <a href="https://t.me/co_info" target="_blank" rel="noopener noreferrer nofollow"
         className="button-social cursor-pointer flex items-center justify-center z-10 gap-[75px] py-[10px] pb-[9px] pl-[25px] pr-[9px] whitespace-nowrap rounded-full text-white text-[15px] font-medium leading-[150%] bg-white bg-opacity-[0.16] shadow-boxShadowBtn max-md:w-full max-md:py-[14px]">
          Telegram-канал
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
