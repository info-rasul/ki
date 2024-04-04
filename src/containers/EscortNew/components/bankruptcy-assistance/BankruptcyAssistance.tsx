import React from 'react';
interface BankruptcyAssistanceProps {
    styles: React.CSSProperties;
}

const BankruptcyAssistance: React.FC<BankruptcyAssistanceProps> = ({ styles }) => {
    return (
        <div>
            {/*<div className="leading-[37.5px] tracking-[-0.1px] mt-20 mb-10 text-[25px] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                Текущие реалии
            </div>*/}
            <div className="flex flex-col gap-5 mt-20 max-sm:gap-[25px]">
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    В период сложностей в финансовом секторе российского бизнеса, обилия санкций и общей политике
                    давления со стороны недружественных стран никто не застрахован от того, чтобы оказаться на
                    самом краю огромной пропасти под названием «несостоятельность», которая пугает своей сложностью,
                    длительностью и множеством нюансов.
                </p>
            </div>
            <div className="flex flex-col gap-[30px] p-[28px] bg-[#F8F8F8] mt-10">
                <div className="leading-[37.5px] tracking-[-0.1px] text-[25px] max-sm:tracking-normal">
                    Несостоятельность (банкротство) - признанная арбитражным судом неспособность должника в
                    полном объеме удовлетворить требования кредиторов по денежным обязательствам.
                </div>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Наша команда оказывает комплексную услугу по сопровождению на всех стадиях банкротства
                    независимо от вашего статуса в деле: должник или конкурсный кредитор.
                </p>
                <div className="flex flex-col gap-5">
                    <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                        Наблюдение. На данном этапе назначается временный управляющий, который анализирует финансовое
                        положение должника, принимает меры по сохранности имущества; проводит собрание кредиторов,
                        ведет реестр кредиторов.
                    </p>
                    <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                        Финансовое оздоровление. На данном этапе назначается адмистративный управляющий,
                        действия которого направлены на восстановление платежеспособности и покрытие долгов должника.
                    </p>
                    <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                        Внешнее управление. На данном этапе назначается внешний управляющий, задачей которого
                        является разработка и реализация плана восстановления платёжеспособности должника.
                    </p>
                    <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                        Конкурсное производство. На данном этапе назначается конкурсный управляющий,
                        он проводит инвентаризацию, привлекает оценщика и затем продаёт имущество компании для
                        погашения долгов, согласно очереди.
                    </p>
                </div>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Мы практикуем индивидуальный подход к каждому клиенту, для чего обрабатываем большие объемы
                    данных, проводим углубленный анализ всех фактов и обстоятельств,
                    инициируем личное расследование, проводим переговоры с кредиторами для снижения материальной
                    нагрузки должника, реструктуризации требований.
                </p>
            </div>
            <div className="flex flex-col gap-[30px] p-[28px] bg-[#F8F8F8] mt-10">
                <div className="leading-[37.5px] tracking-[-0.1px] text-[25px] max-sm:tracking-normal">
                    Мы обращаем внимание на то, что остается незамеченным для других,
                    и всегда способны изменить положение на чаше весов в пользу клиента.
                </div>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Наши специалисты:
                </p>
                <div className="flex flex-col gap-5">
                    <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                        сопровождают клиента при переговорах с представителями собрания, арбитражных управляющих,
                        представителей учредителей и участников должника;
                    </p>
                    <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                        занимаются подготовкой всех необходимых документов на каждом из этапов, в т. ч. при применении
                        упрошенной процедуры или банкротстве по специальным нормам;
                    </p>
                    <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                        контролируют прозрачность работы арбитражного управляющего,
                        оспариваем действия или бездействия с его стороны;
                    </p>
                    <p className="gradient-border-left leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                        защищают активы клиента от произвольных посягательств,
                        субсидиарной ответственности или незаконного владения со стороны третьих лиц.
                    </p>
                </div>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Мы поможем вам не только пройти процедуру максимально мягко, но и снизить объемы требований,
                    сохранив контроль над ситуацией и прогнозируемыми последствиями.
                </p>
            </div>
        </div>
    );
};

export default BankruptcyAssistance;