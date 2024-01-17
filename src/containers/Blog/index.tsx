import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import { Navigation, MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import BlogCard from "./components/blog-card/BlogCard";
import BlogNavigation from "./components/blog-navigation/BlogNavigation";
import BlogPagination from "./components/blog-pagination/BlogPagination";

const Services: FunctionComponent = () => {
    const namePage = "Блог"

    return (
        <Fragment>
            <MetaInfo {...getRouteMetaInfo("Blog")} />
            <div className="container">
                <div className="w-[1440px] px-20 pt-[120px] max-xl:px-4 max-xl:pt-[53px] pb-10">
                    <Navigation namePage={namePage}/>
                    <BlogNavigation/>
                    <div className="blog__card flex flex-wrap mb-10 mt-[70px] gap-10 max-xl:mt-10 max-[1439px]:justify-between max-sm:gap-5 max-sm:mb-[21px]">
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <div className="w-screen h-px bg-[#E6E6E6] mt-[27px] max-[1439px]:hidden"></div>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <div className="w-screen h-px bg-[#E6E6E6] mt-[27px] max-[1439px]:hidden"></div>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                    <div className="mt-20 mb-[39px] flex justify-center max-sm:my-0">
                        <BlogPagination/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Services;
