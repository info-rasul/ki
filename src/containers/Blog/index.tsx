import type { FunctionComponent } from "react";
import React, {Fragment} from "react";
import { MetaInfo, Header} from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
const Services: FunctionComponent = () => {
    const namePage = "Блог"

    return (
        <Fragment>
            <MetaInfo {...getRouteMetaInfo("Blog")} />
            <Header />
            <div className="container">
                <div className="pt-[120px] max-xl:px-4 max-xl:pt-[53px] max-xl:pb-10">
                    <a href="/services-new/escort">1</a>
                    <a href="/services-new/parallel-import">1</a>
                    <a href="/services-new/comprehensive-protection">1</a>
                    <a href="/services-new/protection-from-subsidiary-responsibility">1</a>
                </div>
            </div>
        </Fragment>
    );
};

export default Services;
