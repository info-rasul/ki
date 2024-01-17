import React, {useEffect, useRef, useState} from 'react';
import QRCodeServices from "../../../../components/qr-code/Services";
import oneSvg from "../../../../assets/img/quote.png";
import twoSvg from "../../../../assets/img/Ellipse10.png";

const EscortSidebar: React.FC = () => {

    return (
        <div className="escort__sidebar flex flex-col gap-[15px] pt-20">
            <QRCodeServices />
            <div className="flex flex-col items-start justify-center bg-[#086c801a] w-[300px] px-[25px] pb-[25px] pt-[26px]">
                <img className="w-[24px] h-[18px]" src={oneSvg} alt="gobbler" />
                <p className="text-start text-[15px] text-[#086C80] leading-[176%] tracking-[.25px] mt-[18px]">
                    «Мы обязаны помнить об исконных российских традициях справедливости
                    и законности, помнить о том, что диктатура закона — это единственная
                    разновидность диктатуры, которой мы обязаны подчиняться».
                </p>
                <div className="mainArticle__user flex items-center	gap-4 rounded-full py-[9px] pl-[9px] pr-[20px] bg-[#F8F8F8] mt-[23px]">
                    <img src={twoSvg} alt="Ellipse10" />
                    <p className="tracking-[-0.5px]">В.В.Путин</p>
                </div>
            </div>
        </div>
    );
};

export default EscortSidebar;