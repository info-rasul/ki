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
import HomeAdvantage from "../Home/components/HomeAdvantage";

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
            <div className=" bg-custom-gradient">
                <Header isDarMenu={darkMenu} />
                <div className="container max-[1080px]:px-4 pt-[56px] pb-20 max-lg:pb-[30px] max-[1030px]:pt-[105px]  max-sm:flex-col max-sm:items-start">
                    <h1 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)' }} className="text-white leading-[140%] max-lg:text-[24px] max-sm:mb-[25px] max-sm:leading-[150%]">
                        Сопровождение на всех <br className="sm:hidden"/> стадиях <br className="max-sm:hidden"/> банкротства в <br className="sm:hidden"/> интересах должника
                    </h1>
                    <p className="text-white leading-[27.2px] max-w-[900px] mt-[38px] tracking-[0.06px]">
                        Комплексное сопровождение расследования сложных много эпизодных уголовных дел экономической
                        направленности, в том числе контрабанда, неуплата налогов, коррупционные действия,
                        неисполнение обязательств по договорам, корпоративные и арбитражные споры,
                        осложненные уголовно-правовым элементом, преднамеренное банкротство, фиктивное банкротство,
                        заказные дела со стороны бизнес-конкурентов и партнеров по бизнесу.
                        Наши эксперты успешно добиваются прекращения уголовных дел органами следствия
                        на стадии предварительного следствия.
                    </p>
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
                        </div>
                        <EscortSidebar />
                    </div>
                    <div className="mt-[-46px] mb-[40px] max-[1080px]:mx-[16px]">
                        <HomeAdvantage/>
                    </div>
                    <OtherServices/>
                </div>
            </div>
        </Fragment>
    );
};

export default Escort;
