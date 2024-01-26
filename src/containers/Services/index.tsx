// @ts-ignore
import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import {Navigation, MetaInfo, Header} from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import ServicesImg from "../../assets/img/services-1.svg";
import ButtonsK from "../../components/ButtonsK";
import oneSvg from "../../assets/img/serv-add-information.svg";
import EscortCardData from "../../hooks/EscortCardData";
import OtherServicesCard from "../Escort/components/other-services/other-services-card/OtherServicesCard";
import ServicesCardData from "../../hooks/ServicesCardData";

const Services: FunctionComponent = () => {
    const namePage = "Услуги"

    return(
        /*удалил класс - container*/
        <Fragment>
            <Header />
            <div className="container">
                <MetaInfo {...getRouteMetaInfo("Services")} />
                <div className="overflow-x-hidden max-[1100px]:px-4 max-[850px]:px-4">
                    <Navigation namePage={namePage}/>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-[19px] mt-10 mb-20 max-[1090px]:flex max-[1090px]:flex-col max-[850px]:mt-5 max-[850px]:mb-[39px] max-[850px]:gap-[15px]">
                        {
                            // @ts-ignore
                            ServicesCardData.map((item, index) => {
                                return <OtherServicesCard key={index} desc={item.desc} animation={item.animation}/>

                            })
                        }
                    </div>
                    <div className="flex flex-col justify-between bg-[#097990] p-10 gap-10 mb-20 relative max-sm:p-[25px] max-sm:pt-5 max-sm:mb-10">
                        <span className="text-white	text-[25px] leading-[142%] max-sm:text-[20px] max-sm:leading-[135%]">
                          Хотите знать больше? <br className="sm:hidden max-sm:block"/> Читайте новости
                            <br className="max-sm:hidden" /> или подписывайтесь на наш телеграм канал
                        </span>
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
