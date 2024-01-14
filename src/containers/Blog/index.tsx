import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import { Navigation, MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import AdditionalInformation from "../../components/additional-information/Services";
import BlogCard from "./components/blog-card/BlogCard";

const Services: FunctionComponent = () => (
    <Fragment>
        <MetaInfo {...getRouteMetaInfo("Blog")} />
        <div className="px-20 pt-[120px] max-xl:px-4 max-xl:pt-[53px] pb-10">
            <Navigation />
            @@include("components/blog-navigation/index.html")
            <div
                className="blog__card flex flex-wrap mb-10 mt-[70px] gap-10 max-xl:mt-10 max-[1439px]:justify-between max-sm:gap-5 max-sm:mb-[21px]">
                @@include("components/blog-card/index.html")
                @@include("components/blog-card/index.html")
                @@include("components/blog-card/index.html")
                <div className="w-screen h-px bg-[#E6E6E6] mt-[29px] max-[1439px]:hidden"></div>
                @@include("components/blog-card/index.html")
                @@include("components/blog-card/index.html")
                @@include("components/blog-card/index.html")
                <div className="w-screen h-px bg-[#E6E6E6] mt-[29px] max-[1439px]:hidden"></div>
                @@include("components/blog-card/index.html")
                @@include("components/blog-card/index.html")
                @@include("components/blog-card/index.html")
            </div>
            <div className="my-20 flex justify-center max-sm:my-0">
                @@include("components/blog-pagination/index.html")
            </div>
        </div>
    </Fragment>
);

export default Services;
