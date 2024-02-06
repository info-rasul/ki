import type { FunctionComponent } from "react";
import React, {useState, useRef, useCallback} from "react";
// import Lottie from "lottie-react";
import * as animation5 from '../../../assets/animations/ki_l0_v01.json'
import { useLottie } from "lottie-react";
import {Simulate} from "react-dom/test-utils";
import pause = Simulate.pause;

const style = {
    height: 100,
};

const HomeArticle: FunctionComponent = () => {
    const [start, setStart] = useState(false)

    const LottieAnimation = useCallback(() => {
        const options = {
            animationData: animation5,
            loop: true,
            autoplay: false,
        };

        const { View, play, pause } = useLottie(options, style);
        start ? play() : pause();
        return View;
    }, [start])

    return (
        <div onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)}  className="grid grid-cols-2 gap-48 pb-[160px] max-xl:gap-[30px] max-xl:pb-[80px] max-[1080px]:flex max-[1080px]:flex-col">
            <div className="flex flex-col justify-between max-xl:w-full max-xl:max-w-full">
                <p className="text-homeArticle leading-[140%] text-justify tracking-[-0.3px] max-sm:text-[24px] max-sm:tracking-normal">
                    Решение проблемных ситуаций защита малого и среднего
                    бизнеса от недобросовестных кредиторов и конкурентов
                </p>
                <div className="w-[100px] max-[1080px]:hidden">
                    <LottieAnimation />
                </div>
            </div>
            <div className=" flex flex-col gap-10 max-xl:max-w-[100%] max-sm:gap-[25px]">
                <p className="leading-[168%] text-justify max-sm:leading-[160%] max-sm:text-[15px]">
                    <span className="font-medium">Комитет информации (КИ)</span> — концептуальный консалтинговый бренд,
                    объединяющий экспертов с многолетним опытом работы в правоохранительных и
                    надзорных органах, а также в органах государственной власти Российской Федерации.
                    Предоставляем комплексные услуги в области банкротства, защиты от субсидиарной ответственности,
                    защиты от взыскания долгов, защиты от недобросовестной конкуренции и от необоснованных претензий
                    госорганов (в том числе и от уголовных преследований), разрешение корпоративных споров,
                    сделок слияния и поглощения  (М&А), управления проблемными активами и форензика.
                </p>
                <p className="leading-[170%] text-justify max-xl:mt-0 max-sm:leading-[160%] max-sm:text-[15px]">
                    Мы не мыслим шаблонно! Находим не рискованные, а юридически законные способы сохранить
                    Ваш бизнес в период турбулентности надвигающего кризиса на внутренних и внешних рынках.
                </p>
            </div>
        </div>
    );
}

export default HomeArticle;
