import React from 'react';

const BankruptcyAssistance = () => {
    return (
        <div>
            <h2 style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[150%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[40px] max-sm:mb-[30px] max-sm:tracking-normal">
                В чем заключается помощь при банкротстве
            </h2>
            <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                Сопровождающий юрист возьмет на себя следующие действия по процедуре банкротства:
            </p>
            <ul className="markers flex flex-col gap-[10px] mt-[20px] max-sm:mt-[25px]">
                <li>Сбор и подготовка всех необходимых документов</li>
                <li>Подача заявления в арбитражный суд</li>
                <li>Составление необходимых отчетов</li>
                <li>Законное истребование дебиторских задолженностей</li>
                <li>Общение с кредиторами и арбитражным управляющим</li>
                <li>Установление полного размера долгов перед кредиторами всех очередей</li>
                <li>Участие в составлении реестра кредиторов и контроль над правильностью составления реестра</li>
                <li>Опись имущества должника</li>
                <li>Правовая защита должника на протяжении всей процедуры</li>
            </ul>
            <p className="sm:hidden leading-[170%] mt-[25px] max-sm:text-[15px] max-sm:leading-[160%]">
                Какую цель будет преследовать процесс, зависит от наличия у должника активов, средств,
                недвижимого и движимого имущества. Если все это имеется – суд до последнего будет пытаться «вытащить»
                должника из долговой ямы. Это касается как юридических, так и физических лиц.
                Если же к моменту обращения с заявлением о банкротстве не осталось ничего – ни денег,
                ни сколько-нибудь значимых активов – остается один выход: конкурсное производство. Его цели:
            </p>
            <div className="sm:hidden numbered-list mt-[25px]">
                <ol className="flex flex-col gap-[10px]">
                    <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Реализовать оставшиеся активы и имущество на электронных торгах
                    </li>
                    <li className="leading-[170%] ml-[45px]  max-sm:text-[15px] max-sm:leading-[160%]">
                        Вернуть кредиторам хотя бы часть долга, а остальное списать
                    </li>
                    <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Дать банкроту юридическую защиту от разъяренных кредиторов (после официального объявления о
                        банкротстве они теряют право преследовать банкрота за долги)
                    </li>
                </ol>
            </div>
            <div className="pr-[35px] pl-[31px] py-[25px] border-l-4 border-green-700 bg-teal-200 bg-opacity-10 mt-[30px] max-sm:pr-[30px] max-sm:pl-[26px] max-sm:py-[20px] max-sm:mt-[25px]">
                <p className="text-[#086C80] leading-[180%]  max-sm:text-[15px] max-sm:leading-[150%]">
                    Оптимальный вариант – сначала найти сопровождающего, а уже затем, с его помощью, подать заявление о
                    банкротстве. Но можно сделать это на любом этапе, как только вы обнаружите необходимость в поддержке.
                    Важно только тщательно подобрать специалиста. Услуги сопровождающих по банкротству стоят недешево.
                </p>
            </div>
        </div>
    );
};

export default BankruptcyAssistance;