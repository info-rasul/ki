import type { FunctionComponent } from "react";
import oneSvg from "../../assets/img/img/Vector3.svg";
import twoSvg from "../../assets/img/img/cusir-code-telegram.svg";
import ButtonSocialK from "../../components/ButtonSocialK";
import React from "react";

const QRCodeServices: FunctionComponent = () => (
  <div className="relative flex flex-col gap-[25px] bg-[#097990] w-[300px] px-[25px] pt-5 pb-[25px]">
    <div className="flex flex-col gap-[5px]">
      <h2 className="text-[20px] leading-[150%] text-white">
        Наш телеграм канал
      </h2>
      <p className="text-[15px] leading-[140%] text-[#CFF4FC] tracking-[.2px]">
        Наведите камеру телефона на QR код, чтобы перейти в наш телеграм
      </p>
    </div>
    <img className="absolute top-0 right-0" src={oneSvg} alt="Vector3" />
    <img
      className="w-[150px] h-[150px]"
      src={twoSvg}
      alt="cusir-code-telegram"
    />
    &lt;!&ndash;в компоненте button-social нужно заменить класс gap-[23px] на
    gap: 75px;&ndash;&gt;
    <ButtonSocialK />
  </div>
);

export default QRCodeServices;
