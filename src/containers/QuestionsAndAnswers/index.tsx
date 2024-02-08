// @ts-ignore
import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import {Navigation, MetaInfo, Header} from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";

const QuestionsAndAnswers: FunctionComponent = () => {
    const namePage = "Вопросы и ответы"
    const { isDarkMenu } = getRouteMetaInfo("QuestionsAndAnswers");
    const darkMenu = !!isDarkMenu;

    return(
        /*удалил класс - container*/
        <Fragment>
            <Header isDarMenu={darkMenu} />
            <div className="container">
                <MetaInfo {...getRouteMetaInfo("QuestionsAndAnswers")} />
                <div className="overflow-x-hidden pb-20 max-[1100px]:px-4">
                    <Navigation namePage={namePage}/>
                    <p className="leading-[170%] text-justify  mt-[30px] max-sm:text-[15px] max-sm:leading-[160%] max-sm:mt-[25px]">
                        Если оба признака совпали – лицо обязано в месячный срок подать в арбитражный суд заявление о своей
                        несостоятельности. В противном случае, когда он все-таки обратится с заявлением,
                        на него наложат административный штраф за пропуск срока подачи заявления.
                    </p>
                    <div style={{borderLeft: '4px solid var(--700, #097990)', background: 'rgba(8, 108, 128, 0.10)',}} className="pr-[35px] pl-[31px] py-[25px]  mt-[30px] max-sm:mt-[24px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                        <p className="text-[#086C80] leading-[180%] text-justify  max-sm:text-[15px] max-sm:leading-[150%]">
                            Оптимальный вариант – сначала найти сопровождающего, а уже затем, с его помощью, подать заявление о
                            банкротстве. Но можно сделать это на любом этапе, как только вы обнаружите необходимость в поддержке.
                            Важно только тщательно подобрать специалиста. Услуги сопровождающих по банкротству стоят недешево.
                        </p>
                    </div>
                    <p className="leading-[170%] text-justify  mt-[30px] max-sm:text-[15px] max-sm:leading-[160%] max-sm:mt-[25px]">
                        Если оба признака совпали – лицо обязано в месячный срок подать в арбитражный суд заявление о своей
                        несостоятельности. В противном случае, когда он все-таки обратится с заявлением,
                        на него наложат административный штраф за пропуск срока подачи заявления.
                    </p>
                    <div style={{borderLeft: '4px solid var(--700, #097990)', background: 'rgba(8, 108, 128, 0.10)',}} className="pr-[35px] pl-[31px] py-[25px]  mt-[30px] max-sm:mt-[24px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                        <p className="text-[#086C80] leading-[180%] text-justify  max-sm:text-[15px] max-sm:leading-[150%]">
                            Оптимальный вариант – сначала найти сопровождающего, а уже затем, с его помощью, подать заявление о
                            банкротстве. Но можно сделать это на любом этапе, как только вы обнаружите необходимость в поддержке.
                            Важно только тщательно подобрать специалиста. Услуги сопровождающих по банкротству стоят недешево.
                        </p>
                    </div>
                    <p className="leading-[170%] text-justify  mt-[30px] max-sm:text-[15px] max-sm:leading-[160%] max-sm:mt-[25px]">
                        Если оба признака совпали – лицо обязано в месячный срок подать в арбитражный суд заявление о своей
                        несостоятельности. В противном случае, когда он все-таки обратится с заявлением,
                        на него наложат административный штраф за пропуск срока подачи заявления.
                    </p>
                    <div style={{borderLeft: '4px solid var(--700, #097990)', background: 'rgba(8, 108, 128, 0.10)',}} className="pr-[35px] pl-[31px] py-[25px]  mt-[30px] max-sm:mt-[24px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                        <p className="text-[#086C80] leading-[180%] text-justify  max-sm:text-[15px] max-sm:leading-[150%]">
                            Оптимальный вариант – сначала найти сопровождающего, а уже затем, с его помощью, подать заявление о
                            банкротстве. Но можно сделать это на любом этапе, как только вы обнаружите необходимость в поддержке.
                            Важно только тщательно подобрать специалиста. Услуги сопровождающих по банкротству стоят недешево.
                        </p>
                    </div>
                    <p className="leading-[170%] text-justify  mt-[30px] max-sm:text-[15px] max-sm:leading-[160%] max-sm:mt-[25px]">
                        Если оба признака совпали – лицо обязано в месячный срок подать в арбитражный суд заявление о своей
                        несостоятельности. В противном случае, когда он все-таки обратится с заявлением,
                        на него наложат административный штраф за пропуск срока подачи заявления.
                    </p>
                    <div style={{borderLeft: '4px solid var(--700, #097990)', background: 'rgba(8, 108, 128, 0.10)',}} className="pr-[35px] pl-[31px] py-[25px]  mt-[30px] max-sm:mt-[24px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                        <p className="text-[#086C80] leading-[180%] text-justify  max-sm:text-[15px] max-sm:leading-[150%]">
                            Оптимальный вариант – сначала найти сопровождающего, а уже затем, с его помощью, подать заявление о
                            банкротстве. Но можно сделать это на любом этапе, как только вы обнаружите необходимость в поддержке.
                            Важно только тщательно подобрать специалиста. Услуги сопровождающих по банкротству стоят недешево.
                        </p>
                    </div>
                    <p className="leading-[170%] text-justify  mt-[30px] max-sm:text-[15px] max-sm:leading-[160%] max-sm:mt-[25px]">
                        Если оба признака совпали – лицо обязано в месячный срок подать в арбитражный суд заявление о своей
                        несостоятельности. В противном случае, когда он все-таки обратится с заявлением,
                        на него наложат административный штраф за пропуск срока подачи заявления.
                    </p>
                    <div style={{borderLeft: '4px solid var(--700, #097990)', background: 'rgba(8, 108, 128, 0.10)',}} className="pr-[35px] pl-[31px] py-[25px]  mt-[30px] max-sm:mt-[24px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                        <p className="text-[#086C80] leading-[180%] text-justify  max-sm:text-[15px] max-sm:leading-[150%]">
                            Оптимальный вариант – сначала найти сопровождающего, а уже затем, с его помощью, подать заявление о
                            банкротстве. Но можно сделать это на любом этапе, как только вы обнаружите необходимость в поддержке.
                            Важно только тщательно подобрать специалиста. Услуги сопровождающих по банкротству стоят недешево.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>

    )
};

export default QuestionsAndAnswers;
