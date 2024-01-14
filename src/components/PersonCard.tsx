import type { FunctionComponent } from 'react';
import { Fragment } from "react";
import oneSvg from '../assets/img/Ellipse.png';
import React from 'react';

const SubTitle: FunctionComponent = () => (
    <Fragment>
        <div className="flex py-[9px] pl-[9px] pr-[20px] tracking-[-0.5px] items-center gap-[15px] rounded-[40px] bg-[#F8F8F8] border-[1px] border-[#FFFFFF]/[.20] max-sm:py-[7px] max-sm:pl-[7px]">
            <img className="max-sm:w-[28px] h-[28px]" src={oneSvg} alt="Ellipse" />
                <p className="font-semibold text-[15px] max-sm:text-[13px]">Н.Н. Талеб</p>
        </div>
    </Fragment>
);

export default SubTitle;
