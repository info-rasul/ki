import React from 'react';

const PurposesOfBankruptcy = () => {
    return (
        <div>
            <div style={{ fontSize: 'clamp(24px, 2.2vw, 30px)' }} className="leading-[150%] tracking-[-0.3px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[60px] max-sm:mb-[30px] max-sm:tracking-normal">
                Цели банкротства
            </div>
            <p className="leading-[170%] max-sm:text-[15px] max-sm:leading-[160%]">
                В зависимости от реального материального положения должника у процедуры банкротства могут быть две цели:
            </p>
            <div className="numbered-list mt-5 max-sm:mt-[26px]">
                <ol className="flex flex-col gap-[10px]">
                    <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Восстановить платежеспособность компании, либо физического лица,
                        способствовать полному возврату долгов. В таком случае банкрот так и не становится банкротом,
                        а возвращается в ряды платежеспособных субъектов
                    </li>
                    <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Распродать имущество должника, чтобы хотя бы частично погасить имеющиеся долги.
                        В этом случае юридическое лицо ликвидируется, а физическое получает временное поражение в
                        правах (трех- пятилетний запрет на занятие определенными видами деятельности и обязанность
                        сообщать контрагентам всех своих сделок о своем банкротстве).
                    </li>
                </ol>
            </div>
            <p className="leading-[170%] mt-[30px] max-sm:text-[15px] max-sm:leading-[159%] max-sm:mt-[25px]">
                Какую цель будет преследовать процесс, зависит от наличия у должника активов, средств,
                недвижимого и движимого имущества. Если все это имеется – суд до последнего будет пытаться
                «вытащить» должника из долговой ямы. Это касается как юридических, так и физических лиц.
                Если же к моменту обращения с заявлением о банкротстве не осталось ничего – ни денег,
                ни сколько-нибудь значимых активов – остается один выход: конкурсное производство. Его цели:
            </p>
            <div className="numbered-list mt-5 max-sm:mt-[25px]">
                <ol className="flex flex-col gap-[10px]">
                    <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Реализовать оставшиеся активы и имущество на электронных торгах
                    </li>
                    <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Вернуть кредиторам хотя бы часть долга, а остальное списать
                    </li>
                    <li className="leading-[170%] ml-[45px] max-sm:text-[15px] max-sm:leading-[160%]">
                        Дать банкроту юридическую защиту от разъяренных кредиторов (после официального объявления о
                        банкротстве они теряют право преследовать банкрота за долги)
                    </li>
                </ol>
            </div>
            <div className="pr-[35px] pl-[31px] py-[25px] border-l-4 border-[#BB2525] bg-[#BB2525] bg-opacity-10 mt-[30px] max-sm:mt-[25px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                <p className="text-[#BB2525] leading-[180%] max-sm:text-[15px] max-sm:leading-[150%] max-sm:tracking-[-0.1px]">
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