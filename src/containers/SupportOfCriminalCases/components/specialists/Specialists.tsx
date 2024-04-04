import React, {useEffect, useRef, useState} from 'react';
import oneSvg from "../../../../assets/img/card-img.jpg";
import oneSvg1 from "../../../../assets/img/card-img-1.jpg";
import SliderNavigation from "../../../../components/slider-navigation/sliderNavigation";

const Specialists = () => {
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
        <div>
            <div style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[150%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[60px] max-sm:mb-[30px] max-sm:tracking-normal">
                Специалисты
            </div>

            <div onScroll={handleScroll} ref={scrollContainerRef}
                className="slider-scroll flex gap-[20px] max-sm:flex max-sm:gap-[10px] max-sm:overflow-x-auto max-sm:w-screen max-sm:pr-[33px] ">
                <div className="flex flex-col gap-[20px] max-sm:gap-[15px]">
                    <img className="max-sm:h-[320px] object-cover" src={oneSvg} alt="Изображение" />
                    <div className="flex flex-col gap-[5px]">
                        <p className="text-[20px] leading-[145%] max-sm:text-[18px] max-sm:leading-[150%] tracking-[-0.18px]">Сергей Гаврилов</p>
                        <p className="text-[15px] leading-[170%] max-sm:w-[320px]">
                            Эксперт в области юриспруденции
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-[20px] max-sm:gap-[15px] max-sm:">
                    <img className="max-sm:h-[320px] object-cover" src={oneSvg1} alt="Изображение" />
                    <div className="flex flex-col gap-[5px]">
                        <p className="text-[20px] leading-[145%] max-sm:text-[18px] max-sm:leading-[150%] tracking-[-0.18px]">Юлия Петрова</p>
                        <p className="text-[15px] leading-[170%] max-sm:w-[320px]">
                            Эксперт в области юриспруденции
                        </p>
                    </div>
                </div>
                <div className="sm:hidden flex flex-col gap-[20px] max-sm:gap-[15px]">
                    <img className="max-sm:h-[320px] object-cover" src={oneSvg} alt="Изображение" />
                    <div className="flex flex-col gap-[5px]">
                        <p className="text-[20px] leading-[145%] max-sm:text-[18px] max-sm:leading-[150%] tracking-[-0.18px]">Сергей Гаврилов</p>
                        <p className="text-[15px] leading-[170%] max-sm:w-[320px]">
                            Эксперт в области юриспруденции
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:hidden w-full flex justify-center mt-[30px]">
                <SliderNavigation scrollPercentage={scrollPercentage}/>
            </div>
        </div>
    );
};

export default Specialists;