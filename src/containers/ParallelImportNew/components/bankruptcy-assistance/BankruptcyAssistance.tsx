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
                Постановление Правительства РФ от 29.03.2022 г. № 506 предоставило возможность легально ввозить в
                страну востребованные оригинальные товары без согласия правообладателей.
                Но это привело к ужесточению и усложнению любых комплаенс-процедур со стороны всех крупных
                поставщиков и производителей.
            </h2>
            <div>
                <div className="flex flex-col gap-[30px] p-[28px] bg-[#F8F8F8] mt-10">
                    <h2 className="leading-[37.5px] tracking-[-0.1px] text-[25px] max-sm:tracking-normal">
                        Требование «Nо Russia» не даст вам совершить сделку напрямую. А любая помощь партнеров приведет
                        к включению всех сторон в санкционные списки, со всеми вытекающими последствиями в виде:
                    </h2>
                    <div className="gradient-border-left max-lg:w-full">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            замороженных активов, изъятию собственности;
                        </p>
                    </div>
                    <div className="gradient-border-left max-lg:w-full">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            расторжению действующих контрактов, судебным разбирательствам;
                        </p>
                    </div>
                    <div className="gradient-border-left max-lg:w-full">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            конечному банкротству, без возможности оздоровления.
                        </p>
                    </div>
                    <p className="leading-[27.2px] max-sm:text-[15px]">
                        Меры по прямому и негативному финансовому воздействию на бизнес в РФ со стороны недружественных
                        западных стран – это новая реальность. Играть на легальном поле становится все сложнее,
                        а результативность находится в прямой зависимости от механизмов реализации ваших инициатив.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-10 max-sm:gap-[25px]">
                <h2 className="leading-[37.5px] tracking-[-0.1px] text-[25px] max-sm:tracking-normal">
                    Что такое параллельный импорт для нас?
                </h2>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Комитет Информации оказывает услуги по параллельному импорту дефицитных товаров и
                    высокотехнологичного оборудования. Мы готовы предоставить вам комплекс мер и уникальных
                    способов взаимодействия с поставщиками в качестве альтернативы всем вариантам ввоза востребованных
                    товаров в РФ на полностью законных основаниях.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Наша компания не просто предлагает вам логистические услуги по покупке, доставке и документарному
                    сопровождению необходимой товарной единицы, а решаем вопрос с эмбарго на всех уровнях.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Поставка останется полностью прозрачной для вас, но конечный покупатель и география его расположения
                    будет надежно скрыта от производителя. В том числе и расчеты, поскольку мы не прибегаем к SWIFT,
                    а используем все преимущества и выгоды децентрализованной финансовой системы.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Вы получите товар, прошедший таможню и все контрольные процедуры. Но уже без средств и устройств
                    отслеживания или удаленной блокировки. Все необходимые манипуляции и модификации программного
                    обеспечения будут произведены квалифицированными специалистами до ввоза продукции в РФ.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Вы станете полноправным законным владельцем необходимого товара или оборудования, которое полностью
                    соответствует заявленным характеристикам, спецификациям, комплектности, модельному ряду и т.д.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Комитет Информации занимается поставками в РФ дефицитных товаров, технически сложного и
                    высокоточного оборудования, в т.ч. медицинской техники, транспортных средств,
                    деталей для промышленных устройств и т.д.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Мы не только используем наработанный практический опыт по выполнению задач для вашего бизнеса,
                    но и готовы предлагать уникальные решения, если ваша бизнес-инициатива требует глубокого
                    индивидуального погружения в детали исполнения.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Если у вас остались вопросы или вы хотели бы обсудить возможность сотрудничества,
                    то вы можете обратиться за консультацией наших специалистов по телефону или написать нам на почту.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    А чтобы оставаться в курсе актуальных новостей и держать руку на пульсе,
                    подписывайтесь на наш telegram-канал!
                </p>
            </div>
            {/*<div className="flex flex-col justify-between bg-[#097990] p-[35px] mt-20 gap-[20px] relative max-[1439px]:w-full max-lg:gap-[39px] max-sm:mt-[65px] max-sm:px-[25px] max-sm:pb-[23px] max-sm:pt-[20px]">
                <span style={{ fontSize: 'clamp(20px, 2.1vw, 30px)' }} className="text-white leading-[145%] max-sm:text-[20px] max-sm:leading-[135%]">
                    А чтобы оставаться в курсе актуальных новостей и держать руку на пульсе, <br className="max-lg:hidden"/>
                    подписывайтесь на наш telegram-канал!
                </span>
                <div className="flex justify-start max-[1439px]:w-full">
                    <ButtonsK />
                </div>
                <img
                    className="absolute bottom-0 min-[1440px]:left-0 max-[1439px]:right-0 max-sm:hidden"
                    src={AdditionalInformationHomeImg}
                    alt="Vector"
                />
            </div>*/}
        </div>
    );
};

export default BankruptcyAssistance;