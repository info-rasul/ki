// @ts-nocheck
import type { FunctionComponent } from "react";
import React, {Fragment, useEffect, useRef, useState} from "react";
import DownButton from "../../assets/img/down-button.svg";
import {Header, MetaInfo} from "../../components";
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
import oneSvg from "../../assets/img/vector-3.svg";
import twoSvg from "../../assets/img/cusir-code-telegram.svg";

const Escort: FunctionComponent = () => {
    const { isDarkMenu } = getRouteMetaInfo("Escort");
    const darkMenu = !!isDarkMenu;
    const smoothScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
    const [downButton, setDownButton] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 200) {
            setDownButton(true)
        } else if (window.scrollY < 2) {
            setDownButton(false)
        }
    } )

    const styles = {
        borderLeft: '4px solid var(--700, #097990)',
        background: 'rgba(8, 108, 128, 0.10)',
    };

    /*const handleScroll = () => {
        const sidebar = document.querySelector('.services-sidebar');
        console.log(window.scrollY, 'window.scrollY')
        if (sidebar && window.scrollY > 445  && window.scrollY < 6125) {
            sidebar.classList.add('services-sidebar-fixed');
            sidebar.classList.remove('services-sidebar-fixed-bottom');
        } else if (sidebar  && window.scrollY > 445 && window.scrollY > 6125) {
            sidebar.classList.remove('services-sidebar-fixed');
            sidebar.classList.add('services-sidebar-fixed-bottom');
        } else  if (sidebar && window.scrollY < 445) {
            sidebar.classList.remove('services-sidebar-fixed');
            sidebar.classList.remove('services-sidebar-fixed-bottom');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);*/

    return (
        <Fragment>
            <MetaInfo {...getRouteMetaInfo("Escort")} />
            <div className=" bg-custom-gradient max-sm:h-[310px]">
                <Header isDarMenu={darkMenu} />
                <div className="container max-[1080px]:px-4 flex items-end justify-between  pt-[56px] pb-20 max-lg:pb-[30px] max-[1030px]:pt-[105px]  max-sm:flex-col max-sm:items-start">
                    <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)' }} className="text-white leading-[140%] max-lg:text-[24px] max-sm:mb-[25px] max-sm:leading-[150%]">
                        Сопровождение на всех <br className="sm:hidden"/> стадиях <br className="max-sm:hidden"/> банкротства в <br className="sm:hidden"/> интересах должника
                    </h2>
                    {<button onClick={smoothScroll}>
                        <img style={{ display: downButton ? 'none' : 'block' }} className="max-sm:w-[42px] max-sm:h-[42px]" src={DownButton}
                             alt="Кнопка для прокрутки страницы вниз"/>
                    </button>}
                </div>
            </div>
            <div className="container overflow-x-hidden">
                <div className="">
                    <div className="flex justify-between gap-5 relative max-[1080px]:px-[16px]">
                        <div className="max-w-[900px] flex flex-col max-[1080px]:max-w-full">
                            <LegalSupport/>
                            <BankruptcyConcept styles={styles}/>
                            <SignsOfBankruptcy styles={styles}/>
                            <PurposesOfBankruptcy/>
                            <BankruptcyAssistance styles={styles}/>
                            <Specialists/>
                            <Documentation/>
                            <div className="min-[1081px]:hidden mt-10 relative flex flex-col gap-[25px] bg-[#097990] w-full p-[25px] pt-5 max-sm:gap-[40px]">
                                <div className="flex flex-col gap-[15px]">
                                    <h2 className="text-[22px] leading-[135%] text-white">
                                        Наш телеграм канал
                                    </h2>
                                    <p className="text-[15px] leading-[150%] text-[#CFF4FC]">
                                        Наведите камеру телефона на QR код, чтобы перейти в наш телеграм
                                    </p>
                                </div>
                                <img
                                    className="w-[150px] h-[150px] max-sm:hidden"
                                    src={twoSvg}
                                    alt="QR-код"
                                />
                                <img className="absolute top-0 right-0" src={oneSvg} alt="Фон"/>
                                <a className="button-social cursor-pointer w-[293px] flex items-center justify-center gap-[75px] py-[10px] pb-[9px] pl-[25px] pr-[9px] rounded-full text-white text-[15px] font-medium leading-[150%] bg-white bg-opacity-[0.16] shadow-boxShadowBtn max-md:w-full max-md:py-[14px]">
                                    Telegram канал
                                </a>
                            </div>
                        </div>
                       {/* <div className="services-sidebar">
                            <EscortSidebar />
                        </div>*/}
                        <EscortSidebar />
                    </div>
                    <OtherServices/>
                </div>
            </div>
        </Fragment>
    );
};

export default Escort;
