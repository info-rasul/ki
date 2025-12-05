// @ts-ignore
import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import {Navigation, MetaInfo, Header} from "../../components";
import { getRouteMetaInfo } from "../../config/meta.config";
import ButtonsK from "../../components/ButtonsK";
import oneSvg from "../../assets/img/serv-add-information.svg";
import OtherServicesCard from "../EscortNew/components/other-services/other-services-card/OtherServicesCard";
import ServicesCardData from "../../hooks/ServicesCardData";

const Services: FunctionComponent = () => {
    const namePage = "Услуги"
    const { isDarkMenu } = getRouteMetaInfo("Services");
    const darkMenu = !!isDarkMenu;

    return(
        /*удалил класс - container*/
        <Fragment>
            <Header isDarMenu={darkMenu} />
            <div className="container">
                <MetaInfo {...getRouteMetaInfo("Services")} />
                <div className="overflow-x-hidden max-[1100px]:px-4 max-[850px]:px-4">
                    <Navigation namePage={namePage}/>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-[19px] mt-10 mb-20 max-[1090px]:flex max-[1090px]:flex-col max-[850px]:mt-5 max-[850px]:mb-[39px] max-[850px]:gap-[15px]">
                        {
                            // @ts-ignore
                            ServicesCardData.map((item, index) => {
                                return <OtherServicesCard key={index} desc={item.desc} animation={item.animation} path={item.path}/>
                            })
                        }
                    </div>
                    <div className="flex flex-col justify-between bg-[#097990] p-10 gap-10 mb-20 relative max-sm:p-[25px] max-sm:pt-5 max-sm:mb-10">
                        <div style={{ fontSize: 'clamp(20px, 1.8vw, 25px)' }} className="text-white	text-[25px] leading-[142%] max-sm:text-[20px] max-sm:leading-[135%]">
                          Хотите знать больше?&nbsp;<br className="sm:hidden max-sm:block"/>Читайте новости
                           &nbsp;<br className="max-sm:hidden" />или подписывайтесь на наш телеграм-канал
                        </div>
                        <div className="flex justify-start max-sm:mt-[-1px]">
                            <ButtonsK />
                        </div>
                        <img
                            className="absolute top-0 right-[34px] max-sm:hidden"
                            src={oneSvg}
                            alt="Vector"
                        />
                    </div>
                </div>
            </div>
        </Fragment>

    )
};

export default Services;
