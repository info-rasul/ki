import React from 'react';
import Vk from "../../../../assets/img/vk.svg";
import Classmates from "../../../../assets/img/classmates.svg";
import Telegram from "../../../../assets/img/telegram.svg";
import Whatsapp from "../../../../assets/img/whatsapp.svg";

const ArticleSocialLinks = () => {
    return (
        <div className="social__media flex flex-col gap-2.5 w-[50px] xl:absolute xl:right-20 max-xl:flex-row max-xl:w-full justify-center max-xl:border-t-[1px] max-xl:border-[#E6E6E6]">
            <a className="w-[50px]" href="#">
                <img src={Vk} alt="vk"/>
            </a>
            <a href="#">
                <img src={Classmates} alt="classmates"/>
            </a>
            <a href="#">
                <img src={Telegram} alt="telegram"/>
            </a>
            <a href="#">
                <img src={Whatsapp} alt="whatsapp"/>
            </a>
        </div>
    );
};

export default ArticleSocialLinks;