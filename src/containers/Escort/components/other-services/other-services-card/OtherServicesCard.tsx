// @ts-nocheck
import React, {useCallback, useState} from 'react';
import {useLottie} from "lottie-react";
interface IOtherServicesCardProps {
    desc: string;
    animation: any;
}

const style = {
    height: 100,
    width: 100,
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
        <a href="/escort" onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center w-full max-[1170px]:p-[20px] max-[1170px]:gap-[25px]">
            <div className="services-animation flex">
                <LottieAnimation />
            </div>
            <div className="services-card-desc leading-[140%] text-[25px] max-[1080px]:text-[16px] max-[1080px]:leading-[150%] max-[1080px]:tracking-[-0.16px]">
                <div dangerouslySetInnerHTML={{__html: desc}} />
            </div>
        </a>
    );
};

export default OtherServicesCard;