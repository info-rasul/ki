import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import DownButton from "../../assets/img/down-button.svg";
import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import LegalSupport from "./components/legal-support/LegalSupport";
import BankruptcyConcept from "./components/bankruptcy-concept/BankruptcyConcept";
import SignsOfBankruptcy from "./components/signs-of-bankruptcy/SignsOfBankruptcy";
import BankruptcyAssistance from "./components/bankruptcy-assistance/BankruptcyAssistance";
import PurposesOfBankruptcy from "./components/purposes-of-bankruptcy/PurposesOfBankruptcy";
import Specialists from "./components/specialists/Specialists";
import Documentation from "./components/documentation/Documentation";
import EscortSidebar from "./components/escort-sidebar/EscortSidebar";
import OtherServices from "./components/other-services/OtherServices";
import oneSvg from "../../assets/img/Vector3.svg";
import twoSvg from "../../assets/img/cusir-code-telegram.svg";
import ButtonSocialIcon from "../../assets/img/ButtonSocial.svg";

const Escort: FunctionComponent = () => {
    const smoothScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <Fragment>
            <MetaInfo {...getRouteMetaInfo("Escort")} />
            <div className="container bg-custom-gradient">
                <div className=" w-[1440px] flex items-end justify-between px-20 pt-[179px] pb-20 max-lg:pb-[30px] max-md:px-[16px] max-sm:flex-col max-sm:items-start max-sm:pt-[105px]">
                    <h2 className="text-white text-[40px] leading-[140%] tracking-[.5px] max-lg:text-[24px] max-sm:mb-[25px] max-sm:leading-[150%]">
                        Сопровождение на всех стадия <br className="max-sm:hidden"/> банкротства в интересах должника
                    </h2>
                    {<button onClick={smoothScroll}>
                        <img className="max-sm:w-[42px] max-sm:h-[42px]" src={DownButton}
                             alt="Кнопка для прокрутки страницы вниз"/>
                    </button>}
                </div>
            </div>
            <div className="container overflow-x-hidden">
                <div className="w-[1440px]">
                    <div className="flex justify-between px-20 relative max-md:px-[16px]">
                        <div className="max-w-[900px] flex flex-col max-[1390px]:max-w-full">
                            <LegalSupport/>
                            <BankruptcyConcept/>
                            <SignsOfBankruptcy/>
                            <PurposesOfBankruptcy/>
                            <BankruptcyAssistance/>
                            <Specialists/>
                            <Documentation/>
                            <div className="min-[1439px]:hidden mt-10 relative flex flex-col  gap-[25px] bg-[#097990] w-full px-[25px] pt-5 pb-[25px] max-sm:gap-[43px]">
                                <div className="flex flex-col gap-[15px]">
                                    <h2 className="text-[20px] leading-[150%] text-white tracking-[1.2px]">
                                        Наш телеграм канал
                                    </h2>
                                    <p className="text-[15px] leading-[140%] text-[#CFF4FC] tracking-[.2px]">
                                        Наведите камеру телефона на QR код, чтобы перейти в наш телеграм
                                    </p>
                                </div>
                                <img
                                    className="w-[150px] h-[150px] max-sm:hidden"
                                    src={twoSvg}
                                    alt="QR-код для перехода в телеграм"
                                />
                                <img className="absolute top-0 right-0" src={oneSvg} alt="Фоновое изображение"/>
                                <a className="button-social cursor-pointer w-[293px] flex items-center justify-center gap-[75px] py-[10px] pb-[9px] pl-[25px] pr-[9px] rounded-full text-white text-[15px] font-medium leading-[150%] bg-white bg-opacity-[0.16] shadow-boxShadowBtn max-md:w-full max-md:py-[14px]">
                                    Telegram канал
                                </a>
                            </div>
                        </div>
                        <EscortSidebar />
                    </div>
                    <OtherServices/>
                </div>
            </div>
        </Fragment>
    );
};

export default Escort;
