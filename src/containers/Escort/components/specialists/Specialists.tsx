import React from 'react';
import oneSvg from "../../../../assets/img/card-img.jpg";

const Specialists = () => {
    return (
        <div>
            <h2 className="text-[30px] leading-[150%] tracking-[.2px] mt-20 mb-10">
                Специалисты
            </h2>
            <div className="flex gap-[20px]">
                <div className="flex flex-col gap-[20px]">
                    <img src={oneSvg} alt="escort-card-img" />
                    <div className="flex flex-col gap-[5px]">
                        <p className="text-[20px] leading-[145%]">Сергей Гаврилов</p>
                        <p className="text-[15px] leading-[170%] tracking-[.2px]">
                            Эксперт в области юриспруденции
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <img src={oneSvg} alt="escort-card-img" />
                    <div className="flex flex-col gap-[5px]">
                        <p className="text-[20px] leading-[145%]">Сергей Гаврилов</p>
                        <p className="text-[15px] leading-[170%] tracking-[.2px]">
                            Эксперт в области юриспруденции
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialists;