import type { FunctionComponent } from "react";
import React, {Fragment, useState} from "react";
// @ts-ignore
import videoBack from "../../../assets/video/back.mp4";
import Header from "../../../components/Header";
import PersonCard from "../../../components/PersonCard";
import DownButton from "../../../assets/img/down-button.svg"
import PersonCardImg from "../../../assets/img/person-card-img.jpg";

const HomeBanner: FunctionComponent = () => {
    const smoothScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
    const [downButton, setDownButton] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 200) {
            setDownButton(true)
        } else if (window.scrollY < 2) {
            setDownButton(false)
        }
    } )


    return (
        <Fragment>
            <div className="w-full flex flex-col h-screen justify-between home-banner pb-[60px] max-sm:pb-[30px]">
                <video className="home-banner-video" autoPlay muted loop id="myVideo">
                    <source src={videoBack} type="video/mp4"/>
                </video>
                <div className="w-full flex flex-col h-screen justify-between z-20">
                <Header />
                <div className="flex z-10">
                    <div className="container max-[1080px]:px-4">
                        <div className="border-b-[1px] border-[#B3B3B3] pb-10 mb-10 max-sm:mb-[27px] max-sm:pb-[26px]">
                            <h1 className="text-white text-[40px] font-medium leading-[136%] max-sm:text-[28px]">
                                Трансформируем <br/> информацию в возможности
                            </h1>
                        </div>
                        <div>
                            <p className="text-white font-medium leading-[180%] max-sm:text-[14px] max-sm:leading-[150%]">
                                Иногда в массе данных нет никакого <br className="sm:hidden"/> смысла, <br
                                className="max-sm:hidden"/> а иногда единственный факт<br className="sm:hidden"/> бесценен
                            </p>
                        </div>
                        <div className="flex justify-between mt-4 max-sm:mt-[22px]">
                            <div className="flex py-[9px] pl-[9px] pr-[20px] tracking-[-0.5px] items-center gap-[15px] rounded-[40px] border-[1px] border-[#FFFFFF]/[.20] max-sm:py-[7px] max-sm:pl-[7px]">
                                <img className="max-sm:w-[28px] max-sm:h-[28px] rounded-full" src={PersonCardImg} alt="Изображение для карточки пользователя" />
                                <p className="font-semibold text-[15px] text-white max-sm:text-[13px]">Н.Н. Талеб</p>
                            </div>
                            <button onClick={smoothScroll}>
                                <img style={{ display: downButton ? 'none' : 'block' }} className=" down-button max-sm:w-[42px] max-sm:h-[42px]" src={DownButton} alt="Кнопка для прокрутки страницы вниз"/>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
};
export default HomeBanner;