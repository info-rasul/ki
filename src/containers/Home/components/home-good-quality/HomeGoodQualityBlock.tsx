import type { FunctionComponent } from "react";
import React, { Fragment } from "react";
interface homeGoodQualityDataProps {
    title: string;
    desc: string;
}

const HomeGoodQualityBlock: React.FC<homeGoodQualityDataProps> = ({title,desc }) => {
    const innerHtml = { __html: title }
    return (
        <Fragment>
            <div className="flex flex-col items-start gap-[30px] p-[30px] pt-[25px] bg-[#F2F2F2] h-[319px] min-[1420px]:w-[410.666px] max-lg:h-auto max-[1420px]:gap-[15px] max-[1420px]:p-[25px] max-[1420px]:pt-[25px]">
                <div className="text-[25px] leading-[140%] max-sm:w-[270px] max-sm:text-[18px] max-sm:leading-[150%]" dangerouslySetInnerHTML={{__html: title}} />
                <p className="leading-[170%] text-[#333] max-sm:w-[270px] max-sm:text-[15px] max-sm:leading-[172%]">
                    {desc}
                </p>
            </div>
        </Fragment>
    );
}

export default HomeGoodQualityBlock;
