// @ts-nocheck
import React, {useCallback, useState} from 'react';
import {useLottie} from "lottie-react";
interface AboutUsServicesCardProps {
    title: string;
    desc: string;
    animation: any;
}

const style = {
    height: 130,
};

const AboutUsServicesCard: React.FC<AboutUsServicesCardProps> = ({title, desc, animation }) => {
    const [start, setStart] = useState(false)
//@ts-ignore
    const LottieAnimation = useCallback(() => {
        const options = {
            animationData: animation,
            loop: true,
            autoplay: false,
        };

        const { View, play, pause } = useLottie(options, style);
        start ? play() : pause();
        return View;
    }, [start])

    return (
        <div onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[59px] w-[630px] max-lg:p-[25px] max-lg:gap-[43px] max-sm:w-full">
            <div className="card-home-animation flex">
                <LottieAnimation  />
            </div>
            <div className="flex flex-col items-start gap-[20px] max-lg:gap-[16px]">
                <h3 className="text-[25px] leading-[140%] tracking-[0.3px] max-sm:text-[18px] max-sm:leading-[130%]">
                    {title}
                </h3>
                <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default AboutUsServicesCard;