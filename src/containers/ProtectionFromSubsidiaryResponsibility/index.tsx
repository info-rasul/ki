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
import EscortCardData from "../../hooks/EscortCardData";
import OtherServicesCard from "./components/other-services/other-services-card/OtherServicesCard";
import ProtectionFromSubsidiaryResponsibilityData from "../../hooks/ProtectionFromSubsidiaryResponsibilityData";
import HomeAdvantage from "../Home/components/HomeAdvantage";

const ProtectionFromSubsidiaryResponsibility: FunctionComponent = () => {
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

    return (
        <Fragment>
            <MetaInfo {...getRouteMetaInfo("Escort")} />
            <div className=" bg-custom-gradient">
                <Header isDarMenu={darkMenu} />
                <div className="container max-[1080px]:px-4 pt-[56px] pb-20 max-lg:pb-[30px] max-[1030px]:pt-[105px]  max-sm:flex-col max-sm:items-start">
                    <h1 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)' }} className="text-white leading-[140%] max-lg:text-[24px] max-sm:mb-[25px] max-sm:leading-[150%]">
                        Защита от субсидиарной <br/> ответственности
                    </h1>
                    <p className="text-white leading-[27.2px] max-w-[900px] mt-[38px] tracking-[0.06px]">
                        Наши специалисты оказывают комплекс услуг по защите от субсидиарной ответственности,
                        включающий в себя полный и всесторонний анализ финансово-хозяйственной деятельности
                        вашего бизнеса, сделок (в т. ч. направленных на вывод активов) и деятельности руководящих лиц,
                        а также в случае наличия конфликтов с партнерами или острых имущественных споров.
                        Мы практикуем как превентивные меры по оценке характера и степени угрозы,
                        так и радикальные - в случаях инициации процедуры банкротства или предъявлении требований
                        со стороны кредиторов.
                    </p>
                </div>
            </div>
            <div className="container overflow-x-hidden">
                <div className="">
                    <div className="flex justify-between gap-5 relative max-[1080px]:px-[16px]">
                        <div className="max-w-[900px] flex flex-col max-[1080px]:max-w-full">
                           <BankruptcyAssistance styles={styles}/>
                        </div>
                        <EscortSidebar />
                    </div>
                    <div className="mt-[-46px] mb-[40px] max-[1080px]:mx-[16px]">
                        <HomeAdvantage/>
                    </div>
                    <div className="flex flex-col pb-[80px] max-[1080px]:px-[16px] max-sm:pb-[40px]">
                        <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[145%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[40px] max-sm:mb-[30px]">
                            Другие услуги
                        </h2>
                        <div className="grid grid-cols-2 gap-5 max-sm:gap-[15px] max-[1080px]:flex max-[1080px]:flex-wrap">
                            {
                                // @ts-ignore
                                ProtectionFromSubsidiaryResponsibilityData.map((item, index) => {
                                    return <OtherServicesCard key={index} desc={item.desc} animation={item.animation} path={item.path}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProtectionFromSubsidiaryResponsibility;
