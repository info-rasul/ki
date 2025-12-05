// @ts-ignore
import type { FunctionComponent } from "react";
import React, {Fragment, useState} from "react";
import {Navigation, MetaInfo, Header} from "../../components";
import { getRouteMetaInfo } from "../../config/meta.config";
import ArrowIcon from "../../assets/img/arrow-icon.svg"

const QuestionsAndAnswers: FunctionComponent = () => {
    const namePage = "Вопросы и ответы"
    const { isDarkMenu } = getRouteMetaInfo("QuestionsAndAnswers");
    const darkMenu = !!isDarkMenu;

    const [active, setActive] = useState(0)

    return(
        /*удалил класс - container*/
        <Fragment>
            <Header isDarMenu={darkMenu} />
            <div className="container">
                <MetaInfo {...getRouteMetaInfo("QuestionsAndAnswers")} />
                <div className="overflow-x-hidden pb-20 max-[1100px]:px-4">
                    <Navigation namePage={namePage}/>
                    <div className="mt-[71px] flex flex-col gap-[24px]">
                        <div className="w-full bg-[#F2F2F2] px-[30px] py-[25px] flex flex-col gap-5">
                            <div
                                onClick={() => active === 1 ? setActive(0) : setActive(1)}
                                className="questionsAndAnswers w-full flex justify-between items-center cursor-pointer max-[1040px]:items-start"
                            >
                                <p className="text-[20px] leading-[28px]">
                                    Что такое Комитет информации?
                                </p>
                                <img style={{transform: active === 1 ? 'rotate(180deg)' : 'rotate(0deg)'}} src={ArrowIcon} alt="Arrow"/>
                            </div>
                            <div style={{display: active === 1 ? 'block' : 'none'}}>
                                <p className="leading-[27.2px]">
                                    Это концептуальный консалтинговый бренд, объединяющий экспертов с многолетним
                                    опытом работы в правоохранительных и надзорных органах, а также в органах
                                    государственной власти Российской Федерации. Мы объединение уникальных специалистов,
                                    которые строят работу на индивидуальном системном подходе к задачам и проектам.
                                </p>
                                <div style={{borderLeft: '4px solid var(--700, #097990)', background: 'rgba(8, 108, 128, 0.10)',}}
                                     className="pr-[35px] pl-[31px] py-[25px]  mt-[20px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                                    <p className="text-[#086C80] leading-[28.8px] max-sm:text-[15px]">
                                        Мы трансформируем информацию в возможности.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-[#F2F2F2] px-[30px] py-[25px] flex flex-col gap-5">
                            <div
                                onClick={() => active === 2 ? setActive(0) : setActive(2)}
                                className="questionsAndAnswers w-full flex justify-between items-center cursor-pointer max-[1040px]:items-start"
                            >
                                <p className="text-[20px] leading-[28px]">
                                    Что выделяет Комитет информации среди других организаций, оказывающих подобные услуги?
                                </p>
                                <img style={{transform: active === 2 ? 'rotate(180deg)' : 'rotate(0deg)'}} src={ArrowIcon} alt="Arrow"/>
                            </div>
                            <div style={{display: active === 2 ? 'block' : 'none'}}>
                                <p className="leading-[27.2px]">
                                    Подход. Наша команда всецело погружается в ваше дело, по крупицам разбирая
                                    имеющуюся информацию, чтобы найти точку опоры, благодаря которой все
                                    сдвинется с места. Специалисты используют альтернативные законные методы поиска,
                                    сбора и каталогизации информации, которые позволяют превратить безнадежное дело —
                                    в набор простых действий.
                                </p>
                                <div style={{borderLeft: '4px solid var(--700, #097990)', background: 'rgba(8, 108, 128, 0.10)',}}
                                     className="pr-[35px] pl-[31px] py-[25px]  mt-[20px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                                    <p className="text-[#086C80] leading-[28.8px] max-sm:text-[15px]">
                                        «Кто владеет информацией, тот владеет миром». Н. Ротшильд.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-[#F2F2F2] px-[30px] py-[25px] flex flex-col gap-5">
                            <div
                                onClick={() => active === 3 ? setActive(0) : setActive(3)}
                                className="questionsAndAnswers w-full flex justify-between items-center cursor-pointer max-[1040px]:items-start"
                            >
                                <p className="text-[20px] leading-[28px]">
                                    Мы хотим с вами сотрудничать, какая последовательность действий?
                                </p>
                                <img style={{transform: active === 3 ? 'rotate(180deg)' : 'rotate(0deg)'}} src={ArrowIcon} alt="Arrow"/>
                            </div>
                            <div style={{display: active === 3 ? 'block' : 'none'}}>
                                <p className="leading-[27.2px]">Основные этапы взаимодействия с нашей командой:</p>
                                <div className="numbered-list mt-5">
                                    <ol className="flex flex-col gap-[10px]">
                                        <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                                            Анализ, сбор и структуризация информации (самый значимый и долгий этап).
                                            Мы обрабатываем информацию в поисках ключевой идеи, поэтому отводим первому
                                            этапу большое количество времени на оценку фактов, обстоятельств,
                                            возможностей и вариантов решения ситуации. Вы не платите нам за анализ,
                                            а наша команда получает достаточное количество времени на подбор самых
                                            эффективных инструментов для решения вашей задачи.
                                        </li>
                                        <li className="leading-[170%] ml-[45px]  max-sm:text-[15px] max-sm:leading-[160%]">
                                            Реализация ключевой идеи. После выявления «бесценного факта»,
                                            мы начинаем действовать. Реализация наших действий будет полностью зависеть
                                            от того, на каком этапе трудностей вы к нам обратились.
                                            Чем раньше вы обратитесь к нашей команде,
                                            тем проще будет привести вас к желаемому результату.
                                        </li>
                                        <div style={{borderLeft: '4px solid var(--700, #097990)', background: 'rgba(8, 108, 128, 0.10)',}}
                                             className="ml-[45px] pr-[35px] pl-[31px] py-[25px] my-[10px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]"
                                        >
                                            <p className="text-[#086C80] leading-[28.8px] max-sm:text-[15px]">
                                                «Самый ценный ресурс, который у нас есть, — это время» - Стив Джобс.
                                            </p>
                                        </div>
                                        <li className="leading-[170%] ml-[45px]  max-sm:text-[15px] max-sm:leading-[160%]">
                                            Подведение итогов и взаиморасчеты.
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-[#F2F2F2] px-[30px] py-[25px] flex flex-col gap-5">
                            <div
                                onClick={() => active === 4 ? setActive(0) : setActive(4)}
                                className="questionsAndAnswers w-full flex justify-between items-center cursor-pointer max-[1040px]:items-start"
                            >
                                <p className="text-[20px] leading-[28px]">
                                    Какие вы даете гарантии?
                                </p>
                                <img style={{transform: active === 4 ? 'rotate(180deg)' : 'rotate(0deg)'}} src={ArrowIcon} alt="Arrow"/>
                            </div>
                            <div style={{display: active === 4 ? 'block' : 'none'}}>
                                <p className="leading-[27.2px]">
                                    Нас интересуют сложные многозадачные проекты, в которых мы готовы разобраться.
                                    Мы не берем предоплату за анализ дела. Наша команда не практикует форматы
                                    вознаграждения в виде: почасовой оплаты, фиксированных тарифов или «гонорара успеха».
                                    Взамен этого наши специалисты проводят глубокий анализ проекта,
                                    учитывая все возможные варианты развития событий, и только после этого возвращаемся
                                    к вам с предложением о сотрудничестве.
                                </p>
                                <p className="leading-[27.2px] mt-5">
                                    Финальная стоимость наших услуг рассчитывается индивидуально,
                                    исходя из сложности проекта, способа, инструментов и времени,
                                    потраченного на реализацию. Мы предлагаем уже готовое решение и информацию,
                                    а не время разговоров или установочных встреч.
                                </p>
                            </div>
                        </div>

                        <div className="w-full bg-[#F2F2F2] px-[30px] py-[25px] flex flex-col gap-5">
                            <div
                                onClick={() => active === 5 ? setActive(0) : setActive(5)}
                                className="questionsAndAnswers w-full flex justify-between items-center cursor-pointer max-[1040px]:items-start"
                            >
                                <p className="text-[20px] leading-[28px]">
                                    Работа с вами подразумевает конфиденциальность?
                                </p>
                                <img style={{transform: active === 5 ? 'rotate(180deg)' : 'rotate(0deg)'}} src={ArrowIcon} alt="Arrow"/>
                            </div>
                            <div style={{display: active === 5 ? 'block' : 'none'}}>
                                <p className="leading-[27.2px]">
                                    Да. Мы предлагаем вам не только конфиденциальность и соглашение о неразглашении,
                                    но и абсолютную анонимность:
                                </p>
                                <ul className="markers flex flex-col gap-[10px] mt-5">
                                    <li>
                                        наша команда не дает комментариев и не выходит на
                                        открытый диалог без прямого указания клиента;
                                    </li>
                                    <li>
                                        не раскрываем обстоятельства наших кейсов без согласия клиента;
                                    </li>
                                    <li>
                                        не ведем журналов встреч, протокола консультаций и не
                                        прибегаем к иным способам фиксации информации.
                                    </li>
                                </ul>
                                <p className="leading-[27.2px] mt-5">
                                    Специалисты готовы проводить встречи с использованием тех средств связи,
                                    мест и обстоятельств, которые конечный клиент считает разумными или необходимыми.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default QuestionsAndAnswers;
