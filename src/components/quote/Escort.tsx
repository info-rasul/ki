import type { FunctionComponent } from "react";
import { Fragment } from "react";
import oneSvg from "../assets/img/gobbler.png";
import twoSvg from "../assets/img/Ellipse10.png";

const EscortArticle: FunctionComponent = () => (
  <Fragment>
    <div className="flex flex-col items-start justify-center bg-backgroundQuote w-[300px] p-[25px] gap-[25px]">
      <img className="w-[24px] h-[18px]" src={oneSvg} alt="gobbler" />
      <p className="text-start text-[15px] text-[#086C80] leading-[170%] tracking-[.2px]">
        «Мы обязаны помнить об исконных российских традициях справедливости{" "}
        <br />
        и законности, помнить о том, что диктатура закона — это единственная{" "}
        <br />
        разновидность диктатуры, которой мы обязаны подчиняться».
      </p>
      <div className="mainArticle__user flex items-center	gap-4 rounded-full py-[9px] pl-[9px] pr-[20px] bg-[#F8F8F8]">
        <img src={twoSvg} alt="Ellipse10" />
        <p>В.В.Путин</p>
      </div>
    </div>
  </Fragment>
);

export default EscortArticle;
