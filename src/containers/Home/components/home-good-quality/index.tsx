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
            <div className="flex flex-col mt-[81px] gap-10 max-sm:mt-[61px] max-sm:w-full max-sm:gap-[35px]">
                <div className="sm:hidden flex justify-between items-center">
                    <h2 className="text-[24px] leading-[140%]">Наши ценности</h2>
                    <SliderNavigation scrollPercentage={scrollPercentage} />
                </div>
                <div style={{ fontSize: 'clamp(24px, 2.1vw, 30px)' }} className="max-sm:hidden leading-[140%] tracking-[-0.3px]">Наши ценности</div>
                <div onScroll={handleScroll} ref={scrollContainerRef}
                     className="slider-scroll w-full flex gap-6 max-lg:flex-col max-lg:gap-5 max-sm:flex-row max-sm:gap-[10px] max-sm:overflow-x-auto">
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
