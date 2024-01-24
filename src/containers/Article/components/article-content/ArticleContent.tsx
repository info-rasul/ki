import React from 'react';
import QuoteArticle from "../../../../components/quote/Article";
import ArticleContentNavigation from "./components/article-content-navigation/ArticleContentNavigation";
import articleImg1 from '../../../../assets/img/article-img1.jpg'
import articleImg2 from '../../../../assets/img/article-img2.jpg'
import articleImg3 from '../../../../assets/img/article-img3.jpg'
import articleImg4 from '../../../../assets/img/article-img4.jpg'
import ArticleSocialLinks from "../article-social-links/ArticleSocialLinks";
import oneSvg from "../../../../assets/img/quote.png";
import twoSvg from "../../../../assets/img/Ellipse10.png";
import PersonCardDesc from "../../../../components/PersonCardDesc";

const ArticleContent = () => {
    return (
        <div className="flex flex-col max-xl:p-10 max-md:px-4 max-md:pt-10 max-md:pb-[37px]">
            <p className="leading-[168%] text-[#333] tracking-[.13px] max-md:text-[15px] max-md:leading-[161%]">
                Основной причиной пятого подряд повышения были названы вновь возросшие инфляционные ожидания населения
                и ценовые ожидания предприятий. В октябре-ноябре базовая инфляция с поправкой на сезонность выросла до 11,5
                процента в пересчете на год, хотя в третьем квартале она составляла 9,7 процента.
            </p>
            <QuoteArticle />
            <div className="flex flex-col gap-10 max-md:gap-[25px] max-sm:gap-0">
                <h2 className="text-[30px] leading-[150%] tracking-[.2px] max-md:text-[20px] max-md:leading-[140%]">Экономика перегрета</h2>
                <p className="leading-[168%] text-[#333] tracking-[.15px] max-md:text-[15px] max-md:leading-[161%] max-sm:mt-[30px]">
                    Регулятор столкнулся с тем, что российская экономика все сильнее отклоняется от траектории
                    сбалансированного роста. Во втором полугодии процесс зашел дальше, чем предполагали прогнозы.
                    В частности, рост ВВП по итогам года превысит ожидаемые в октябре 3 процента, однако и инфляция
                    подойдет к верхней границе диапазона 7-7,5 процента.
                </p>
                <div className="flex flex-col gap-[5px] max-sm:min-w-[320px] max-sm:mt-[22px]">
                    <img src={articleImg1} alt="article-img1"/>
                    <p className="text-[13px] text-[#999] leading-[170%] tracking-[-0.44px]">
                        Фото: Владимир Федоренко / Комитет информации
                    </p>
                </div>
                <p className="leading-[168%] text-[#333] tracking-[.17px] max-md:text-[15px] max-md:leading-[161%] max-sm:mt-[23px]">
                    На пресс-конференции после заседания глава регулятора Эльвира Набиуллина объяснила,
                    что российская экономика на фоне высокой и устойчивой инфляции не успевает за растущим спросом.
                </p>
            </div>
            <QuoteArticle />
            <div className="flex flex-col gap-10 mb-20 max-md:gap-[30px]">
                <h2 className="text-[30px] leading-[150%] tracking-[-0.3px] max-md:text-[20px] max-md:leading-[140%]">Предел еще не найден</h2>
                <div className="flex flex-col gap-5 max-sm:gap-[25px]">
                    <p className="leading-[168%] text-[#333] tracking-[0.19px] max-md:text-[15px] max-md:leading-[161%]">
                        Полтора месяца назад, во время предыдущего повышения ставки с 13 до 15 процентов,
                        большинство аналитиков ожидали, что ужесточение ДКП закончено. Ближе к 15 декабря консенсусным
                        стало мнение, что ЦБ придется повышать ставку, основной вопрос был только в величине
                        повышения — на один или два процентных пункта.
                    </p>
                    <p className="leading-[168%] text-[#333] tracking-[0.19px] max-md:text-[15px] max-md:leading-[161%]">
                        Регулятор избрал более консервативную тактику, хотя Набиуллина указала,
                        что предметно рассматривались два варианта — сохранить на уровне 15 процентов
                        или повысить до 16 процентов, однако не сообщил о завершении цикла повышения ставок.
                        По словам председателя ЦБ, цикл повышения ставок близок к завершению,
                        но надо смотреть на дальнейшую инфляцию.
                    </p>
                    <p className="leading-[168%] text-[#333] tracking-[0.19px] max-md:text-[15px] max-md:leading-[161%]">
                        Глава регулятора уточнила, что падение курса рубля все меньше влияет на рост цен,
                        нынешняя инфляция наблюдается в сегментах потребительской корзины,
                        которые от стоимости рубля зависят слабо. В частности, рост цен на
                        услуги (кроме ЖКХ) за три месяца в пересчете на год превысил 14 процентов.
                        На них влияет высокий спрос, а тот подпитывается максимально высокими инфляционными ожиданиями.
                    </p>
                </div>
            </div>
            <div className="flex flex-col max-md:gap-0">
                <h2 className="text-[30px] leading-[150%] tracking-[.1px] max-md:text-[20px] max-md:leading-[140%]">На рубле не скажется</h2>
                <div className="flex flex-col gap-5 mt-[42px] max-md:mt-[30px]">
                    <p className="leading-[168%] text-[#333] tracking-[0.19px] max-md:text-[15px] max-md:leading-[161%]">
                        Рынок был готов к таким действиям Центробанка, хотя в последнее время его решения было сложно
                        предсказать. Банки начали заранее закладыватьужесточение ДКП в ставки по вкладам и,
                        судя по комментариям, были готовы скорее увидеть 17 процентов, чем 15.
                    </p>
                    <p className="leading-[168%] text-[#333] tracking-[0.19px] max-md:text-[15px] max-md:leading-[161%]">
                        На этом фоне рубль незначительно укрепился, вновь преодолев отметку в 90 рублей за доллар,
                        однако высокая волатильность в последние месяцы стала нормальной для российской валюты.
                        К тому же с учетом обязательных продаж валютной выручки и курсовых пошлин ставка перестала
                        играть ту роль в курсе рубля, что раньше.
                    </p>
                    <p className="leading-[168%] text-[#333] tracking-[0.19px] max-md:text-[15px] max-md:leading-[161%]">
                        Набиуллина подчеркнула, что многое будет зависеть от цен на нефть, которые напрямую влияют
                        на объем иностранной валюты, поступающей на российский рынок. Если ее объем снизится,
                        а действия ОПЕК+ по поддержанию рынка не дадут результата, вероятность снижения курса,
                        а значит, и повышения ставки, увеличится.
                    </p>
                </div>
                <div className="article__slider flex flex-wrap mt-[41px] gap-y-10 gap-x-5 justify-center  max-md:mt-[27px] max-sm:justify-start ">
                    <div className="flex flex-col gap-[5px] max-sm:min-w-[320px]">
                        <img className="max-sm:w-[320px] max-sm:h-[180px]" src={articleImg2} alt="articleImg2"/>
                            <p className="text-[13px] text-[#999] leading-[170%] tracking-[0.2px]">
                                Фото: Владимир Федоренко / Комитет информации
                            </p>
                    </div>
                   {/* <div className="flex flex-col gap-[5px] max-sm:min-w-[320px]">
                        <img className="max-sm:w-[320px] max-sm:h-[180px]" src={articleImg3} alt="articleImg3"/>
                            <p className="text-[13px] text-[#999] leading-[170%] tracking-[-0.33px]">
                                Фото: Владимир Федоренко / Комитет информации
                            </p>
                    </div>
                    <div className="flex flex-col gap-[5px] max-sm:min-w-[320px]">
                        <img className="max-sm:w-[320px] max-sm:h-[180px]" src={articleImg4} alt="articleImg4"/>
                            <p className="text-[13px] text-[#999] leading-[170%] tracking-[0.2px]">
                                Фото: Владимир Федоренко / Комитет информации
                            </p>
                    </div>*/}
                </div>
                <div className="sm:hidden w-full flex justify-center mt-[15px] mb-[40px]">
                    <div className="w-[14px] h-[14px] bg-black"></div>
                </div>
                <div className="xl:hidden flex justify-center">
                    <ArticleSocialLinks />
                </div>
            </div>
            <ArticleContentNavigation />
        </div>
    );
};

export default ArticleContent;