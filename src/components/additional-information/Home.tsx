import type { FunctionComponent } from 'react';
import oneSvg from '../assets/img/ServAddInformation1.svg';

const AdditionalInformationHome: FunctionComponent = () => (
    <div className="flex flex-col justify-between bg-[#097990] p-[45px] gap-10 relative max-[1439px]:w-full max-sm:mt-[65px] px-[25px] pb-[25px] pt-[20px]">
    <span className="text-white	text-[30px] leading-[145%] tracking-[.27px] max-sm:text-[20px] max-sm:leading-[135%]">
        Хотите знать больше? <br /> Читайте новости или подписывайтесь <br className="max-sm:hidden" /> на наш телеграм канал
    </span>
        @@include("../buttons/index.html")
        <img className="absolute bottom-0 min-[1440px]:left-0 max-[1439px]:right-0 max-sm:hidden" src={oneSvg} alt="Vector" />
    </div>
);

export default AdditionalInformationHome;
