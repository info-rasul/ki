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
           {/* <div className="leading-[37.5px] tracking-[-0.1px] mt-20 mb-10 text-[25px] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                Суровая реальность
            </div>*/}

            <div className="flex flex-col mt-20 gap-5  max-sm:gap-[25px]">
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    В соответствии с гражданским законодательством долг – это обязательство, в силу которого одно лицо
                    (должник) обязано совершить в пользу другого лица (кредитора) определенное действие,
                    либо воздержаться от определенного действия, а кредитор имеет право требовать
                    от должника исполнения его обязанности.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Недобросовестные кредиторы и партнеры, жесткая политика банковского сектора, блокировка счетов и
                    активов у проверенных контрагентов из-за попадания последних в санкционные списки или вынесения
                    отказов при прохождении комплаенс-процедур – все это современные реалии на Российском финансовом
                    рынке, негативно сказывающиеся как на представителях малого и среднего бизнеса,
                    так и на владельцах крупного капитала.
                </p>
            </div>
            <div className="flex flex-col p-[28px] bg-[#F8F8F8] mt-10">
                <div className="leading-[37.5px] tracking-[-0.1px] text-[25px] max-sm:tracking-normal">
                    Долг — это не только финансовая обязанность, но состояние перманентного стресса.
                </div>
                <div className="flex flex-col gap-5 mt-5 max-sm:gap-[25px]">
                    <p className="leading-[27.2px] max-sm:text-[15px]">
                        Наша команда поможет вам выбраться из критической ситуации без ощутимого урона,
                        мы перевернём дело с ног на голову, но исключим риски наступления негативных последствий и
                        выйдем победителями в битве с кредиторами.
                    </p>
                    <p className="leading-[27.2px] max-sm:text-[15px]">
                        Наши специалисты практикуют исключительно индивидуальный подход для каждой отдельно взятой ситуации,
                        у нас нет шаблонных действий и порядков.
                    </p>
                    <p className="leading-[27.2px] max-sm:text-[15px]">
                        Мы всегда подходим к любой задаче системно и комплексно. Поэтому работа начинается с глубокого
                        анализа всех обстоятельств дела. Мы выбираем самый эффективный способ для защиты ваших интересов,
                        опираясь на те массивы данных, которые остальные упускают из вида или не могут использовать ввиду
                        отсутствия практики или инструментов для непосредственной реализации.
                    </p>
                    <div className="gradient-border-left max-lg:w-full">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            «Как правило, наибольшего успеха добивается тот,
                            кто располагает лучшей информацией». Б. Дизраэли.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-[30px] p-[28px] bg-[#F8F8F8] mt-10">
                    <div className="leading-[37.5px] tracking-[-0.1px] text-[25px] max-sm:tracking-normal">
                        Наши специалисты применяют не только нормы права, но и проводят переговоры с использованием
                        альтернативной медиации для сохранения ваших активов, сокращения материальной нагрузки,
                        распределения платежей и снижения долговой массы.
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            сопровождаем Должников на досудебном этапе разрешения спорных ситуаций для достижения
                            компромисса всеми сторонами обязательств;
                        </p>
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            не допускаем нарушения условий договоров со стороны кредитора, навязывания невыгодных
                            условий, а также составляем стратегию по выводу имущества из-под залога;
                        </p>
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            проводим детальный анализ всех соглашений и договоров в целях уменьшения
                            или вовсе избежания штрафных санкций и неустоек;
                        </p>
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            работаем с просроченной задолженностью, снижением процентных ставок,
                            признанием кредитного договора недействительным, а кредиторов недобросовестными.
                        </p>
                    </div>
                    <p className="leading-[27.2px] max-sm:text-[15px]">
                        Если вы обратились к нам на более поздней стадии и ситуация не позволяет обойтись без
                        соблюдения судебного порядка разрешения спора, наша команда обеспечивает полное документарное
                        сопровождение и представительство должника во всех судебных инстанциях.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BankruptcyAssistance;