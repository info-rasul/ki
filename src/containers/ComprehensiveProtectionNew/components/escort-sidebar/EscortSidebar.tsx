import React, {useEffect, useState} from 'react';
import QRCodeServices from "../../../../components/qr-code/Services";
import oneSvg from "../../../../assets/img/quote.svg";
import PersonCardImg from "../../../../assets/img/quote-media.png";

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
                <img className="w-[24px] h-[18px]" src={oneSvg} alt="gobbler" />
                <p className="text-start text-[15px] tracking-[.1px] text-[#086C80] leading-[170%] mt-[15px]">
                    «Мы обязаны помнить об исконных российских традициях справедливости
                    и законности, помнить о том, что диктатура закона — это единственная
                    разновидность диктатуры, которой мы обязаны&nbsp;<br /> подчиняться».
                </p>
                <div className="mainArticle__user flex items-center	gap-[15px] rounded-full py-[9px] pl-[9px] pr-[20px] bg-[#F8F8F8] mt-[25px]">
                    <img className="w-[32px]" src={PersonCardImg} alt="Ellipse10" />
                    <p className="text-[15px] leading-[20px]">В.В.Путин</p>
                </div>
            </div>
        </div>
    );
};

export default EscortSidebar;