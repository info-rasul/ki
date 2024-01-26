// @ts-nocheck
import React, {useCallback, useState} from 'react';
import {useLottie} from "lottie-react";
interface AboutUsServicesCardProps {
    title: string;
    desc: string;
    animation: any;
}

const style = {
    height: 100,
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
        <div onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="card-animation-block p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[59px] w-[630px] max-lg:p-[25px] max-lg:gap-[40px] max-sm:w-full">
            <div className="card-home-animation flex">
                <LottieAnimation  />
            </div>
            <div className="card-animation-block-desc flex flex-col items-start gap-[20px] max-lg:gap-[15px]">
                <h3 className="text-[25px] leading-[140%] max-sm:text-[18px] max-sm:leading-[150%] max-sm:tracking-[-0.18px]">
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