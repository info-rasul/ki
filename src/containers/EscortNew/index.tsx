// @ts-nocheck
import type { FunctionComponent } from "react";
import React, {Fragment, useState} from "react";
import {Header, MetaInfo} from "../../components";
import { getRouteMetaInfo } from "../../config/meta.config";
import BankruptcyAssistance from "./components/bankruptcy-assistance/BankruptcyAssistance";
import EscortSidebar from "./components/escort-sidebar/EscortSidebar";
import OtherServices from "./components/other-services/OtherServices";
import HomeAdvantage from "../Home/components/HomeAdvantage";

const Escort: FunctionComponent = () => {
    const { isDarkMenu } = getRouteMetaInfo("EscortNew");
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
                        Сопровождение процедуры&nbsp;<br className="max-sm:hidden"/>банкротства под ключ
                    </h1>
                    <p className="text-white opacity-60 leading-[27.2px] max-w-[900px] mt-[38px] tracking-[0.06px]">
                        Комплексное сопровождение Вашей компании на всех стадиях банкротства с целью полного
                        прекращения процедуры банкротства и сохранения Вашего бизнеса, или с целью ликвидации
                        предприятия с полным безвозвратным списанием всех долгов и с превентивным исключением рисков
                        субсидиарной ответственности. Только наши эксперты смогут собрать, легендировать и легализовать
                        доказательную базу об отсутствии наличия признаков фиктивного и преднамеренного банкротства.
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
                    <OtherServices/>
                </div>
            </div>
        </Fragment>
    );
};

export default Escort;
