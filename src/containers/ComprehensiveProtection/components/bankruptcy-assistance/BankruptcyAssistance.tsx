import React from 'react';
import AdditionalInformationHome from "../../../../components/additional-information/Home";
import ButtonsK from "../../../../components/ButtonsK";
import AdditionalInformationHomeImg from "../../../../assets/img/additional-information-home.svg";
interface BankruptcyAssistanceProps {
    styles: React.CSSProperties;
}

const BankruptcyAssistance: React.FC<BankruptcyAssistanceProps> = ({ styles }) => {
    return (
        <div>
            <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[150%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                Комплексная защита должников от кредиторов
            </h2>
        </div>
    );
};

export default BankruptcyAssistance;