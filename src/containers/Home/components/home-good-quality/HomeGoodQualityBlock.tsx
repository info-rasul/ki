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
            <div className="flex flex-col items-start gap-[30px] pt-[25px] pb-[30px] px-[30px] bg-[#F2F2F2] h-[319px] min-[1420px]:w-[410.666px]  max-[1420px]:gap-[15px] max-[1420px]:p-[25px] max-[1420px]:pt-[23px]">
                <h3 className="text-[25px] font-medium leading-[140%] max-[400px]:w-[270px] max-[400px]:text-[18px] max-[400px]:leading-[150%]">
                    <div dangerouslySetInnerHTML={{__html: title}} />
                </h3>
                <p className="text-[16px] tracking-[0.2px]  leading-[170%] max-[400px]:w-[270px] max-[400px]:text-[15px]">
                    {desc}
                </p>
            </div>
        </Fragment>
    );
}

export default HomeGoodQualityBlock;
