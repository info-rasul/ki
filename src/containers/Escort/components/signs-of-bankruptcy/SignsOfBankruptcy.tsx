import React from 'react';
import SignsOfBankruptcyImg from '../../../../assets/img/signs-of-bankruptcy-img.jpg'

const SignsOfBankruptcy = () => {
    return (
        <div>
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[60px] max-sm:mb-[30px]">
                Признаки банкротства
            </h2>
            <p className="leading-[170%] tracking-[.16px] max-sm:text-[15px] max-sm:leading-[160%]">
                Признаки, свидетельствующие о неплатежеспособности юридического или физического лица,
                однозначно названы в
                <a className="text-[#097990] leading-[170%] font-bold" href="#"> ФЗ №127.</a>
            </p>
            <div className="numbered-list mt-[18px] max-sm:mt-[25px]">
                <ol className="flex flex-col gap-[10px] max-sm:gap-[11px]">
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[156%]">
                        Размер долга достиг определенного размера. Для юридических лиц это триста тысяч рублей,
                        для физических – полмиллиона
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[156%]">
                        На протяжении трех предыдущих месяцев должник ни копейки не перечислил в счет уплаты долгов
                    </li>
                </ol>
            </div>
            <p className="leading-[170%] tracking-[.16px] mt-[32px] max-sm:text-[15px] max-sm:leading-[160%] max-sm:mt-[25px]">
                Если оба признака совпали – лицо обязано в месячный срок подать в арбитражный суд заявление о своей
                несостоятельности. В противном случае, когда он все-таки обратится с заявлением,
                на него наложат административный штраф за пропуск срока подачи заявления.
            </p>
            <div className="pr-[35px] pl-[31px] py-[25px] border-l-4 border-green-700 bg-teal-200 bg-opacity-10 mt-[30px] max-sm:tracking-[.2px] max-sm:mt-[24px] max-sm:py-[20px] max-sm:pr-[30px] max-sm:pl-[26px]">
                <p className="text-[#086C80] leading-[181%] tracking-[.13px] max-sm:text-[15px] max-sm:leading-[153%]">
                    <span className="font-bold">ВНИМАНИЕ!</span> Неплатежеспособность может быть временной или абсолютной. Если речь идет лишь о временных
                    финансовых трудностях должника, обладающего крупными активами или имуществом,
                    процедура банкротства позволит их сохранить, реструктуризировав долг.
                    Когда ситуация исправится, должник вернет все займы полностью, избежав полного банкротства.
                    Если же общая сумма займов превышает совокупную стоимость имущества,
                    оно неизбежно будет продано в счет уплаты долга. Остальные долги спишут на законном основании,
                    как невозвратные.
                </p>
            </div>
            <div className="flex flex-col gap-5 mt-[31px] max-sm:mt-[25px] max-sm:gap-[26px]">
                <p className="leading-[170%] tracking-[.16px] max-sm:text-[15px] max-sm:leading-[160%]">
                    Должник вправе подать заявление о своей неплатежеспособности до того,
                    как признаки банкротства станут бесспорными:
                </p>
                <p className="leading-[170%] tracking-[.16px] max-sm:text-[15px] max-sm:leading-[160%]">
                    Физические лица, у которых после уплаты ежемесячных кредитных платежей остается на руках сумма
                    меньше прожиточного минимума, не обязаны дожидаться трехмесячной просрочки.
                    Или растить долг до полумиллиона, «накручивая» на него штрафы и пени.
                    Суд примет от них заявление и без этого. Нужно только документально доказать,
                    что при создавшихся условиях признаки банкротства появятся в самом обозримом будущем.
                </p>
                <p className="leading-[170%] tracking-[.16px] max-sm:text-[15px] max-sm:leading-[160%]">
                    Юридические лица могут начать готовить документы не банкротство при
                    появлении следующих тревожных признаков:
                </p>
            </div>
            <div className="numbered-list mt-[19px] max-sm:mt-[25px]">
                <ol className="flex flex-col gap-[12px] max-sm:gap-[10px]">
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[163%]">
                        Обнаружение серьезных несоответствий в бухучетности
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[163%]">
                        Уменьшение размера активов предприятия или резкое падение их стоимости
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[163%]">
                        Задержки зарплаты работникам
                    </li>
                    <li className="leading-[170%] ml-[45px] tracking-[.2px] max-sm:text-[15px] max-sm:leading-[158%] max-sm:mt-[4px]">
                        Неполучения инвесторами и акционерами дивидендов, либо получение их с нарушением установленного графика
                    </li>
                </ol>
            </div>
            <p className="leading-[170%] tracking-[.21px] mt-[31px] max-sm:text-[15px] max-sm:leading-[160%] max-sm:mt-[25px]">
                Появление этих или других неформальных признаков финансового неблагополучия компании,
                позволяет руководству подать заявление в арбитражный суд. Его следует снабдить документами,
                подтверждающими неизбежное скорое возникновения законных признаков банкротства.
                Особенно важно это сделать, если предприятие планирует преодолеть трудности и вернуться к
                нормальному функционированию.
            </p>
            <img className="mt-[79px] max-sm:mt-[58px]" src={SignsOfBankruptcyImg} alt="Изображение"/>
        </div>
    );
};

export default SignsOfBankruptcy;