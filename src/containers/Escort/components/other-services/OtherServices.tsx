import React, {useCallback, useState} from 'react';
import * as animation1 from '../../../../assets/animations/ki_l1_v01.json'
import * as animation2 from '../../../../assets/animations/ki_l2_v01.json'
import * as animation3 from '../../../../assets/animations/ki_l3_v01.json'
import * as animation4 from '../../../../assets/animations/ki_l4_v01.json'
import Lottie, {useLottie} from "lottie-react";


const style = {
    height: 100,
};

const OtherServices = () => {
    const [start, setStart] = useState(false)
    const LottieAnimation = useCallback(({ animationData }: { animationData: any }) => {
        const options = {
            animationData: animationData,
            loop: true,
            autoplay: false,
        };

        const { View, play, pause } = useLottie(options, style);
        start ? play() : pause();
        return View;
    }, [start])
    return (
        <div className="flex flex-col pb-[77px] max-[1080px]:px-[16px] max-sm:pb-[39px]">
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[40px] max-sm:mb-[30px]">
                Другие услуги
            </h2>
            <div className="grid grid-cols-2 gap-5 max-sm:gap-[15px] max-[1080px]:flex max-[1080px]:flex-wrap">
                <div onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
                    <div className="escort-animation flex">
                        <LottieAnimation animationData={animation1}/>
                    </div>
                    <p className="leading-[140%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">Комплексная защита <br className="max-[1439px]:hidden"/> должников от кредиторов</p>
                </div>
                <div onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
                    <div className="escort-animation flex">
                        <LottieAnimation animationData={animation2}/>
                    </div>
                    <p className="leading-[140%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">Защита от субсидиарной <br className="max-[1439px]:hidden"/> ответственности</p>
                </div>
                <div onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
                    <div className="escort-animation flex">
                        <LottieAnimation animationData={animation3}/>
                    </div>
                    <p className="leading-[140%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">
                        Сопровождение на всех стадия <br className="max-[1439px]:hidden"/> банкротства в интересах <br className="max-[1439px]:hidden"/> должника
                    </p>
                </div>
                <div onMouseOver={() => setStart(true)} onMouseOut={() => setStart(false)} className="p-[45px] bg-[#F8F8F8] flex gap-[60px] items-center max-w-[630px] w-full max-[1439px]:max-w-full max-lg:p-[20px] max-lg:gap-[25px]">
                    <div className="escort-animation flex">
                        <LottieAnimation animationData={animation4}/>
                    </div>
                    <p className="leading-[140%] text-[25px] max-sm:text-[16px] max-sm:leading-[150%]">Сопровождение <br className="max-[1439px]:hidden max-sm:block"/> уголовных дел</p>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;