import React from 'react';
import Subtract from '../../../../assets/img/Subtract.png'
const ArticleBanner = () => {
    return (
        <div className="article_banner px-20 h-[800px] flex flex-col justify-end max-md:px-4 max-md:h-[645px]">
            <h2 className="text-[40px] leading-[140%] text-white tracking-[.5px] max-md:text-[24px]">
                Центробанк в пятый раз подряд поднял <br className="max-lg:hidden"/> ключевую ставку. Как это повлияет на
                курсы <br className="max-lg:hidden"/> валют, кредиты и ипотеку?
            </h2>
            <div className="h-px bg-[#E6E6E6] my-10 max-xl:my-[25px]"></div>
            <div className="flex justify-between items-start max-xl:mb-[30px] gap-10">
                <p className="text-white leading-[170%] max-md:text-[14px] max-md:leading-[150%]">
                    На последнем в 2023 году заседании совета директоров Центробанка 15 декабря вновь было принято
                    решение о
                    <br className="max-xl:hidden"/>повышении ключевой ставки, хотя на этот раз регулятор не обманул
                        ожидания большинства аналитиков.<br className="max-xl:hidden"/>
                            Ключевой параметр денежно-кредитной политики (ДКП) подняли до 16 процентов,
                            что стало новым максимумом с <br className="max-xl:hidden"/> весны 2022 года.
                </p>
                <img className="max-sm:hidden" src={Subtract} alt="Subtract"/>
            </div>
        </div>
    );
};

export default ArticleBanner;