// @ts-nocheck
import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import {Header, MetaInfo} from "../../components";
import { getRouteMetaInfo } from "../../config/meta.config";

const Citizenship: FunctionComponent = () => {
    const { isDarkMenu } = getRouteMetaInfo("Escort");
    const darkMenu = !!isDarkMenu;

    return (
        <Fragment>
            <MetaInfo {...getRouteMetaInfo("SupportOfCriminalCases")} />
            <div className="bg-custom-gradient">
                <Header isDarMenu={darkMenu} />
                <div className="container max-[1080px]:px-4 pt-[56px] pb-20 max-lg:pb-[30px] max-[1030px]:pt-[105px]  max-sm:flex-col max-sm:items-start">

                </div>
            </div>
            
        </Fragment>
    );
};

export default Citizenship;
