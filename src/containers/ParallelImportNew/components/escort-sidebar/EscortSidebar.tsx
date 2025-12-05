import React, {useEffect, useRef, useState} from 'react';
import QRCodeServices from "../../../../components/qr-code/Services";
import oneSvg from "../../../../assets/img/quote.svg";
import oneSvg1 from "../../../../assets/img/quote-1.svg";
import PersonCardImg from "../../../../assets/img/persone-card-img2.jpg";
import ButtonSocialIconRed from "../../../../assets/img/button-social-red.svg";
const EscortSidebar: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="escort__sidebar flex flex-col gap-[15px] pt-20 right-20 max-[1080px]:hidden">
            <QRCodeServices />
            <div className="flex flex-col items-start justify-center bg-[#086c801a] w-[300px] p-[25px]">
                <img className="w-[24px] h-[18px] mt-[4px]" src={oneSvg} alt="gobbler" />
                <p className="text-start text-[15px] tracking-[.1px] text-[#086C80] leading-[25.5px] mt-[19px]">
                    Те, кто говорят, должны действовать, и только те, кто действуют, должны говорить.
                </p>
                <div className="mainArticle__user flex items-center	gap-[15px] rounded-full py-[9px] pl-[9px] pr-[20px] bg-[#F8F8F8] mt-[25px]">
                    <img className="w-[32px]" src={PersonCardImg} alt="Ellipse10" />
                    <p className="text-[15px] leading-[20px]">Н.Н.Талеб</p>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center bg-[#086c801a] w-[300px] p-[25px]">
                <img className="w-[24px] h-[18px] mt-[4px]" src={oneSvg} alt="gobbler" />
                <p className="text-start text-[15px] tracking-[.1px] text-[#086C80] leading-[25.5px] mt-[20px]">
                    В рамках параллельного импорта осуществляются поставки только оригинальных товаров.
                </p>
            </div>
            <div className="flex flex-col p-[25px] pt-[23px] gap-[22px] bg-black w-[300px]">
                <img className="w-[24px] h-[18px] mt-[4px]" src={oneSvg1} alt="gobbler" />
                <p className="text-start text-[15px] tracking-[.1px] text-white leading-[25.5px] pr-[15px]">
                    Приказ Минпромторга России № 2701 от 21 июля 2023 года
                </p>
                <a href="/file.pdf" target="_blank" download
                   className="button-social cursor-pointer flex items-center justify-center text-[#EA3C3D] gap-[75px] py-[10px] pb-[9px] pl-[25px] pr-[9px] whitespace-nowrap rounded-full text-[15px] font-medium leading-[150%] bg-white shadow-boxShadowBtn max-md:w-full max-md:py-[14px] hover:text-white">
                    Скачать приказ
                    <img
                        className="max-md:hidden"
                        width="32"
                        height="32"
                        src={ButtonSocialIconRed}
                        alt="Иконка"
                    />
                </a>
            </div>
        </div>
    );
};

export default EscortSidebar;