import React from 'react';
interface BankruptcyAssistanceProps {
    styles: React.CSSProperties;
}

const BankruptcyAssistance: React.FC<BankruptcyAssistanceProps> = ({ styles }) => {
    return (
        <div>
            <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[45px] tracking-[-0.2px] mt-20 mb-10 max-sm:text-[20px] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                Экономическая преступность — это сложная совокупность нескольких десятков составов преступлений,
                предусмотренных уголовным законом. Сложность данного рода преступлений связана, как с расследованием,
                так и с защитой законных прав и интересов.
            </h2>
            <div className="flex flex-col gap-5 mt-5 max-sm:gap-[25px]">
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Согласно данным официальной статистики экономические преступления в современной России занимают
                    второе место по распространенности, несмотря на высокий уровень латентности данных преступлений.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Уголовные дела экономической направленности сопряжены с большим количеством следственных действий,
                    в том числе с сложными комплексными экспертизами. Помимо прочего,
                    данные категории дел связаны с большой гласностью и привлекают внимание общественности,
                    что может ухудшать положение лица и негативно сказаться на ход дела.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Уголовные дела экономической направленности сопряжены с большим количеством следственных действий,
                    в том числе с сложными комплексными экспертизами. Помимо прочего, данные категории дел связаны с
                    большой гласностью и привлекают внимание общественности,
                    что может ухудшать положение лица и негативно сказаться на ход дела.
                </p>
                <p className="leading-[27.2px] max-sm:text-[15px]">
                    Общая теоретическая неподготовленность следственных органов приводит не только к затягиванию
                    необходимых процессов, но и к ошибкам со всеми вытекающими последствиями:
                    в виде избрания чрезмерно суровой меры пресечения, блокировке счетов, активов,
                    невозможности ведения любой финансово-хозяйственной деятельности предприятием
                    или ответственными лицами.
                </p>
            </div>
            <div>
                <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[45px] tracking-[-0.1px] mt-10 mb-[38px] max-sm:text-[20px] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                    Но сложности нас не пугают, а вдохновляют!
                </h2>
                <div className="flex flex-col gap-[20px] p-[28px] bg-[#F8F8F8]">
                    <h3 className="leading-[30px] tracking-[-0.1px] text-[20px] max-sm:tracking-normal">
                        Наша высококвалифицированная команда профессионалов предоставляет индивидуальное,
                        комплексное и всестороннее сопровождение сложных уголовных дел,
                        как на этапе проверки сообщения о преступлении, так и после возбуждения уголовного дела
                    </h3>
                    <div className="gradient-border-left">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            При проведении предварительного расследования
                        </p>
                    </div>
                    <div className="gradient-border-left">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            Осуществления следственных действий, проверок уполномоченными органами <br className="max-md:hidden"/> и осуществлении
                            иных оперативно-розыскных мероприятий
                        </p>
                    </div>
                </div>
                <p className="leading-[27.2px] mt-10 max-sm:text-[15px]">
                    Боле того, мы приложим все усилия, чтобы уголовное дело не было возбуждено,
                    а возбужденное подлежало прекращению. На всех стадиях судебного процесса,
                    в т. ч. при обжаловании приговора, снятии судимости, а также по вопросам изменения меры пресечения,
                    условно-досрочного освобождения или помилования.
                </p>
                <div className="flex flex-col gap-[20px] p-[28px] bg-[#F8F8F8] mt-10">
                    <h3 className="leading-[30px] tracking-[-0.1px] text-[20px] max-sm:tracking-normal">
                        «Иногда в массе данных нет никакого смысла, а иногда единственный факт
                        бесценен» — известная цитата Н. Талеба, полностью отражающая принцип нашей работы,
                        который заключается в следующем:
                    </h3>
                    <div className="gradient-border-left">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            Всесторонне изучать дело, не упуская ни малейшей детали;
                        </p>
                    </div>
                    <div className="gradient-border-left">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            Находить в массе данных и видеть то, что другие упускают из своего поля зрения;
                        </p>
                    </div>
                    <div className="gradient-border-left">
                        <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                            Добыть тот «бесценный факт», перевернув дело с ног на голову,
                            и использовать его для достижения <br className="max-md:hidden"/> целей с максимальной результативностью и выгодой.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-10">
                <h3 className="leading-[30px] tracking-[-0.1px] text-[20px] max-sm:tracking-normal">
                    Наши специалисты отличаются своим подходом к информации: ее сбору, поиску, анализу <br/> и использованию.
                </h3>
                <p className="leading-[27.2px] mt-[20px] max-sm:text-[15px]">
                    Высококвалифицированная команда готова немедленно приступить к изучению необходимого массива данных.
                    Мы не только занимаемся глубоким анализом уже известной информации,
                    но и получаем ее из дополнительных источников, проводим личные расследования,
                    инициируем переговоры и применяем альтернативные способы разрешения ситуации.
                </p>
                <div className="flex flex-col gap-[4px] mt-10">
                    <div className="flex flex-col gap-[20px] p-[28px] bg-[#F8F8F8]">
                        <h3 className="leading-[30px] tracking-[-0.1px] text-[20px] max-sm:tracking-normal">
                            Наше сопровождение уголовных дел безгранично <br className="max-md:hidden"/>
                            и не боится трудностей
                        </h3>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                При наличии отягчающих обстоятельств, в том числе связанных с деятельностью
                                преступных сообществ или группировок
                            </p>
                        </div>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                В многоэпизодных делах экономической направленности, связанных иностранными гражданами,
                                предприятиями или транснациональной преступностью
                            </p>
                        </div>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                В случае наличия нарушений со стороны уполномоченных лиц, служб и ведомств,
                                при проведении экспертиз, проверок или иных мероприятий
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] p-[28px] bg-[#F8F8F8]">
                        <h3 className="leading-[30px] tracking-[-0.1px] text-[20px] max-sm:tracking-normal">
                            Специалисты компании не боятся разрешения резонансных <br className="max-md:hidden"/>
                            дел и событий с участием:
                        </h3>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Лиц, имеющих публичный статус
                            </p>
                        </div>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Лиц, замещающих государственные должности
                            </p>
                        </div>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Владельцев крупного бизнеса и капитала
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] p-[28px] bg-[#F8F8F8]">
                        <h3 className="leading-[30px] tracking-[-0.1px] text-[20px] max-sm:tracking-normal">
                            Наша команда способна курировать вопросы пребывания <br className="max-md:hidden"/>
                            осужденных в исправительных учреждениях, а именно
                        </h3>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Соблюдение условий пребывания
                            </p>
                        </div>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Гарантия отсутствия угрозы жизни и здоровью со стороны временного и постоянного контингента
                            </p>
                        </div>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Составление всех необходимых документов, ходатайств и прошений
                            </p>
                        </div>
                        <div className="gradient-border-left">
                            <p className="leading-[27.2px] max-xl:mt-0 tracking-[0.1px] max-sm:text-[15px] pl-[15px]">
                                Доведения критически важной информации до администрации пенитенциарного учреждения
                                <br className="max-md:hidden"/> или законных представителей, лица, отбывающего наказание
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="leading-[27.2px] max-sm:text-[15px] mt-[60px]">
                Мы не предлагаем в сложных обстоятельствах призрачную надежду или веру в счастливый случай,
                не работаем с прицелом на почасовую оплату, «гонорар успеха» и не заключаем невыгодных сделок для
                быстрого разрешения дела, а бьем точно в цель — оказываем профессиональную помощь,
                которая способна в корне изменить ситуацию и решить ваши проблемы в объективной реальности.
            </p>
        </div>
    );
};

export default BankruptcyAssistance;