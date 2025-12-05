// @ts-nocheck
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useLottie} from "lottie-react";
interface IOtherServicesCardProps {
    desc: string;
    path: string;
    animation: any ;
}

const style = {
    height: 100,
    width: 100,
};

const OtherServicesCard: React.FC<IOtherServicesCardProps> = ({desc, animation , path}) => {
    const [start, setStart] = useState(false)
    const refBlock = useRef();

    const LottieAnimation = (() => {
        const options = {
            animationData: animation,
            loop: true,
            autoplay: false,
        };

        const { View, play, pause } = useLottie(options, style);
        start ? play() : pause();
        return View;
    })

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // передаем пустой массив зависимостей, чтобы обработчик события resize добавлялся только один раз

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            if (windowWidth <= 640) {
                setTimeout(() => {
                    setStart(entry.isIntersecting);
                }, 1000)
            }
        });
        observer.observe(refBlock.current);
    }, []);


    const innerHtml = { __html: desc }

    return (
        <a href={path}  ref={refBlock} onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F8F8F8] hover:bg-[#e9e9e9] flex gap-[60px] items-center w-full max-[1170px]:p-[20px] max-[1170px]:gap-[25px]">
            <div className="services-animation flex">
                <LottieAnimation />
            </div>
            <div style={{ fontSize: 'clamp(16px, 1.8vw, 25px)' }} className="services-card-desc leading-[140%] max-[1080px]:text-[16px] max-[1080px]:leading-[150%] max-[1080px]:tracking-[-0.16px]" dangerouslySetInnerHTML={{__html: desc}} />
        </a>
    );
};

export default OtherServicesCard;