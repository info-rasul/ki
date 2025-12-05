import type { FunctionComponent } from "react";
import React from "react";
import Header from "./Header";

const NotFound404: FunctionComponent = () => {
    return (
        <div className="">
            <Header isDarMenu={true} />
            <div className="w-screen h-screen flex justify-center flex-col items-center gap-5">
                <p style={{ fontSize: 'clamp(25px, 3.5vw, 50px)' }} className="leading-none text-[#0B162A] mt-[-125px] max-[1030px]:mt-[-75px]">
                    ОШИБКА 404
                </p>
                <p className="text-black text-center text-[18px]">
                    К сожелению, ничего не найдено.&nbsp;<br className="sm:hidden"/>Попробуйте <a className="text-[#004cd6]" href="/"> перейти на главную.</a>
                </p>
            </div>
        </div>
    );
}

export default NotFound404;
