import React from 'react';
import oneSvg from "../../../../assets/img/card-img.jpg";

const Specialists = () => {
    return (
        <div>
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10 max-sm:text-[20px] max-sm:leading-[140%] max-sm:mt-[60px] max-sm:mb-[30px]">
                Специалисты
            </h2>
            <div className="flex gap-[20px] max-sm:overflow-x-auto">
                <div className="flex flex-col gap-[20px] max-sm:gap-[15px]">
                    <img className="max-sm:w-[320px] max-sm:h-[320px]" src={oneSvg} alt="escort-card-img" />
                    <div className="flex flex-col gap-[5px]">
                        <p className="text-[20px] leading-[145%] max-sm:text-[18px] max-sm:leading-[150%]">Сергей Гаврилов</p>
                        <p className="text-[15px] leading-[170%] tracking-[.2px]">
                            Эксперт в области юриспруденции
                        </p>
                    </div>
                </div>
                {/*max-sm:hidden*/}
                <div className=" max-sm:hidden flex flex-col gap-[20px] max-sm:gap-[15px] ">
                    <img className="max-sm:w-[320px] max-sm:h-[320px]" src={oneSvg} alt="escort-card-img" />
                    <div className="flex flex-col gap-[5px]">
                        <p className="text-[20px] leading-[145%] max-sm:text-[18px] max-sm:leading-[150%]">Сергей Гаврилов</p>
                        <p className="text-[15px] leading-[170%] tracking-[.2px]">
                            Эксперт в области юриспруденции
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:hidden w-full flex justify-center mt-[30px]">
                <div className="w-[14px] h-[14px] bg-black"></div>
            </div>
        </div>
    );
};

export default Specialists;