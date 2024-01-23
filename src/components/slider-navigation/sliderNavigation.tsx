import React from 'react';
type SliderNavigationProps = {
    scrollPercentage: number;
};

const SliderNavigation: React.FC<SliderNavigationProps> = ({ scrollPercentage }) => {
    return (
        <div className="flex justify-center gap-[5px]">
            <div style={{borderColor: scrollPercentage < 30 ? '#097990' : '#CCC'}}
                className="slider__navigation1 flex justify-center items-center w-[14px] h-[14px] rounded-full border-[1px] p-[2px]">
                <div style={{background: scrollPercentage < 30 ? '#097990' : 'inherit'}} className="w-[6px] h-[6px] rounded-full "></div>
            </div>
            <div style={{borderColor: scrollPercentage > 30 && scrollPercentage < 80 ? '#097990' : '#CCC'}}
                className="slider__navigation2 flex justify-center items-center w-[14px] h-[14px] rounded-full border-[1px] p-[2px] border-[#CCC]">
                <div style={{background: scrollPercentage > 30 && scrollPercentage < 80 ? '#097990' : 'inherit'}} className="w-[6px] h-[6px] rounded-full "></div>
            </div>
            <div style={{borderColor: scrollPercentage > 80 ? '#097990' : '#CCC'}}
                className="slider__navigation3 flex justify-center items-center w-[14px] h-[14px] rounded-full border-[1px] p-[2px] border-[#CCC]">
                <div style={{background: scrollPercentage > 80 ? '#097990' : 'inherit'}} className="w-[6px] h-[6px] rounded-full "></div>
            </div>
        </div>
    );
};

export default SliderNavigation;