import React from 'react';

const PurposesOfBankruptcy = () => {
    return (
        <div>
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[60px] max-sm:mb-[30px]">
                Цели банкротства
            </h2>
            <p className="leading-[170%] tracking-[.16px] max-sm:text-[15px] max-sm:leading-[160%]">
                В зависимости от реального материального положения должника у процедуры банкротства могут быть две цели:
            </p>
            <div className="numbered-list mt-5 max-sm:mt-[26px]">
                <ol className="flex flex-col gap-[10px]">
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Восстановить платежеспособность компании, либо физического лица,
                        способствовать полному возврату долгов. В таком случае банкрот так и не становится банкротом,
                        а возвращается в ряды платежеспособных субъектов
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Распродать имущество должника, чтобы хотя бы частично погасить имеющиеся долги.
                        В этом случае юридическое лицо ликвидируется, а физическое получает временное поражение в
                        правах (трех- пятилетний запрет на занятие определенными видами деятельности и обязанность
                        сообщать контрагентам всех своих сделок о своем банкротстве).
                    </li>
                </ol>
            </div>
            <p className="leading-[170%] tracking-[.2px] mt-[29px] max-sm:text-[15px] max-sm:leading-[159%] max-sm:mt-[25px] max-sm:tracking-[.3px]">
                Какую цель будет преследовать процесс, зависит от наличия у должника активов, средств,
                недвижимого и движимого имущества. Если все это имеется – суд до последнего будет пытаться
                «вытащить» должника из долговой ямы. Это касается как юридических, так и физических лиц.
                Если же к моменту обращения с заявлением о банкротстве не осталось ничего – ни денег,
                ни сколько-нибудь значимых активов – остается один выход: конкурсное производство. Его цели:
            </p>
            <div className="numbered-list mt-[20px] max-sm:mt-[25px]">
                <ol className="flex flex-col gap-[12.2px]">
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[154%]">
                        Реализовать оставшиеся активы и имущество на электронных торгах
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[154%] max-sm:tracking-[.15px]">
                        Вернуть кредиторам хотя бы часть долга, а остальное списать
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[154%]">
                        Дать банкроту юридическую защиту от разъяренных кредиторов (после официального объявления о
                        банкротстве они теряют право преследовать банкрота за долги)
                    </li>
                </ol>
            </div>
            <div className="pr-[35px] pl-[32px] py-[25px] border-l-4 border-[#BB2525] bg-[#BB2525] bg-opacity-10 mt-[30px] max-sm:mt-[25.1px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[27px]">
                <p className="text-[#BB2525] leading-[180%] tracking-[.1px] max-sm:text-[15px] max-sm:leading-[154%]">
                    Даже для профессионального юриста подобная работа нелегка и требует предельной концентрации внимания.
                    Юридически неподкованному человеку она вообще не под силу. Особенно на фоне стресса, которым,
                    безусловно является банкротство для обычного гражданина, ранее не сталкивавшегося с судебными
                    разбирательствами. А таких людей большинство.
                </p>
            </div>
        </div>
    );
};

export default PurposesOfBankruptcy;