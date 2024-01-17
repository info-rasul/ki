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
                <div className=" w-[1440px] flex items-end justify-between px-20 pt-[179px] pb-20 ">
                    <h2 className="text-white text-[40px] leading-[140%] tracking-[.5px]">
                        Сопровождение на всех стадия <br/> банкротства в интересах должника
                    </h2>
                    {<button onClick={smoothScroll}>
                        <img className="max-sm:w-[42px] max-sm:h-[42px]" src={DownButton}
                             alt="Кнопка для прокрутки страницы вниз"/>
                    </button>}
                </div>
            </div>
            <div className="container">
                <div className="w-[1440px]">
                    <div className="flex justify-between px-20 relative">
                        <div className="max-w-[900px] flex flex-col">
                            <LegalSupport/>
                            <BankruptcyConcept/>
                            <SignsOfBankruptcy/>
                            <PurposesOfBankruptcy/>
                            <BankruptcyAssistance/>
                            <Specialists/>
                            <Documentation/>
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
