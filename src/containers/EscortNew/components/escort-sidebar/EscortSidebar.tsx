import React, {useEffect, useState} from 'react';
import QRCodeServices from "../../../../components/qr-code/Services";
import oneSvg from "../../../../assets/img/quote.svg";
import oneSvg1 from "../../../../assets/img/quote-1.svg";
type MyArrayProps = {
    sidebarDesc: string[];
};
const EscortSidebar: React.FC<MyArrayProps> = ({sidebarDesc}) => {
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
        <div className="escort__sidebar flex flex-col gap-[120px] pt-20 right-20 max-[1080px]:hidden">
            <QRCodeServices />
            <div className="flex flex-col items-start justify-center bg-[#086c801a] w-[300px] p-[25px]">
                <img className="w-[24px] h-[18px] mt-[4px]" src={oneSvg} alt="gobbler" />
                <p className="text-start text-[15px] tracking-[.1px] text-[#086C80] leading-[25.5px] mt-[20px]">
                    Мы не предлагаем в сложных обстоятельствах призрачную надежду или веру в счастливый случай,
                    не работаем с прицелом на почасовую оплату, «гонорар успеха» и не заключаем невыгодных сделок для
                    быстрого разрешения дела, а бьем точно в цель — оказываем профессиональную помощь,
                    которая способна в корне изменить ситуацию и решить ваши проблемы в объективной реальности.
                </p>
                {/*<div className="mainArticle__user flex items-center	gap-[15px] rounded-full py-[9px] pl-[9px] pr-[20px] bg-[#F8F8F8] mt-[25px]">
                    <img className="w-[32px]" src={PersonCardImg} alt="Ellipse10" />
                    <p className="text-[15px] leading-[20px]">В.В.Путин</p>
                </div>*/}
            </div>
            <div className="flex flex-col p-[25px] pt-[30px] gap-[20px] bg-black w-[300px]">
                <img className="w-[24px] h-[18px] mt-[4px]" src={oneSvg1} alt="gobbler" />
                <p  className="sidebar-desc text-start text-[20px] tracking-[.1px] text-white leading-[34px]">
                    {sidebarDesc[0]}
                </p>
                <p className="text-start text-[15px] tracking-[.1px] text-white leading-[25.5px]">
                    {sidebarDesc[1]}
                </p>
                <p className="text-start text-[15px] tracking-[.1px] text-white leading-[25.5px]">
                    {sidebarDesc[2]}
                </p>
            </div>
        </div>
    );
};

export default EscortSidebar;