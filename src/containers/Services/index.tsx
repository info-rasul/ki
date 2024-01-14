import type { FunctionComponent } from "react";
import React from "react";
import { MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";

const Services: FunctionComponent = () => (
  <div className="container view-wrapper">
    <MetaInfo {...getRouteMetaInfo("About")} />
      Services
  </div>
);

export default Services;
