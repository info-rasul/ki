import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
import oneSvg from "../../../assets/img/icon55.svg";

const HomeArticle: FunctionComponent = () => (
    <Fragment>
        <div className="flex justify-between max-xl:flex-col gap-[30px] mb-[80px]">
            <div className="max-w-[600px] max-xl:w-full max-xl:max-w-[100%]">
                <p className="text-[30px] leading-[140%] max-sm:text-[24px]">
                    Решение проблемных ситуаций <br className="max-xl:hidden" /> защита малого <br className="sm:hidden" /> и среднего
                    бизнеса <br className="max-xl:hidden" /> от недобросовестных кредиторов <br className="max-xl:hidden" /> и конкурентов
                </p>
                <img className="mt-[102px] ml-[-21px] max-xl:hidden" src={oneSvg} alt="icon55" />
            </div>
            <div className="max-w-[545px] flex flex-col gap-10 max-xl:max-w-[100%] max-sm:gap-[25px]">
                <p className="leading-[169%] font-medium max-sm:leading-[160%] text-[15px]">
                    Комитет информации (КИ) — концептуальный консалтинговый бренд,
                    объединяющий экспертов с многолетним опытом работы в правоохранительных и
                    надзорных органах, а также в органах государственной власти Российской Федерации.
                    Предоставляем комплексные услуги в области банкротства, защиты от субсидиарной ответственности,
                    защиты от взыскания долгов, защиты от недобросовестной конкуренции и от необоснованных претензий
                    госорганов (в том числе и от уголовных преследований), разрешение корпоративных споров,
                    сделок слияния и поглощения  (М&А), управления проблемными активами и форензика.
                </p>
                <p className="leading-[169%] font-medium max-xl:mt-0 max-sm:leading-[160%] text-[15px]">
                    Мы не мыслим шаблонно! Находим не рискованные, а юридически законные способы сохранить
                    Ваш бизнес в период <br className="sm:hidden" /> турбулентности надвигающего кризиса на внутренних и внешних рынках.
                </p>
            </div>
        </div>
    </Fragment>
);

export default HomeArticle;
