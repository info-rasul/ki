import type { FunctionComponent } from "react";
import React, {Fragment, useEffect, useRef, useState} from "react";
// @ts-ignore
import videoBack from "../../../assets/video/back3.mp4";
// @ts-ignore
import videoBackMob from "../../../assets/video/back-mob3.mp4";
import Header from "../../../components/Header";
import DownButton from "../../../assets/img/down-button.svg"
import PersonCardImg from "../../../assets/img/taleb.png";
import {getRouteMetaInfo} from "../../../config/meta.config";

const HomeBanner: FunctionComponent = () => {
    const refVideo = useRef<HTMLVideoElement>();
    const [startVideo, setStartVideo] = useState(false);
    const { isDarkMenu } = getRouteMetaInfo("Home");
    const darkMenu = !!isDarkMenu;

    useEffect(() => {
        try {
            setStartVideo(!!(refVideo.current && refVideo.current.play()));
        } catch (e) {
            setStartVideo(false)
            console.log('e', e)
        }

    }, []);

    return (
        <Fragment>
            <div className="home-banner w-full flex flex-col h-screen max-[640px]:h-[calc(100vh-80px)] justify-between pb-[60px] ">
                <video className="max-md:hidden home-banner-video" muted loop playsInline autoPlay id="myVideo" controls={false}>
                    <source src={videoBack} type="video/mp4"/>
                </video>
                {/* @ts-ignore */}
                <video ref={refVideo} className="md:hidden home-banner-video" autoPlay={startVideo} muted loop playsInline id="myVideoMobile" controls={false}>
                    <source src={videoBackMob} type="video/mp4"/>
                </video>
                <div className="w-full flex flex-col h-screen max-[640px]:h-[calc(100vh-80px)] justify-between z-20">
                <Header isDarMenu={darkMenu} />
                <div className="flex z-10">
                    <div className="container max-[1080px]:px-4 max-sm:mb-[30px]">
                        <div className="border-b-[1px] border-[#FFFFFF] border-opacity-20 pb-[37px] mb-[40px] max-sm:mb-[25px] max-sm:pb-[25px]">
                            <h1 className="text-white text-homeBanner leading-[140%] max-sm:text-[28px] max-sm:leading-[136%]">
                                трансформируем&nbsp;<br /> информацию в&nbsp;<br className="sm:hidden"/>возможности
                            </h1>
                        </div>
                        <div>
                            <p className="text-white leading-[170%] max-sm:text-[14px] max-sm:leading-[150%]">
                                Иногда в массе данных нет никакого <br className="sm:hidden"/> смысла, <br
                                className="max-sm:hidden"/> а иногда единственный факт<br className="sm:hidden"/> бесценен
                            </p>
                        </div>
                        <div className="flex justify-between mt-[20px] h-[50px] max-sm:mt-[25px] max-sm:h-[42px]">
                            <div className="flex  pl-[9px] pr-[20px] items-center gap-[15px] rounded-[40px] border-[1px] border-[#FFFFFF]/[.20] max-sm:py-[7px] max-sm:pl-[7px]">
                                <img className="w-[32px] rounded-full max-sm:w-[28px] max-sm:h-[28px]" src={PersonCardImg} alt="Изображение для карточки пользователя" />
                                <p className="text-[15px] text-white leading-[20px] max-sm:text-[13px] pt-[2px]">
                                    Н.Н. Талеб
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
};
export default HomeBanner;
