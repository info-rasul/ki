import type { FunctionComponent } from "react";
import React from "react";
import QrCode from "../../assets/img/qr-code.svg";
import ButtonSocialK from "../../components/ButtonSocialK";

const QRCodeContacts: FunctionComponent = () => (
  <div className="flex justify-between bg-[#F8F8F8] w-full p-10 max-lg:pt-5 max-lg:px-[25px] max-lg:pb-[25px]">
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[10px] max-md:gap-[15px]">
        <div style={{ fontSize: 'clamp(22px, 1.8vw, 25px)' }} className="leading-[145%] max-sm:text-[22px] max-md:leading-[135%]">
          Наш телеграм-канал
        </div>
        <p className="leading-[170%] max-md:text-[15px] max-md:leading-[150%]">
          Наведите камеру телефона на QR код, чтобы перейти в наш телеграм
        </p>
      </div>
      <div className="w-[194px] max-md:w-full bg-black rounded-full">
        <ButtonSocialK />
      </div>
    </div>
    <div className="p-[7px] bg-white max-md:hidden">
      <img className="w-[150px] h-[150px]" src={QrCode} alt="QR-код"
      />
    </div>
  </div>
);

export default QRCodeContacts;
