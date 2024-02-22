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
                Защита от субсидиарной ответственности
            </h2>
            {/*<p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                Требование
                <a className="leading-[170%] font-bold" href="#"> «Nо Russia» не даст вам совершить сделку напрямую. </a>
                А любая
                <a className="leading-[170%] font-bold" href="#">
                    помощь партнеров приведет к включению всех сторон в санкционные списки,
                </a> со всеми вытекающими последствиями в виде:
            </p>
            <ul className="markers flex flex-col gap-[10px] mt-[20px] max-sm:mt-[25px]">
                <li>замороженных активов, изъятию собственности;</li>
                <li>расторжению действующих контрактов, судебным разбирательствам;</li>
                <li>конечному банкротству, без возможности оздоровления.</li>
            </ul>
            <p className="leading-[170%] mt-[20px] max-sm:text-[15px] max-sm:leading-[160%]">
                Меры по прямому и негативному финансовому воздействию на бизнес в РФ со стороны недружественных
                западных стран – это новая реальность. Играть на легальном поле становится все сложнее,
                а результативность находится в прямой зависимости от механизмов реализации ваших инициатив.
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[150%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                Что такое параллельный импорт <a className="leading-[170%] font-bold" href="#">для нас?</a>
            </h2>
            <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                Комитет Информации оказывает услуги по параллельному импорту дефицитных товаров и высокотехнологичного
                оборудования. Мы готовы предоставить вам комплекс мер и уникальных способов взаимодействия с
                поставщиками в качестве альтернативы всем вариантам ввоза востребованных
                товаров в РФ на полностью законных основаниях.
            </p>
            <p className="leading-[170%] max-sm:text-[15px] mt-[20px] max-sm:leading-[160%]">
                Наша компания не просто предлагает вам логистические услуги по покупке,
                доставке и документарному сопровождению необходимой товарной единицы, а
                <a className="leading-[170%] font-bold" href="#"> решаем вопрос с эмбарго на всех уровнях.</a>
            </p>
            <p className="leading-[170%] max-sm:text-[15px] mt-[20px] max-sm:leading-[160%]">
                <a className="leading-[170%] font-bold" href="#">Поставка останется полностью прозрачной для вас, </a>
                 но конечный покупатель и география его расположения будет надежно скрыта от производителя.
                В том числе и расчеты, поскольку мы не прибегаем к SWIFT, а используем все преимущества и выгоды
                децентрализованной финансовой системы.
            </p>
            <p className="leading-[170%] max-sm:text-[15px] mt-[20px] max-sm:leading-[160%]">
                <a className="leading-[170%] font-bold" href="#">
                    Вы получите товар, прошедший таможню и все контрольные процедуры.
                </a>
                 Но уже без средств и устройств отслеживания или удаленной блокировки. Все необходимые манипуляции и
                модификации программного обеспечения будут произведены квалифицированными
                специалистами до ввоза продукции в РФ.
            </p>
            <p className="leading-[170%] max-sm:text-[15px] mt-[20px] max-sm:leading-[160%]">
                <a className="leading-[170%] font-bold" href="#">
                    Вы станете полноправным законным владельцем необходимого товара или оборудования,
                </a>
                 которое полностью соответствует заявленным характеристикам, спецификациям, комплектности,
                модельному ряду и т.д.
            </p>
            <p className="leading-[170%] max-sm:text-[15px] mt-[20px] max-sm:leading-[160%]">
                Комитет Информации занимается поставками в РФ дефицитных товаров,
                <a className="leading-[170%] font-bold" href="#">технически сложного и высокоточного оборудования, </a>
                в т.ч. медицинской техники, транспортных средств, деталей для промышленных устройств и т.д.
            </p>
            <p className="leading-[170%] max-sm:text-[15px] mt-[20px] max-sm:leading-[160%]">
                <a className="leading-[170%] font-bold" href="#">Мы </a>
                не только используем наработанный практический опыт по выполнению задач для вашего бизнеса, но и
                <a className="leading-[170%] font-bold" href="#">готовы предлагать уникальные решения, </a>
                если ваша бизнес-инициатива требует глубокого индивидуального погружения в детали исполнения.
            </p>
            <p className="leading-[170%] max-sm:text-[15px] mt-[20px] max-sm:leading-[160%]">
                Если у вас остались вопросы или вы хотели бы обсудить возможность сотрудничества,
                то вы можете обратиться за консультацией наших специалистов по телефону или написать нам на почту.
            </p>
            <div className="flex flex-col justify-between bg-[#097990] p-[35px] mt-20 gap-[20px] relative max-[1439px]:w-full max-lg:gap-[39px] max-sm:mt-[65px] max-sm:px-[25px] max-sm:pb-[23px] max-sm:pt-[20px]">
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