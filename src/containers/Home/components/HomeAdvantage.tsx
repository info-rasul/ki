import type { FunctionComponent } from "react";
import React, {useRef} from "react";
import ButtonsK from "../../../components/ButtonsK";
// @ts-ignore
import videoBack from "../../../assets/video/back2.mp4";

const HomeAdvantage: FunctionComponent = () => {
    const videoRef = useRef(null);
    const startVideo = () => {
        //@ts-ignore
        videoRef.current.play()
    }

    const stopVideo = () => {
        //@ts-ignore
        videoRef.current.pause()
    }
    return (
        <div onMouseOver={() => startVideo()} onMouseOut={() => stopVideo()} className=" px-20 py-[50px] video-back flex flex-col items-center justify-center mt-[120px] max-sm:mt-20 max-sm:px-[25px] max-sm:items-start max-sm:pt-5 max-sm:pb-[24px]">
            {/* @ts-ignore */}
            <video ref={videoRef} className="max-[850px]:w-[700px] max-[640px]:max-w-[300px]" muted loop id="myVideo2" controls={false}>
                <source src={videoBack} type="video/mp4" />
            </video>
            <div className="">
                <h2 className="text-center text-white text-[30px] leading-[145%] tracking-[-0.3px] max-sm:text-left max-sm:text-[22px] max-sm:leading-[135%]">
                    Наше ключевое преимущество
                </h2>
                <p className="text-center text-white leading-[170%] mt-[20px] mb-[38px] opacity-80 max-sm:opacity-60 max-sm:text-left max-sm:mt-[17px] max-sm:mb-[30px] max-sm:leading-[150%] max-sm:text-[15px]">
                    Обладаем уникальными возможностями сбора, формирования <br className="max-md:hidden" />
                    и легализации доказательств и информации (в том числе из закрытых источников)
                </p>
                <ButtonsK />
            </div>
        </div>
    );
}

export default HomeAdvantage;
