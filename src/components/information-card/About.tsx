import type { FunctionComponent } from 'react';
import { Fragment } from "react";
import oneSvg from '../assets/img/Frame1.svg';
import useCard from './useCard';

const InformationCardAbout: FunctionComponent = () => {
    useCard();

    return (
        <Fragment>
            <div className="p-[45px] bg-[#F2F2F2] flex flex-col items-start gap-[56px] max-w-[630px]">
                <img className="w-[100px] h-[100px]" src={oneSvg} alt="Frame1" />
                <div className="flex flex-col items-start gap-[20px]">
                    <h3 className="text-[25px] leading-[140%] tracking-[0.3px]">646 млн</h3>
                    <p className="leading-[170%]">Столько денег было сэкономленное нашим клиентам</p>
                </div>
            </div>
        </Fragment>
    );
}

export default InformationCardAbout;
