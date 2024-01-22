import React from 'react';
import DownButton from '../../../../assets/img/down-button.svg'
import {Header} from "../../../../components";
const ArticleBanner = () => {
    return (
        <div className=" article_banner">
            <Header />
            <div className="container pb-[60px] h-[800px] flex flex-col justify-end max-xl:px-10 max-md:px-4 max-md:h-[645px] max-sm:pb-0">
                <h2 className="text-[40px] leading-[138%] text-white tracking-[.5px] max-md:text-[24px] max-sm:leading-[140%]">
                    Центробанк в пятый раз подряд поднял <br className="max-lg:hidden"/> ключевую ставку. Как это повлияет на
                    курсы <br className="max-lg:hidden"/> валют, кредиты и ипотеку?
                </h2>
                <div className="h-px bg-[#E6E6E6] my-10 max-xl:my-[25px]"></div>
                <div className="flex justify-between items-start max-xl:mb-[30px] gap-10">
                    <p className="text-white leading-[169%] tracking-[.13px] max-md:text-[14px] max-md:leading-[150%]">
                        На последнем в 2023 году заседании совета директоров Центробанка 15 декабря вновь было принято
                        решение о
                        <br className="max-xl:hidden"/>повышении ключевой ставки, хотя на этот раз регулятор не обманул
                        ожидания большинства аналитиков.<br className="max-xl:hidden"/>
                        Ключевой параметр денежно-кредитной политики (ДКП) подняли до 16 процентов,
                        что стало новым максимумом с <br className="max-xl:hidden"/> весны 2022 года.
                    </p>
                    <img className="mt-[58px] max-sm:hidden" src={DownButton} alt="Кнопка для прокрутки страницы вниз"/>
                </div>
            </div>
        </div>
    );
};

export default ArticleBanner;