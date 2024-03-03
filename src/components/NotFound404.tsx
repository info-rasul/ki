import type { FunctionComponent } from "react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const NotFound404: FunctionComponent = () => (
  <div className="">
      <div className="bg-[#0B162A] max-[1030px]:h-[75px]">
          <Header />
      </div>
      <div className="w-screen h-screen flex justify-center flex-col items-center gap-5 bg-[#cfcfcf]">
          <p style={{ fontSize: 'clamp(25px, 3.5vw, 50px)' }} className="leading-none text-[#0B162A] mt-[-125px] max-[1030px]:mt-[-75px]">
              ОШИБКА 404
          </p>
          <p style={{ fontSize: 'clamp(18px, 1.9vw, 26px)' }} className="text-black text-center">
              К сожелению, ничего не найдено. <br className="sm:hidden"/> Попробуйте <a className="text-[#004cd6]" href="/"> перйти на главную.</a>
          </p>
      </div>
      <Footer />
  </div>
);

export default NotFound404;
