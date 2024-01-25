import type { FunctionComponent } from "react";
import React, {Fragment, useEffect, useRef, useState} from "react";
import HomeGoodQualityBlock from "./HomeGoodQualityBlock";
import homeGoodQualityData from "../../../../hooks/homeGoodQualityData";
import SliderNavigation from "../../../../components/slider-navigation/sliderNavigation";

const HomeGoodQuality: FunctionComponent = () => {
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrolled = scrollContainerRef.current.scrollLeft;
            const totalWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
            const percentage = (scrolled / totalWidth) * 100;
            setScrollPercentage(percentage);
        }
    };

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);
    /*onScroll={handleScroll} ref={scrollContainerRef}*/

    return (
        <Fragment>
            <div className="flex flex-col mt-[81px] gap-10 max-sm:mt-[61px] max-[400px]:w-full">
                <div className="min-[400px]:hidden flex justify-between items-center">
                    <h2 className="text-[30px] leading-[140%] tracking-[-0.3px] max-sm:text-[24px]">Наши ценности</h2>
                    <SliderNavigation scrollPercentage={scrollPercentage} />
                </div>
                <h2 className="max-[400px]:hidden text-[30px] leading-[140%] tracking-[-0.3px] max-sm:text-[24px]">Наши ценности</h2>
                <div onScroll={handleScroll} ref={scrollContainerRef}
                     className="slider-scroll grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:gap-5 max-[400px]:flex max-[400px]:gap-[10px] max-[400px]:overflow-x-auto max-[400px]:w-screen max-[400px]:pr-[33px]">
                    {
                        homeGoodQualityData.map((item, index) => {
                            // @ts-ignore
                            return <HomeGoodQualityBlock key={index} title={item.title} desc={item.desc}/>

                        })
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default HomeGoodQuality;
