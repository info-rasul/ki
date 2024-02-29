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
        </Fragment>
    );
};

export default Services;
