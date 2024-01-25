// @ts-nocheck
import React, {useCallback, useState} from 'react';
import {useLottie} from "lottie-react";
interface IOtherServicesCardProps {
    desc: string;
    animation: any;
}

const style = {
    height: 100,
};

const OtherServicesCard: React.FC<IOtherServicesCardProps> = ({desc, animation }) => {
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

    const innerHtml = { __html: desc }

    return (
        <a href="/escort" onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
            <div className="services-animation flex">
                <LottieAnimation />
            </div>
            <p className="services-card-desc leading-[143%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">
                <div dangerouslySetInnerHTML={{__html: desc}} />
            </p>
        </a>
    );
};

export default OtherServicesCard;