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
            <div className="leading-[37.5px] tracking-[-0.1px] mt-20 mb-10 text-[25px] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                Одним из способов правового регулирования экономической
                деятельности является субсидиарная ответственность.
            </div>
            <div className="flex flex-col gap-5 mt-5 max-sm:gap-[25px]">
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Институт привлечения к субсидиарной ответственности активно развивается и набирает обороты,
                    о чем свидетельствует статистика по этой категории споров. Так, по данным Федресурса на 31
                    декабря 2023 года, увеличивается как количество поданных заявлений о привлечении бывших
                    руководителей и собственников бизнеса к субсидиарной ответственности и сумма таких требований,
                    так и количество положительных решений суда, которое составило 46% от поданных заявлений.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Субсидиарная ответственность - разновидность ответственности, которая позволяет взыскать долг,
                    неполученный с основного должника, с другого обязанного лица. Субсидиарная ответственность
                    отражена как в нормах гражданского, так и в нормах банкнотного законодательства:
                </p>
                <div className="numbered-list mt-[25px]">
                    <ol className="flex flex-col gap-[10px]">
                        <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                            Для привлечения к субсидиарной ответственности, согласно гражданскому законодательству
                            необходимо доказать переход денежных средств (имущества) должника к контролирующим должника
                            лицам. Бремя доказывания возложено на заявителя;
                        </li>
                        <li className="leading-[170%] ml-[45px]  max-sm:text-[15px] max-sm:leading-[160%]">
                            Для привлечения к ответственности, согласно банкротному законодательству,
                            достаточно доказать наличие виновных действий со стороны контролирующих должника лиц.
                            Бремя опровержения наличия в действиях вины несет ответчик;
                        </li>
                    </ol>
                </div>
                <div className="leading-[37.5px] tracking-[-0.1px] text-[25px] mt-10 max-sm:tracking-normal">
                    Субсидиарная ответственность больше не страшная сказка, а реальность,
                    с которой придется побороться и мы вам в этом поможем.
                </div>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Наши специалисты оказывают комплекс услуг по защите от субсидиарной ответственности,
                    включающий в себя полный и всесторонний анализ финансово-хозяйственной деятельности,
                    сделок и деятельности руководящих лиц.
                </p>
            </div>
            <div>
                <div className="flex flex-col p-[28px] bg-[#F8F8F8] mt-10">
                    <div className="leading-[37.5px] tracking-[-0.1px] text-[25px] max-sm:tracking-normal">
                        К субсидиарной ответственности могут привлечь:
                    </div>
                    <div className="mt-[28px] flex flex-col gap-5">
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            Собственника бизнеса;
                        </p>
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            Ответственных лиц (руководителей, бухгалтеров и других), если суд признает наличие их вины;
                        </p>
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            Аффилированных лиц;
                        </p>
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            Лиц, которых суд признает выгодоприобретателями.
                        </p>
                        <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            «Лучшая финансовая информация не всегда доступна.
                            Надо отправиться на ее поиски». Р. Кийосаки.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-10">
                <div>
                    <div className="flex flex-col gap-[30px] p-[28px] bg-[#F8F8F8] mt-10">
                        <div className="leading-[37.5px] tracking-[-0.1px] text-[25px] max-sm:tracking-normal">
                            Опыт наших специалистов в области обработки больших массивов данных и сопоставлении всех
                            фактов позволяет найти самую важную деталь, которая может изменить исход всей ситуации.
                        </div>
                        <p className="leading-[27.2px] max-sm:text-[15px]">
                            Для выбора оптимального подхода к защите от субсидиарной ответственности
                            наша команда использует широкий инструментарий:
                        </p>
                        <div className="flex flex-col gap-5">
                            <p className=" gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Альтернативная медиация, личное расследование и проведение экспертиз;
                            </p>
                            <p className=" gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Легальные пути для защиты ваших активов от заморозки,
                                блокировки или иных посягательств со стороны сотрудников предприятия,
                                кредиторов или партнеров и конкурентов;
                            </p>
                        </div>
                        <p className="leading-[27.2px] max-sm:text-[15px]">
                            Наши специалисты осуществляют и судебное представительство на всех этапах,
                            если субсидиарной ответственности не удалось избежать из-за позднего обращения:
                            в целях максимального снижения размеров субсидиарной ответственности.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankruptcyAssistance;