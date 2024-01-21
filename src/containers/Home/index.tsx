import { MetaInfo } from "../../components";
import type { FunctionComponent } from "react";
import { getRouteMetaInfo } from "../../config/routes.config";
import React from "react";
import HomeBanner from "./components/HomeBanner";
import HomeArticle from "./components/HomeArticle";
import QuoteHome from "../../components/quote/Home";
import HomeAdvantage from "./components/HomeAdvantage";
import InformationCardHome from "../../components/information-card/Home";
import AdditionalInformationHome from "../../components/additional-information/Home";
import HomeErrorBlock from "./components/HomeErrorBlock";
import HomeGoodQuality from "./components/home-good-quality";

const Home: FunctionComponent = () => (
  <div className="view-wrapper">
    <MetaInfo {...getRouteMetaInfo("Home")} />
      <main className="">
          <HomeBanner />
          <div className="container mx-auto">
              <div className="mt-20 max-xl:mt-10 max-lg:px-4">
                  <HomeArticle />
                  <QuoteHome />
                  <HomeAdvantage />
              </div>
          </div>
          <div className="w-full  bg-[#F8F8F8]">
              <div className="container mx-auto py-20 mt-20 max-lg:px-4 max-md:py-10 max-md:px-4 max-md:mt-10">
                  <h2 className="leading-[140%] text-[30px] tracking-[-.2px] max-sm:text-[24px]">На чем мы специализируемся? </h2>
                  <div className="flex flex-wrap gap-[20px] mt-[60px] max-sm:mt-[30px] max-sm:gap-[15px]">
                      <InformationCardHome />
                      <InformationCardHome />
                      <InformationCardHome />
                      <InformationCardHome />
                      <InformationCardHome />
                      <AdditionalInformationHome />
                  </div>
                  <HomeErrorBlock />
                  <HomeGoodQuality />
              </div>
          </div>
      </main>
  </div>
);

export default Home;
