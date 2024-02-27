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
            <h2 className="leading-[37.5px] tracking-[-0.1px] mt-20 mb-10 text-[25px] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                Защита от субсидиарной ответственности
            </h2>
        </div>
    );
};

export default BankruptcyAssistance;