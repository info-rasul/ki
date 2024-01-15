import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import oneSvg from "../../../assets/img/Subtract.png";
// @ts-ignore
import videoBack from "../../../assets/video/back.mp4";
import PersonCard from "../../../components/PersonCard";

const HomeBanner: FunctionComponent = () => {
    const smoothScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <Fragment>
            <section className="home-banner flex items-end h-[100vh] max-sm:h-[645px]">
                <video autoPlay muted loop id="myVideo">
                    <source src={videoBack} type="video/mp4"/>
                </video>
                <div className="w-full px-20 pb-[59px] max-lg:px-4 max-sm:pb-[30px] z-10">
                    <h1 className="text-white text-[40px] font-medium leading-[140%] max-sm:text-[28px]">Трансформируем <br/> информацию
                        в возможности </h1>
                    <div className="min-h-[1px] my-10 bg-[#FFFFFF]/[.20] max-sm:my-[25px]"></div>
                    <p className="text-white font-medium leading-[170%] max-sm:text-[14px] max-sm:leading-[150%]">
                        Иногда в массе данных нет никакого <br className="sm:hidden"/> смысла, <br
                        className="max-sm:hidden"/> а иногда единственный факт<br className="sm:hidden"/> бесценен
                    </p>
                    <div className=" flex justify-between mt-5 max-sm:mt-[23px]">
                        <PersonCard/>
                        <button onClick={smoothScroll}><img className="max-sm:w-[42px] h-[42px]" src={oneSvg} alt="Subtract"/></button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
export default HomeBanner;
