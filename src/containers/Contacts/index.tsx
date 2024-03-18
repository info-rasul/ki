import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import {Header, MetaInfo, Navigation} from "../../components";
import { getRouteMetaInfo } from "../../config/meta.config";
import QRCodeContacts from "../../components/qr-code/Contacts";

const Contacts: FunctionComponent = () => {
    const namePage = "Контакты"
    const { isDarkMenu } = getRouteMetaInfo("Contacts");
    const darkMenu = !!isDarkMenu;
    return (
        <Fragment>
            <MetaInfo {...getRouteMetaInfo("Contacts")} />
            <Header isDarMenu={darkMenu} />
            <div className="container">
                <div className="pb-10 max-xl:px-4">
                    <Navigation namePage={namePage}/>
                    <div className="contacts-banner ">
                        <div
                            className="contacts-banner-img flex justify-between p-[45px] pb-[92px] mt-10 mb-[20px] max-lg:p-[25px] gap-x-5 max-[880px]:flex-col max-md:mb-10"
                            itemScope itemType="http://schema.org/Organization"
                        >
                            <div className="flex flex-col gap-2.5 max-md:gap-[5px]" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                <p className="text-white text-[25px] leading-[145%] max-sm:text-[15px] opacity-60">Адрес:</p>
                                <a style={{ fontSize: 'clamp(18px, 1.8vw, 25px)' }} className="text-white leading-[145%] max-sm:text-[18px]">
                                    <span>ММДЦ “Москва-Сити” Башня <br className="lg:hidden"/> Федерация,<br className="max-lg:hidden"/></span>
                                    <span itemProp="addressLocality">Москва </span>
                                    <span itemProp="streetAddress">Пресненская наб. д. 12, офис 85</span>
                                </a>
                            </div>
                            <div className="h-px bg-[#E6E6E6] my-[25px] min-[881px]:hidden"></div>
                            <div className="flex flex-col gap-[25px] w-[350px] max-[880px]:w-full max-md:gap-0">
                                <div className="flex flex-col gap-[5px]">
                                    <p
                                        style={{ fontSize: 'clamp(15px, 1.8vw, 25px)' }}
                                        className="text-white leading-[145%] max-sm:text-[15px] opacity-60">
                                        Тел.:
                                    </p>
                                    <span
                                        style={{ fontSize: 'clamp(18px, 1.8vw, 25px)' }}
                                        className="text-white leading-[145%] max-sm:text-[18px] cursor-pointer"
                                        itemProp="telephone"
                                    >
                                        +7 495 248-37-37
                                    </span>
                                </div>
                                <div className="flex flex-col gap-[5px] max-md:mt-[15px]">
                                    <p style={{ fontSize: 'clamp(15px, 1.8vw, 25px)' }} className="text-white leading-[145%] max-sm:text-[15px] opacity-60">
                                        Факс:
                                    </p>
                                    <span
                                        style={{ fontSize: 'clamp(18px, 1.8vw, 25px)' }}
                                        className="text-white leading-[145%] max-sm:text-[18px] cursor-pointer"
                                        itemProp="faxNumber"
                                    >
                                        495 248-36-49
                                    </span>
                                </div>
                                <div className="h-px bg-[#E6E6E6] mt-[4px] max-md:my-[25px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p style={{ fontSize: 'clamp(15px, 1.8vw, 25px)' }} className="text-white leading-[145%] max-sm:text-[15px] opacity-60">
                                        Эл. почта:
                                    </p>
                                    <span
                                        style={{ fontSize: 'clamp(18px, 1.8vw, 25px)' }}
                                        className="text-white leading-[145%] max-sm:text-[18px] cursor-pointer"
                                        itemProp="email"
                                    >
                                        info@ki112.ru
                                    </span>
                                </div>
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
