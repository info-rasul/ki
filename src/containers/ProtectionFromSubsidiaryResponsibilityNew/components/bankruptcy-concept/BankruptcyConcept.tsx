import React from 'react';
import AdditionalInformationEscort from "../../../../components/additional-information/Escort";
import ButtonsK from "../../../../components/ButtonsK";
import oneSvg from "../../../../assets/img/serv-add-information.svg";
interface BankruptcyConceptProps {
    styles: React.CSSProperties;
}

const BankruptcyConcept: React.FC<BankruptcyConceptProps> = ({ styles }) => {
    return (
        <div>
            <div style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[150%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mb-[30px] max-sm:tracking-normal">
                Понятие банкротства
            </div>
            <div className="flex flex-col gap-5 max-sm:gap-[25px]">
                <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                    Банкротством называется неплатежеспособность должника, подтвержденная официально и законно.
                    В правовой сфере России новейшего времени это понятие появилось вслед за рыночными отношениями
                    в экономике. И в первую очередь – для юридических лиц.
                </p>
                <p className="leading-[170%]  max-sm:text-[15px] max-sm:leading-[160%]">
                    Разумеется, в советские времена хозяйственные структуры тоже, случалось,
                    оказывались в неоплатных долгах. Но тогда рынка не существовало – все строго контролировалось
                    государством – следовательно, не существовало и открытых конфликтов по этому поводу.
                    Руководителя переводили на другую должность или увольняли.
                    Если была доказана его вина – привлекали к уголовной ответственности за так называемые
                    «хозяйственные преступления». Потери кредитора компенсировались из бюджета.
                </p>
            </div>
            <div style={styles} className="pr-[35px] pl-[31px] py-[25px]  bg-opacity-10 my-[30px] max-sm:mt-[25px] max-sm:pr-[30px] max-sm:pl-[26px] max-sm:py-[20px]">
                <p className="text-[#086C80] leading-[180%] max-sm:text-[15px] max-sm:leading-[150%]">
                    «Лихие девяностые» исчерпали себя сами собой – по мере изменения экономических и социальных условий
                    ужесточения уголовного законодательства и повышения эффективности работы правоохранительных
                    структур. В 2002 был принят актуальный доныне
                    <a className="text-[#097990] leading-[170%] font-bold" href="#"> ФЗ №127.</a>
                    С тех пор в него неоднократно вносились поправки,
                    адаптируя законодательный акт к меняющимся условиям.
                </p>
            </div>
            <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%] max-sm:mt-[25px]">
                Самая значительная поправка была внесена в 2015 году. Право списать неоплатные долги получили не
                только юридические лица и индивидуальные предприниматели, но и простые граждане.
                Это стимулировало «волну» новых поправок. В настоящее время они вносятся практически ежегодно,
                чтобы сделать закон более «рабочим», логичным, удобным для судов и самих банкротов.
            </p>
            <div className="flex flex-col justify-between bg-[#097990] p-[40px] gap-10 mt-20 relative max-sm:p-[25px] max-sm:pt-[20px] max-sm:mt-[60px]">
                <span style={{ fontSize: 'clamp(20px, 1.8vw, 25px)' }} className="text-white leading-[145%] max-sm:text-[20px] max-sm:leading-[135%]">
                  Хотите знать больше?&nbsp;<br className="sm:hidden"/>Читайте новости&nbsp;<br className="max-sm:hidden"/>или подписывайтесь на наш
                  телеграм-канал
                </span>
                <div className="flex justify-start max-sm:mt-[-1px]">
                    <ButtonsK />
                </div>
                <img
                    className="absolute top-[-58px] right-[34px] w-[387px] h-[387px] max-sm:hidden"
                    src={oneSvg}
                    alt="Фон"
                />
            </div>
        </div>
    );
};

export default BankruptcyConcept;