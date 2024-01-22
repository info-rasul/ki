import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import {Header, MetaInfo, Navigation} from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import QRCodeContacts from "../../components/qr-code/Contacts";

const Contacts: FunctionComponent = () => {
    const namePage = "Контакты"

    return (
        <Fragment>
            <MetaInfo {...getRouteMetaInfo("Contacts")} />
            <Header />
            <div className="container">
                <div className="pt-[120px] pb-10 max-xl:px-4 max-md:pt-[53px]">
                    <Navigation namePage={namePage}/>
                    <div
                        className="contacts-banner flex justify-between p-[45px] pb-[92px] mt-10 mb-[21px] max-lg:p-[25px] gap-x-5 max-[880px]:flex-col max-md:mb-[38px]">
                        <div className="flex flex-col gap-2.5 max-md:gap-[5px]">
                            <p className="text-white text-[25px] leading-[145%] max-md:text-[15px] opacity-60">Адрес:</p>
                            <a className="text-white text-[25px] leading-[145%] tracking-[.23px] max-md:text-[18px]"
                               href="https://www.google.com/maps/search/55.7501782017501, 37.53812159079294">
                                ММДЦ “Москва-Сити” Башня <br className="lg:hidden"/> Федерация,<br
                                className="max-lg:hidden"/> Москва Пресненская наб. д. 12, офис 85
                            </a>
                        </div>
                        <div className="h-px bg-[#E6E6E6] mb-[25px] mt-[24px] min-[880px]:hidden"></div>
                        <div className="flex flex-col gap-[25px] w-[350px] max-md:w-full max-md:gap-0">
                            <div className="flex flex-col gap-[5px]">
                                <p className="text-white text-[25px] leading-[145%] max-md:text-[15px] opacity-60">Тел.:</p>
                                <a className="text-white text-[25px] leading-[145%] max-md:text-[18px]"
                                   href="tel:+74950883333">+7
                                    495 088-33-33</a>
                            </div>
                            <div className="flex flex-col gap-[5px] max-md:mt-[15px]">
                                <p className="text-white text-[25px] leading-[145%] tracking-[1.3px] max-md:text-[15px] opacity-60">Факс:</p>
                                <a className="text-white text-[25px] leading-[145%] max-md:text-[18px]"
                                   href="tel:+74955325364">+7
                                    495 532-53-64</a>
                            </div>
                            <div className="h-px bg-[#E6E6E6] mt-[4px] max-md:my-[25px]"></div>
                            <div className="flex flex-col gap-[5px]">
                                <p className="text-white text-[25px] leading-[145%] max-md:text-[15px] opacity-60">Эл.
                                    почта:</p>
                                <a href="mailto:info@ki112.ru"
                                   className="text-white text-[25px] leading-[145%] tracking-[-0.25px] max-md:text-[18px]">info@ki112.ru</a>
                            </div>
                        </div>
                    </div>
                    <QRCodeContacts/>
                </div>
            </div>
        </Fragment>
    );
};

export default Contacts;
