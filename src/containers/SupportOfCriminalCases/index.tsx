// @ts-nocheck
import type { FunctionComponent } from "react";
import React, {Fragment, useState} from "react";
import {Header, MetaInfo} from "../../components";
import { getRouteMetaInfo } from "../../config/meta.config";
import BankruptcyAssistance from "./components/bankruptcy-assistance/BankruptcyAssistance";
import OtherServicesCard from "./components/other-services/other-services-card/OtherServicesCard";
import SupportOfCriminalCasesData from "../../hooks/SupportOfCriminalCasesData";
import HomeAdvantage from "../Home/components/HomeAdvantage";
import EscortSidebar from "../../components/escort-sidebar/EscortSidebar";

const SupportOfCriminalCases: FunctionComponent = () => {
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
            <MetaInfo {...getRouteMetaInfo("SupportOfCriminalCases")} />
            <div className="bg-custom-gradient">
                <Header isDarMenu={darkMenu} />
                <div className="container max-[1080px]:px-4 pt-[56px] pb-20 max-lg:pb-[30px] max-[1030px]:pt-[105px]  max-sm:flex-col max-sm:items-start">
                    <h1 style={{ fontSize: 'clamp(24px, 2.8vw, 40px)' }} className="text-white leading-[56px] tracking-[0.2px] max-lg:text-[24px] max-sm:mb-[25px] max-sm:leading-[150%]">
                        Сопровождение уголовных дел
                    </h1>
                    <p className="text-white opacity-60 leading-[27.2px] max-w-[900px] mt-[38px] tracking-[0.06px]">
                        Комплексное сопровождение расследования сложных многоэпизодных уголовных дел экономической
                        направленности, в том числе контрабанда, неуплата налогов, коррупционные действия,
                        неисполнение обязательств по договорам, корпоративные и арбитражные споры,
                        осложненные уголовно-правовым элементом,преднамеренное банкротство, фиктивное банкротство,
                        заказные дела со стороны бизнес-конкурентов и партнеров по бизнесу.
                        Наши эксперты успешно добиваются прекращения уголовных дел органами
                        следствия на стадии предварительного расследования.
                    </p>
                </div>
            </div>
            <div className="container overflow-x-hidden">
                <div className="">
                    <div className="flex justify-between gap-5 relative max-[1080px]:px-[16px]">
                        <div className="w-[900px] flex flex-col max-[1310px]:w-[760px] max-[1160px]:w-[720px] max-[1080px]:w-full">
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
                                SupportOfCriminalCasesData.map((item, index) => {
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

export default SupportOfCriminalCases;
