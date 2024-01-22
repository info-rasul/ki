import type { FunctionComponent } from "react";
import React, { useState} from "react";
import Lottie from "react-lottie";
import * as animation5 from '../../../assets/animations/ki_l0_v01.json'

const HomeArticle: FunctionComponent = () => {
    const [isStopped, setIsStopped] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const defaultOptions = (url: any) => ({
        loop: true,
        autoplay: true,
        animationData: url,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    });

    return (
        <div className="grid grid-cols-2 gap-48 mb-[138px] max-xl:gap-[30px] max-xl:mb-[80px] max-[1080px]:flex max-[1080px]:flex-col">
            <div className=" max-xl:w-full max-xl:max-w-full">
                <p className="text-[30px] leading-[140%] max-sm:text-[24px]">
                    Решение проблемных ситуаций <br className="max-xl:hidden" /> защита малого <br className="sm:hidden" /> и среднего
                    бизнеса <br className="max-xl:hidden" /> от недобросовестных кредиторов <br className="max-xl:hidden" /> и конкурентов
                </p>
                <Lottie
                    options={defaultOptions(animation5)}
                    height={132}
                    width={132}
                    isStopped={isStopped}
                    isPaused={isPaused}
                />
            </div>
            <div className=" flex flex-col gap-10 max-xl:max-w-[100%] max-sm:gap-[25px]">
                <p className="leading-[180%] tracking-[.5px] font-medium max-sm:leading-[160%] text-[15px]">
                    Комитет информации (КИ) — концептуальный консалтинговый бренд,
                    объединяющий экспертов с многолетним опытом работы в правоохранительных и
                    надзорных органах, а также в органах государственной власти Российской Федерации.
                    Предоставляем комплексные услуги в области банкротства, защиты от субсидиарной ответственности,
                    защиты от взыскания долгов, защиты от недобросовестной конкуренции и от необоснованных претензий
                    госорганов (в том числе и от уголовных преследований), разрешение корпоративных споров,
                    сделок слияния и поглощения  (М&А), управления проблемными активами и форензика.
                </p>
                <p className="leading-[180%] tracking-[.5px] font-medium max-xl:mt-0 max-sm:leading-[160%] text-[15px]">
                    Мы не мыслим шаблонно! Находим не рискованные, а юридически законные способы сохранить
                    Ваш бизнес в период <br className="sm:hidden" /> турбулентности надвигающего кризиса на внутренних и внешних рынках.
                </p>
            </div>
        </div>
    );
}

export default HomeArticle;
