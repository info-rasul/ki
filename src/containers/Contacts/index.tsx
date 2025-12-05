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
            <div className="contact-page">
            <MetaInfo {...getRouteMetaInfo("Contacts")} />
            <Header isDarMenu={darkMenu} />
            <div className="container md:pt-16 pt-36 pb-36 h-screen">
                <div className="flex flex-col w-full md:w-[90%] md:max-w-[500px] lg:w-[400px] lg:max-w-[400px] lg:h-[551px] h-auto min-h-[400px] lg:min-h-[551px] p-6 md:p-7 lg:p-8  justify-between items-start rounded-[13px] bg-[rgba(17,17,19,0.10)] backdrop-blur-[25px] box-border">
                    {/* Title */}
                    <h2 className="w-full text-white font-normal text-[32px] md:text-[36px] lg:text-[40px] leading-[130%] md:leading-[140%] lg:leading-[140%] ">
                        Контакты
                    </h2>

                    {/* Content */}
                    <div className="flex flex-col items-start gap-10 md:gap-5 w-full">
                        {/* Address Section */}
                        <div className="flex flex-col items-start gap-5 w-full">
                            <div style={{height: "75px", width: '100%' }}></div>
                            <div className="flex justify-between items-center w-full">
                                <div className="min-h-6 flex-1 text-white font-normal text-sm md:text-[15px] lg:text-base leading-[140%] md:leading-[145%] lg:leading-[145%] ">
                                    Dubai Silicon Oasis<br />
                                    Digital Park, Building A1, Office 405<br />
                                    Dubai, UAE — P.O.Box 67473
                                </div>
                            </div>
                            <div className="w-full md:w-full lg:w-[336px] h-[1px] bg-white/20"></div>
                        </div>

                        {/* Phone Section */}
                        <div className="flex flex-col items-start gap-5 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="min-h-6 flex-1 text-white font-normal text-sm md:text-[15px] lg:text-base leading-[140%] md:leading-[145%] lg:leading-[145%] ">
                                    Phone: +971-588-403-611
                                </div>
                            </div>
                            <div className="w-full md:w-full lg:w-[336px] h-[1px] bg-white/20"></div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex flex-col items-start gap-4 w-full">
                        <a href="https://t.me/co_info" target="_blank" className="flex h-[45px] md:h-[50px] px-3 md:px-[15px] justify-between items-center w-full rounded-[13px] bg-black/20 hover:bg-black/30 transition-colors" rel="noreferrer">
      <span className="text-white font-normal text-sm md:text-[15px] lg:text-base leading-[140%] md:leading-[145%] lg:leading-[145%] ">
        Our telegram channel
      </span>
                            <svg
                                width="20"
                                height="20"
                                className="md:w-6 md:h-6 lg:w-6 lg:h-6 aspect-square"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12.626 8.66504L15.46 11.499H6.83398V12.499H15.46L12.626 15.333L13.333 16.04L17.374 11.999L13.333 7.95801L12.626 8.66504Z"
                                    fill="white"
                                    fillOpacity="0.5"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
};

export default Contacts;
