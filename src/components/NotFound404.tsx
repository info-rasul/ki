import type { FunctionComponent } from "react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const NotFound404: FunctionComponent = () => (
  <div className="">
      <div className="bg-[#0B162A] max-[1030px]:h-[75px]">
          <Header />
      </div>
      <div className="w-screen h-screen flex justify-center flex-col items-center bg-[#cfcfcf]">
          <p style={{ fontSize: 'clamp(50px, 7vw, 100px)' }} className="leading-none text-[#0B162A] mt-[-125px] max-[1030px]:mt-[-75px]">404</p>
          <p style={{ fontSize: 'clamp(12px, 1.2vw, 18px)' }} className="text-black ">Извините, страница, которую вы ищете, не существует.</p>
      </div>
      <Footer />
  </div>
);

export default NotFound404;
