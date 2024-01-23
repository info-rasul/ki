import type { FunctionComponent } from "react";
import React from "react";
import oneSvg from "../../assets/img/cusir-code-telegram.svg";
import ButtonSocialK from "../../components/ButtonSocialK";

const QRCodeContacts: FunctionComponent = () => (
  <div className="flex justify-between bg-[#F8F8F8] w-full p-10 max-lg:pt-5 max-lg:px-[25px] max-lg:pb-[25px]">
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[10px] max-md:gap-[15px]">
        <h2 className="text-[25px] leading-[145%] max-md:text-[22px] max-md:leading-[145%]">
          Наш телеграм канал
        </h2>
        <p className="leading-[170%] tracking-[.05px] max-md:text-[15px] max-md:leading-[150%]">
          Наведите камеру телефона на QR код, чтобы перейти в наш телеграм
        </p>
      </div>
      <div className="w-[194px] max-md:w-full bg-black rounded-full">
        <ButtonSocialK />
      </div>
    </div>
    <div className="p-[7px] bg-white max-md:hidden">
      <img className="w-[150px] h-[150px]" src={oneSvg} alt="QR-код"
      />
    </div>
  </div>
);

export default QRCodeContacts;
