// @ts-ignore
import { MetaInfo } from "../../components";
import type { FunctionComponent } from "react";
import { getRouteMetaInfo } from "../../config/meta.config";
import React, { lazy } from "react";
import InformationCardHomeData from "../../hooks/InformationCardHomeData";

const HomeBanner = lazy(() => import('./components/HomeBanner'));
const HomeArticle = lazy(() => import('./components/HomeArticle'));
const QuoteHome = lazy(() => import('../../components/quote/Home'));
const HomeAdvantage = lazy(() => import('./components/HomeAdvantage'));
const AdditionalInformationHome = lazy(() => import('../../components/additional-information/Home'));
const InformationCardHome = lazy(() => import('../../components/information-card/Home'));
const HomeErrorBlock = lazy(() => import('./components/HomeErrorBlock'));
const HomeGoodQuality = lazy(() => import('./components/home-good-quality'));

const Home: FunctionComponent = () => {
    return (
        <div className="view-wrapper">
            <MetaInfo {...getRouteMetaInfo("Home")} />
            <main className="">
                <HomeBanner/>
                <div className="container ">
                    <div className="mt-20 max-xl:mt-10 max-[1080px]:px-4 max-sm:mt-[42px]">
                        <HomeArticle/>
                        <QuoteHome/>
                        <HomeAdvantage/>
                    </div>
                </div>
                <div className="w-full  bg-[#F8F8F8]">
                    <div className="container mx-auto py-20 mt-20 max-[1080px]:px-4 max-md:pt-10 max-md:pb-[41px] max-md:px-4 max-md:mt-10">
                        <h2 className="leading-[140%] text-homeSpecialization tracking-[-0.3px] max-sm:text-[24px] max-sm:tracking-normal">
                            На чем мы&nbsp;<br className="sm:hidden"/>специализируемся?
                        </h2>
                        <div className="grid grid-cols-2 mt-[60px] gap-5 max-lg:grid-cols-1 max-sm:mt-[31px] max-sm:gap-[15px]">
                            {
                                // @ts-ignore
                                InformationCardHomeData.map((item, index) => {
                                    return <InformationCardHome
                                        key={index}
                                        link={item.link}
                                        title={item.title}
                                        desc={item.desc}
                                        animation={item.animation}
                                    />

                                })
                            }

                        </div>
                        <div className="grid grid-cols-1 mt-[60px] gap-5 max-lg:grid-cols-1 max-sm:mt-[31px] max-sm:gap-[15px]">
                            <AdditionalInformationHome/>
                        </div>
                        <HomeErrorBlock/>
                        <HomeGoodQuality/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
