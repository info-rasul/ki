import React from 'react';

const BankruptcyAssistance = () => {
    return (
        <div>
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-[41px] max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[40px] max-sm:mb-[30px]">
                В чем заключается помощь при банкротстве
            </h2>
            <p className="leading-[170%] tracking-[.16px] max-sm:text-[15px] max-sm:leading-[160%]">
                Сопровождающий юрист возьмет на себя следующие действия по процедуре банкротства:
            </p>
            <ul className="markers flex flex-col gap-[10px] mt-[20px] max-sm:mt-[25px]">
                <li className="max-sm:mt-[1px]">Сбор и подготовка всех необходимых документов</li>
                <li className="max-sm:mt-[1px]">Подача заявления в арбитражный суд</li>
                <li className="max-sm:mt-[7px]">Составление необходимых отчетов</li>
                <li className="max-sm:mt-[5px]">Законное истребование дебиторских задолженностей</li>
                <li className="max-sm:mt-[-1px]">Общение с кредиторами и арбитражным управляющим</li>
                <li className="max-sm:mt-[0]">Установление полного размера долгов перед кредиторами всех очередей</li>
                <li className="max-sm:mt-[1px]">Участие в составлении реестра кредиторов и контроль над правильностью составления реестра</li>
                <li className="max-sm:mt-[1px]">Опись имущества должника</li>
                <li className="max-sm:mt-[4px]">Правовая защита должника на протяжении всей процедуры</li>
            </ul>
            <p className="sm:hidden leading-[170%] tracking-[.3px] mt-[25px] max-sm:text-[15px] max-sm:leading-[160%]">
                Какую цель будет преследовать процесс, зависит от наличия у должника активов, средств,
                недвижимого и движимого имущества. Если все это имеется – суд до последнего будет пытаться «вытащить»
                должника из долговой ямы. Это касается как юридических, так и физических лиц.
                Если же к моменту обращения с заявлением о банкротстве не осталось ничего – ни денег,
                ни сколько-нибудь значимых активов – остается один выход: конкурсное производство. Его цели:
            </p>
            <div className="sm:hidden numbered-list mt-[26px]">
                <ol className="flex flex-col gap-[10px]">
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Реализовать оставшиеся активы и имущество на электронных торгах
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.15px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Вернуть кредиторам хотя бы часть долга, а остальное списать
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[155%]">
                        Дать банкроту юридическую защиту от разъяренных кредиторов (после официального объявления о
                        банкротстве они теряют право преследовать банкрота за долги)
                    </li>
                </ol>
            </div>
            <div className="pr-[35px] pl-[31px] py-[25px] border-l-4 border-green-700 bg-teal-200 bg-opacity-10 mt-[30px] max-sm:pr-[30px] max-sm:pl-[26px] max-sm:pb-[23px] max-sm:pt-[20px] max-sm:mt-[26px]">
                <p className="text-[#086C80] leading-[181%] tracking-[0.3px] max-sm:text-[15px] max-sm:leading-[150%]">
                    Оптимальный вариант – сначала найти сопровождающего, а уже затем, с его помощью, подать заявление о
                    банкротстве. Но можно сделать это на любом этапе, как только вы обнаружите необходимость в поддержке.
                    Важно только тщательно подобрать специалиста. Услуги сопровождающих по банкротству стоят недешево.
                </p>
            </div>
        </div>
    );
};

export default BankruptcyAssistance;