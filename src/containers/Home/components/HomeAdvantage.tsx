import type { FunctionComponent } from "react";
import React, {useEffect, useRef, useState} from "react";
import ButtonsK from "../../../components/ButtonsK";
// @ts-ignore
import videoBack from "../../../assets/video/bck1.mp4";

const HomeAdvantage: FunctionComponent = () => {
    const videoRef = useRef();
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const entry = entries[0];
            if (windowWidth <= 640) {
                try {
                    setTimeout(() => {
                    // @ts-ignore
                    entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause()
                    }, 1000)
                } catch (e) {
                    console.log('e', e)
                }
            }
        });

        // @ts-ignore
        observer.observe(videoRef.current);
    }, []);

    const startVideo = () => {
        try {
            //@ts-ignore
            if (videoRef.current) {
                //@ts-ignore
                videoRef.current.play()
            }

        } catch (e) {
            console.log('e', e)
        }
    }

    const stopVideo = () => {
        try {
            //@ts-ignore
            videoRef.current.pause()
        } catch (e) {
            console.log('e', e)
        }
    }
    return (
        <div onMouseOver={() => startVideo()} onMouseOut={() => stopVideo()} className="video-back px-20 py-[50px] flex flex-col items-center justify-center mt-[121px] max-sm:mt-20 max-sm:px-[25px] max-sm:items-start max-sm:pt-5 max-sm:pb-[24px]">
            {/* @ts-ignore */}
            <video ref={videoRef} className="max-[850px]:w-[700px] max-[640px]:max-w-[500px] max-[500px]:max-w-[330px]" muted loop playsInline id="myVideo2" controls={false}>
                <source src={videoBack} type="video/mp4" />
            </video>
            <div className="relative z-10">
                <div className="text-center text-white relative text-homeAdvantage leading-[145%] tracking-[-0.3px] max-sm:text-left max-sm:text-[22px] max-sm:leading-[135%]">
                    Наше ключевое преимущество
                </div>
                <p className="text-center text-white leading-[170%] mt-[20px] mb-[38px] opacity-80 max-sm:opacity-60 max-sm:text-left max-sm:mt-[16px] max-sm:mb-[30px] max-sm:leading-[150%] max-sm:text-[15px]">
                    Обладаем уникальными возможностями сбора, формирования&nbsp;<br className="max-md:hidden" />и легализации доказательств и информации (в том числе из закрытых источников)
                </p>
                <ButtonsK />
            </div>
        </div>
    );
}

export default HomeAdvantage;
